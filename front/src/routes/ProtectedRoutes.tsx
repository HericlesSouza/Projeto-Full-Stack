import { Outlet, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { api } from "../services/api";
import { useEffect } from "react";

export const ProtectedRoutes = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("@token");

    useEffect(() => {
        (async () => {
            if (!token) {
                navigate("/");
                return;
            }

            const { id } = jwt_decode(token) as { id: number };

            try {
                await api.get(`clients/${id}`);
                navigate("/dashboard");
            } catch (error) {
                console.log(error);
                navigate("/");
            }
        })();
    }, []);
    return <Outlet />;
};
