import * as yup from "yup";

export const registerSchema = yup.object().shape({
  first_name: yup.string().required("Este campo é obrigatório"),
  surname: yup.string().required("Este campo é obrigatório"),
  cpf: yup.string().required("Este campo é obrigatório"),
  email: yup
    .string()
    .required("Este campo é obrigatório")
    .email("O email é inválido"),
  phone: yup.string().required("Este campo é obrigatório"),
  password: yup.string().required("Este campo é obrigatório"),
  cep: yup.string().required("Este campo é obrigatório"),
  number: yup.string().required("Este campo é obrigatório"),
  // street: yup.string().required("Este campo é obrigatório"),
  // neighborhood: yup.string().required("Este campo é obrigatório"),
  // city: yup.string().required("Este campo é obrigatório"),
});
