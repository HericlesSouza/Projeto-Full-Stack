import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    iLoginUser,
    iRegisterUser,
    iUserProviderProps,
    iUserProviderValue,
} from "./types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
    const [registerError, setRegisterError] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("@token");

    useEffect(() => {
        if (!token) {
            navigate("/");
            return;
        }

        api.defaults.headers.common.authorization = `Bearer ${token}`;
    }, []);

    const userRegister = async (data: iRegisterUser) => {
        const id = toast.loading("Por favor espere...");

        try {
            await api.post("clients", data);
            toast.update(id, {
                render: "Conta criada com sucesso!",
                type: "success",
                isLoading: false,
                theme: "colored",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            navigate("/");
        } catch (error) {
            setRegisterError(true);
            toast.update(id, {
                render: "Endereço de e-mail já existe!",
                type: "error",
                isLoading: false,
                theme: "colored",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const userLogin = async (data: iLoginUser) => {
        const id = toast.loading("Por favor espere...");

        try {
            const request = await api.post("/login", data);

            toast.update(id, {
                render: "Login realizado com sucesso!",
                type: "success",
                isLoading: false,
                theme: "colored",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            api.defaults.headers.common.authorization = `Bearer ${request.data.token}`;

            localStorage.setItem("@token", request.data.token);

            navigate("/dashboard");
        } catch (error) {
            toast.update(id, {
                render: "Ops, algo deu errado!",
                type: "error",
                isLoading: false,
                theme: "colored",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setRegisterError(true);
        }
    };

    return (
        <UserContext.Provider
            value={{
                navigate,
                userRegister,
                registerError,
                setRegisterError,
                userLogin,
                token
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
