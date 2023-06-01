import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";
import { StyledDiv, StyledForm, StyledInputMask } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { UserContext } from "../../contexts/userContext/userContext";
import { useContext } from "react";
import { iRegisterUser } from "../../contexts/userContext/types";

export const SignUp = () => {
    const { registerError, setRegisterError, userRegister } =
        useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<iRegisterUser>({
        mode: "onChange",
        resolver: yupResolver(registerSchema),
    });

    const submit: SubmitHandler<iRegisterUser> = async (data) => {
        setRegisterError(false);
        delete data.passwordConfirmed;
        userRegister(data);

        reset({
            email: "",
            password: "",
            passwordConfirmed: "",
        });
    };

    return (
        <StyledDiv className="container">
            <div>
                <h1>Contact Plus</h1>
                <Link to={"/"}>Voltar</Link>
            </div>
            <StyledForm onSubmit={handleSubmit(submit)} noValidate>
                <h2>Crie sua conta</h2>
                <span>Rápido e grátis, vamos nessa</span>
                <label htmlFor="name">Nome Completo</label>
                <Input
                    id={"name"}
                    type={"text"}
                    placeholder={"Digite aqui seu nome"}
                    register={register("full_name")}
                />
                {errors.full_name && (
                    <p className="error">{errors.full_name.message}</p>
                )}

                <label htmlFor="email">Email</label>
                <Input
                    id={"email"}
                    type={"email"}
                    placeholder={"Digite aqui seu email"}
                    register={register("email")}
                />
                {registerError && (
                    <p className="error">Endereço de e-mail já existe!</p>
                )}
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

                <label htmlFor="passwordConfirmed">Confirmar senha</label>
                <Input
                    id={"passwordConfirmed"}
                    type={"password"}
                    placeholder={"Digite aqui sua senha novamente"}
                    register={register("passwordConfirmed")}
                />
                
                {errors.passwordConfirmed && (
                    <p className="error">{errors.passwordConfirmed.message}</p>
                )}

                <label htmlFor="contact">Contato</label>
                <StyledInputMask
                    placeholder="(XX) XXXXX-XXXX"
                    mask=" (99) 99999-9999"
                    maskChar="_"
                    {...register("phone")}
                />
                {errors.phone && (
                    <p className="error">{errors.phone.message}</p>
                )}

                <Button type={"submit"} color={"btnPrimary"} size={"medium"}>
                    Cadastrar
                </Button>
            </StyledForm>
        </StyledDiv>
    );
};
