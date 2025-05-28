import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Loading from "../pages/loading/loading";
import { About, Home, Layout, Login, SignUp } from "../lazy/lazy";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Cart from "../pages/cart/cart";
import ProductById from "../pages/productById/productById";
import Wishlist from "../pages/wishlist/wishlist";
import Checkout from "../pages/checkout/checkout";
import Product from "../pages/product/product";
import Profile from "../pages/profile/profile";
import Contact from "../pages/contact/contact";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact  />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="aboutProduct/:id" element={<ProductById />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="product" element={<Product />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
