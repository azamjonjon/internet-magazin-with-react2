  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
  import axios from "axios";
  import { jwtDecode } from "jwt-decode";
  export const API = "https://store-api.softclub.tj";
  let token = localStorage.getItem("token");
  let wishlist = localStorage.getItem("wishlist");

  export const get = createAsyncThunk(
    "get/data",
    async (e = {}) => {
      const query = new URLSearchParams();

      if (e.MinPrice != undefined) query.append("MinPrice", e.MinPrice);
      if (e.MaxPrice != undefined) query.append("MaxPrice", e.MaxPrice);
      if (e.BrandId != undefined) query.append("BrandId", e.BrandId);
      if (e.CategoryId != undefined) query.append("CategoryId", e.CategoryId);
      if (e.ProductName) query.append("ProductName", e.ProductName);

      const response = await axios.get(
        `https://store-api.softclub.tj/Product/get-products?${query.toString()}`
      );
      return response.data.data.products;
    }
  );
  export const getBrand = createAsyncThunk(
    "get/getBrand",
    async () => {
      const response = await axios.get(
        `${API}/Brand/get-brands`
      );
      return response.data.data;
    }
  );
  export const getCategory = createAsyncThunk(
    "get/getCategory",
    async () => {
      const response = await axios.get(
        `${API}/Category/get-categories`
      );
      return response.data.data;
    }
  );

  export const addToCart = createAsyncThunk("counter/addToCart", async (id) => {
    try {
      await axios.post(
        `${API}/Cart/add-product-to-cart?id=${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      get();
    } catch (error) {
      console.error(error);
    }
  });

  export const getCart = createAsyncThunk("counter/getCart", async () => {
    try {
      let { data } = await axios.get(`${API}/Cart/get-products-from-cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data.data[0].productsInCart;
    } catch (error) {
      console.error(error);
    }
  });

  export const Price = createAsyncThunk("counter/Price", async () => {
    try {
      let { data } = await axios.get(`${API}/Cart/get-products-from-cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data.data[0].totalPrice;
    } catch (error) {
      console.error(error);
    }
  });

  export const deleteProduct = createAsyncThunk(
    "counter/daleteProduct",
    async (id, { dispatch }) => {
      try {
        await axios.delete(`${API}/Cart/delete-product-from-cart?id=${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(getCart());
      } catch (error) {
        console.error(error);
      }
    }
  );

  export const deleteAll = createAsyncThunk(
    "counter/deleteAll",
    async (_, { dispatch }) => {
      try {
        await axios.delete(`https://store-api.softclub.tj/Cart/clear-cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(getCart());
      } catch (error) {
        console.error(error);
      }
    }
  );

  export const increament = createAsyncThunk(
    "counter/incrimetn",
    async (id, { dispatch }) => {
      try {
        await axios.put(
          `${API}/Cart/increase-product-in-cart?id=${id}`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(getCart());
      } catch (error) {
        console.error(error);
      }
    }
  );
  export const decrement = createAsyncThunk(
    "counter/decrement",
    async (id, { dispatch }) => {
      try {
        await axios.put(
          `${API}/Cart/reduce-product-in-cart?id=${id}`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(getCart());
      } catch (error) {
        console.error(error);
      }
    }
  );

  export const getById = createAsyncThunk(
    "counter/getById",
    async ({ id, navigation },{dispatch}) => {
      try {
        let { data } = await axios.get(
          `${API}/Product/get-product-by-id?id=${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        return data.data;
      } catch (error) {
        console.error(error);
      }
    }
  );
  export const addToWishlist = createAsyncThunk(
    "counter/addToWishlist",
    async (elem, { dispatch }) => {
      try {
        wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      } catch (error) {
        wishlist = [];
      }
      let find = wishlist.find((el) => el.id == elem.id);
      if (find) {
        localStorage.setItem(
          "wishlist",
          JSON.stringify(wishlist.filter((e) => e.id != elem.id))
        );
      } else {
        localStorage.setItem("wishlist", JSON.stringify([...wishlist, elem]));
      }
      dispatch(getFromWishlist());
    }
  );

  export const delFromWishlist = createAsyncThunk(
    "counter/delFromWishlist",
    async (id, { dispatch }) => {
      let wishlist = JSON.parse(localStorage.getItem("wishlist"));
      wishlist = localStorage.setItem(
        "wishlist",
        JSON.stringify(
          wishlist.filter((elem) => elem.id != id)
        )
      );
      wishlist = JSON.parse(localStorage.getItem("wishlist"));
      dispatch(getFromWishlist());
    }
  );

  export const getFromWishlist = createAsyncThunk(
    "counter/getFromWishlist",
    async ({ dispatch }) => {
      try {
        let wishlist = JSON.parse(localStorage.getItem("wishlist"));
        return wishlist;
      } catch (error) {
        console.error(error);
      }
    }
  );

  export const getForProfile = createAsyncThunk(
    "counter/getForProfile",
    async () => {
      try {
        let decon = jwtDecode(token);
        let { data } = await axios.get(
          `${API}/UserProfile/get-user-profile-by-id?id=${decon.sid}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        return data.data;
      } catch (error) {
        console.error(error);
      }
    }
  );

  export const EditProfile = createAsyncThunk(
    "counter/EditProfile",
    async (form, { dispatch }) => {
      try {
        await axios.put(`${API}/UserProfile/update-user-profile`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(get());
      } catch (error) {
        console.error(error);
      }
    }
  );

  export const counterSlice = createSlice({
    name: "counter",
    initialState: {
      users: [],
      data: [],
      price: [],
      productById: [],
      userProfile: [],
      filterData: [],
      barnd: [],
      category: [],
    },
    reducers: {
      filterData: (state, action) => {
        state.users = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(get.fulfilled, (state, action) => {
          state.users = action.payload;
        })
        .addCase(getCart.fulfilled, (state, actions) => {
          state.data = actions.payload;
        })
        .addCase(Price.fulfilled, (state, actions) => {
          state.price = actions.payload;
        })
        .addCase(getById.fulfilled, (state, actions) => {
          state.productById = actions.payload;
        })
        .addCase(getForProfile.fulfilled, (state, actions) => {
          state.userProfile = actions.payload;
        })
        .addCase(getBrand.fulfilled, (state, actions) => {
          state.barnd = actions.payload;
        })
        .addCase(getCategory.fulfilled, (state, actions) => {
          state.category = actions.payload;
        })
    },
  });
  export const { filterData } = counterSlice.actions;
  export default counterSlice.reducer;
