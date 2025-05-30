import { Route, Routes } from "react-router-dom";
import Home from "../pages/Dashboard/Home";
import Developer from "../pages/Dashboard/Developer";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import BasicLayouts from "../layouts/BasicLayout";
import Login from "../pages/Dashboard/Login";
import About from "../pages/Dashboard/About";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer" element={<Developer />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}