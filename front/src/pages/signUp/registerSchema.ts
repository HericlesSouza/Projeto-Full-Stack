import * as yup from "yup";

export const registerSchema = yup.object().shape({
  full_name: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "O nome precisa ter no mínimo 3 caracteres")
    .max(100, "O nome precisa ter no máximo 100 caracteres"),

  email: yup
    .string()
    .required("Campo obrigatório")
    .email("É necessário informar um e-mail válido"),

  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário ao menos um número.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário ao menos um caractere especial"
    )
    .min(8, "É necessário uma senha de no mínimo 8 caracteres"),

  passwordConfirmed: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),

  phone: yup.string().required("Campo obrigatório")
});
