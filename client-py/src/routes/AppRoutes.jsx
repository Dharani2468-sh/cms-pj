import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Developer from "../pages/Developer";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import BasicLayouts from "../layouts/BasicLayout";
import Login from "../pages/Login";
import About from "../pages/About";
import DogList from "../pages/Dashboard/DogList";
import BirdList from "../pages/Dashboard/BirdList";
import CatList from "../pages/Dashboard/CatList";
import RabbitList from "../pages/Dashboard/RabbitList";
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
      
      <Route

			>
        <Route path="/DogList" element={<DogList />} />
        <Route path="/BirdList" element={<BirdList />} />
        <Route path="/CatList" element={<CatList />} />
        <Route path="/RabbitList" element={<RabbitList />} />
      </Route>


      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}