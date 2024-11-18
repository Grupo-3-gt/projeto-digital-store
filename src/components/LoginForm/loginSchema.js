import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup.string().required("Este campo é obrigatório").email("O email é inválido"),
    password: yup.string().required("Este campo é obrigatório")
})