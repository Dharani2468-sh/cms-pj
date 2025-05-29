import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import BasicLayouts from "../layouts/BasicLayout";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}