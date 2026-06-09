import { Routes, Route } from "react-router-dom";

import Home from '../component/home';
import SignIn from '../component/SignIn';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/SignIn" element ={<SignIn />} />
        <Route />

    </Routes>
  )
}

export default AppRoutes