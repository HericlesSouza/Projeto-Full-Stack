import { Routes, Route } from "react-router-dom";
import { SignUp } from "../pages/signUp";
import { Login } from "../pages/home";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};
