import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledDiv, StyledForm } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { iLoginUser } from "../../contexts/userContext/types";
import { loginSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext/userContext";

export const Login = () => {
    const { registerError, setRegisterError, userLogin } =
        useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iLoginUser>({
        resolver: yupResolver(loginSchema),
    });

    const submit: SubmitHandler<iLoginUser> = async (data) => {
        setRegisterError(false);
        userLogin(data);
    };

    return (
        <StyledDiv className="container">
            <h1>Contacts Plus</h1>
            <StyledForm onSubmit={handleSubmit(submit)} noValidate>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <Input
                    id={"email"}
                    type={"text"}
                    placeholder={"Digite aqui seu email"}
                    register={register("email")}
                />
                {errors.email && (
                    <p className="error">{errors.email.message}</p>
                )}

                <label htmlFor="password">Senha</label>
                <Input
                    id={"password"}
                    type={"password"}
                    placeholder={"Digite aqui sua senha"}
                    register={register("password")}
                />
                {errors.password && (
                    <p className="error">{errors.password.message}</p>
                )}
                {registerError && (
                    <p className="error">Email e/ou senha inválidos.</p>
                )}

                <Button type="submit" color={"btnPrimary"} size={"medium"}>
                    Entrar
                </Button>
                <span>Ainda não possui uma conta?</span>
                <Link to={"/signup"}>Cadastre-se</Link>
            </StyledForm>
        </StyledDiv>
    );
};
