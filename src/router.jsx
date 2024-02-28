import PrivateRoutes from "./middleware/PrivateRoutes";
import { Routes, Route } from "react-router-dom";

import Welcome from "./views/Welcome";
import Home from "./views/Home";
import Login from "./views/auth/Login";
import LoginSSO from "./views/auth/LoginSSO";
import SidangCreate from "./views/sidangs/Create";

const router = (
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/login" element={<Login />} />
    <Route path="/loginsso" element={<LoginSSO />} />

    <Route element={<PrivateRoutes role="RLMHS" />}>
      <Route path="/home" element={<Home />} />
      <Route path="/sidang/create" element={<SidangCreate />} />
    </Route>

    <Route path="*" element={<p>404 Error - Nothing here...</p>} />
  </Routes>
);

export default router;
