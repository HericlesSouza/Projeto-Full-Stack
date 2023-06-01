import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("O e-mail obrigatório")
    .email("É necessário informar um e-mail válido"),

  password: yup.string().required("A senha é obrigatória"),
});
