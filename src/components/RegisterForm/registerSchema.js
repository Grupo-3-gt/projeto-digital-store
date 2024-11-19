import * as yup from "yup"

export const registerSchema = yup.object().shape({
    email: yup.string().required("Este campo é obrigatório").email("O email é inválido"),
    password: yup.string().required("Este campo é obrigatório")
})