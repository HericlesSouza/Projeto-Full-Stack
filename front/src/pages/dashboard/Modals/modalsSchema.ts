import * as yup from "yup";

export const createContactSchema = yup.object().shape({
    full_name: yup.string().required("Campo obrigatório"),
    email: yup
        .string()
        .required("Campo obrigatório")
        .email("É necessário informar um e-mail válido"),
    phone: yup.string().required("Campo obrigatório")
});

export const editContactSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Selecione uma opção"),
})