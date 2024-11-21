import * as yup from "yup"

export const registerSchema = yup.object().shape({
    first_name: yup.string().required("Este campo é obrigatorio"),
    surname: yup.string().required("Este campo é obrigatorio"),
    cpf: yup.string().required("Este campo é obrigatorio").length(11, "O CPF deve ter exatamente 11 caracteres"),
    phone: yup.string().required("Este campo é obrigatorio"),
    email: yup.string().required("Este campo é obrigatório").email("O email é inválido"),
    password: yup.string().required("Este campo é obrigatório"),
})