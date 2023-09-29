import * as yup from "yup";

const SignupSchema = yup.object({
  firstName: yup
    .string()
    .min(3, "Должно быть 3 символа")
    .matches(/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/, "неверное имя")
    .required("Обязательное поле"),
  lastName: yup
    .string()
    .min(3, "Должно быть 3 символа")
    .matches(/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/, "неверная фамилия")
    .required("Обязательное поле"),
  email: yup.string().email("Неверный email").required("Обязательное поле"),
  password: yup
    .string()
    .min(8, "Должно быть 8 символов")
    .required("Обязательное поле"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Обязательное поле"),
});

export default SignupSchema;
