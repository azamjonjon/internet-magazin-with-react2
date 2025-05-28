import { lazy } from "react";

export const Layout = lazy(()=>import("../pages/layout/layout"))
export const About = lazy(()=>import("../pages/about/about"))
export const Home = lazy(()=>import("../pages/home/home"))
export const SignUp = lazy(()=>import("../pages/signup/signup"))
export const Login = lazy(()=>import("../pages/login/login"))