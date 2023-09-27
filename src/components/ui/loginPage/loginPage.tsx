import SignupSchema from "./validationSchema";
import { Formik, Form, Field } from "formik";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { useAuthContext } from "../../authContext/authContext";
import { CustomButton } from "../../shared/customButton/customButton";
import UseRadioGroup from "./radioGroup";

export const LoginPage = () => {
  const bg = require("./img/background.webp");
  const logo = require("./img/logo.svg").default;
  const themeContextData: InitialContextProps = useThemeContext();
  const authData = useAuthContext();

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
            authData.login();

            setSubmitting(true);
            authData.setValues(values);
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
          <div
            style={{
              borderColor: themeContextData.themeStyle.text,
              color: themeContextData.themeStyle.text,
              fontSize: themeContextData.themeStyle.fontSize,
              background: themeContextData.themeStyle.background,
            }}
            className="wrapper"
          >
            <Form className="form" style={{}}>
              <img
                style={{
                  background: themeContextData.themeStyle.body,
                  borderRadius: 50,
                }}
                className="logo"
                src={logo}
                alt="logo"
              />
              <h1>Войти</h1>
              <label htmlFor="firstName">Имя</label>
              <Field
                style={{
                  color: themeContextData.themeStyle.text,
                  borderBottom: `1px solid ${themeContextData.themeStyle.text}`,
                }}
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
                style={{
                  color: themeContextData.themeStyle.text,
                  borderBottom: `1px solid ${themeContextData.themeStyle.text}`,
                }}
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
                style={{
                  color: themeContextData.themeStyle.text,
                  borderBottom: `1px solid ${themeContextData.themeStyle.text}`,
                }}
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
                style={{
                  color: themeContextData.themeStyle.text,
                  borderBottom: `1px solid ${themeContextData.themeStyle.text}`,
                }}
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
                style={{
                  color: themeContextData.themeStyle.text,
                  borderBottom: `1px solid ${themeContextData.themeStyle.text}`,
                }}
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
              <div style={{ margin: 20 }}>
                <CustomButton
                  themeStyles={themeContextData.themeStyle}
                  disabled={!isValid || !dirty}
                  type="submit"
                >
                  Отправить
                </CustomButton>
              </div>
            </Form>
            <div className="premium">
              <UseRadioGroup />
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
