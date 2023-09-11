import SignupSchema from "./validationSchema";
import { Formik, Form, Field } from "formik";

import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";

export const LoginPage = () => {
  const bg = require("./img/background.webp");
  const logo = require("./img/logo.svg").default;
  const themeContextData: InitialContextProps = useThemeContext();

  return (
    <div
      className="validation"
      style={{
        background: `linear-gradient(to bottom, black 10%, transparent 235%), url('${bg}') 100% 100% no-repeat`,
        backgroundSize: "cover, cover",
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          isValid,
          dirty,
        }) => (
          <div>
            <Form
              className="form"
              style={{
                borderColor: themeContextData.themeStyle.text,
                color: themeContextData.themeStyle.text,
                fontSize: themeContextData.themeStyle.fontSize,
              }}
            >
              <img
                style={{
                  background: themeContextData.themeStyle.text,
                  borderRadius: 50,
                }}
                className="logo"
                src={logo}
                alt="logo"
              />
              <h1>Войти</h1>
              <label htmlFor="firstName">Имя</label>
              <Field
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
              {errors.firstName && touched.firstName ? (
                <div className="error">{errors.firstName}</div>
              ) : null}
              <br />
              <label htmlFor="lastName">Фамилия</label>
              <Field
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
              {errors.lastName && touched.lastName ? (
                <div className="error">{errors.lastName}</div>
              ) : null}
              <br />
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
              <br />
              <label htmlFor="password">Пароль</label>
              <Field
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}

              <br />
              <label htmlFor="confirmPassword">Подтвердите пароль</label>

              <Field
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="error">{errors.confirmPassword}</div>
              ) : null}

              <button
                style={{
                  borderColor: themeContextData.themeStyle.text,
                  background: themeContextData.themeStyle.text,
                }}
                className="button"
                disabled={!isValid || !dirty}
                type="submit"
              >
                Отправить
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
