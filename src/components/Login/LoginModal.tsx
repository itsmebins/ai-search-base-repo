import React, { useState, useEffect } from "react";
import Router from "next/router";
import { LoginModalProps } from "./types";
import { Formik, FormikHelpers, FormikProps } from "formik";
import * as yup from "yup";
import { useIntl } from "react-intl";
import { Modal, Loader } from "components/UI";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import LoginForm from "./LoginForm";
import { register, login } from "utils/apiCalls";

interface LoginValues {
  userName: string;
  password: string;
}

interface RegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  countryCode: string;
  locale: string;
  rPassword: string;
}

const phoneSchema = (phoneRequired = true, formatMessage: any) => {
  return phoneRequired
    ? yup
        .string()
        .max(10, formatMessage({ id: "MAX_N_CHARACTERS" }, { max: 10 }))
        .min(10, formatMessage({ id: "MIN_N_CHARACTERS" }, { min: 10 }))
        .matches(/^[0-9]*$/, formatMessage({ id: "NUMBERS_ONLY" }))
        .required(formatMessage({ id: "REQUIRED" }))
    : yup
        .string()
        .max(10, formatMessage({ id: "MAX_N_CHARACTERS" }, { max: 10 }))
        .min(10, formatMessage({ id: "MIN_N_CHARACTERS" }, { min: 10 }))
        .matches(/^[0-9]*$/, formatMessage({ id: "NUMBERS_ONLY" }));
};

let formikProps: FormikProps<LoginValues | RegisterValues>;

const LoginModal: React.FC<LoginModalProps> = ({
  open = false,
  onClose,
  phoneRequired = true,
  formType = "login",
  redirectRoute = "/",
}) => {
  const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "India",
    countryCode: "IN",
    locale: "en_US",
    rPassword: "",
  };
  const initialValuesLogin = { userName: "", password: "" };

  const { formatMessage } = useIntl();
  const required = formatMessage({ id: "REQUIRED" });
  const formSchema = yup.object({
    email: yup
      .string()
      .trim()
      .email(formatMessage({ id: "EMAIL_MUST_BE_VALID" }))
      .required(required),
    rPassword: yup
      .string()
      .min(4, formatMessage({ id: "MIN_N_CHARACTERS" }, { min: 4 }))
      .required(formatMessage({ id: "REQUIRED" })),
    firstName: yup
      .string()
      .max(40, formatMessage({ id: "MAX_N_CHARACTERS" }, { max: 40 }))
      .required(formatMessage({ id: "REQUIRED" })),
    phone: phoneSchema(phoneRequired, formatMessage),
  });
  const formSchemaLogin = yup.object({
    userName: yup
      .string()
      .trim()
      .email(formatMessage({ id: "EMAIL_MUST_BE_VALID" }))
      .required(required),
    password: yup.string().required(formatMessage({ id: "REQUIRED" })),
  });

  // const { showSnackbar } = useGlobalSnackbar();
  const showSnackbar = (a: string, b: string) => {
    console.log("hello");
  };
  const [currentUser = {}, userActions] = useCurrentUser();
  const [validationError, setValidationError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(formType === "login");

  function isLoginValues(values: any): values is LoginValues {
    return (values as LoginValues).userName !== undefined;
  }
  
  function isRegisterValues(values: any): values is RegisterValues {
    return (values as RegisterValues).email !== undefined;
  }

  const handleSubmit = async (values: LoginValues | RegisterValues, actions: FormikHelpers<LoginValues | RegisterValues>) => {

    if (isLoginValues(values) && showLogin) {
      await handleLogin(values, actions);
    } else if (isRegisterValues(values)) {
      await handleSignup(values, actions);
    }
  };
  

  const handleSignup = async (values: RegisterValues, actions: FormikHelpers<LoginValues | RegisterValues>) => {
    const { setSubmitting } = actions;
    setLoading(true);
    try {
      const {
        firstName,
        lastName,
        email,
        phone,
        country,
        countryCode = "IN",
        locale = "en_US",
        rPassword,
      } = values;
      const registerPayload = {
        firstName,
        lastName,
        email,
        phone,
        country: country || "India",
        countryCode: countryCode || "IN",
        locale: locale || "en_US",
        password: rPassword,
      };
      const response = await register(registerPayload);
      showSnackbar("success", formatMessage({ id: "PROFILE_IS_CREATED" }));
      onClose();
      if (response.token) {
        userActions?.setAccessToken(response.token);
        Router.replace(redirectRoute);
      }
    } catch (error: any) {
      //console.log((error)
      const errorCode =
        error && error.data && error.data.errorCode
          ? error.data.errorCode
          : "GENERIC_ERROR";
      const errorMsg = errorCode
        ? formatMessage({ id: errorCode })
        : formatMessage({ id: "GENERIC_ERROR" });
      showSnackbar("error", errorMsg);
    }
    setSubmitting(false);
    setLoading(false);
  };

  const handleLogin = async (values: LoginValues, actions: FormikHelpers<LoginValues | RegisterValues>) => {
    try {
      const accessToken = await login(values.userName, values.password);
      if (accessToken) {
        userActions?.setAccessToken(accessToken);
        Router.replace(redirectRoute);
      }
      onClose();
    } catch (error: any) {
      //console.log((error)
      const errorCode =
        error && error?.data && error?.data?.errorCode
          ? error.data.errorCode
          : "GENERIC_ERROR";
      const errorMsg = errorCode
        ? formatMessage({ id: errorCode })
        : formatMessage({ id: "GENERIC_ERROR" });
      showSnackbar("error", errorMsg);
    }
    actions.setSubmitting(false);
  };

  useEffect(() => {
    if (showLogin) {
      formikProps.setValues(initialValuesLogin);
    } else {
      formikProps.setValues(initialValuesRegister);
    }
  }, [showLogin]);

  useEffect(() => {
    if (formType === "login") {
      if (!showLogin) {
        setShowLogin(true);
      }
    } else {
      if (showLogin) {
        setShowLogin(false);
      }
    }
  }, [formType]);

  return (
    <Formik
      initialValues={showLogin ? initialValuesLogin : initialValuesRegister}
      onSubmit={handleSubmit}
      validationSchema={() => (showLogin ? formSchemaLogin : formSchema)}
      autoComplete="off"
    >
      {(formikBag) => {
        formikProps = formikBag;
        return (
          <Modal
            title={
              showLogin
                ? formatMessage({ id: "SIGN_IN_HEADING" })
                : formatMessage({ id: "SIGNUP_FREE" })
            }
            open={open}
            onClose={onClose}
            className="max-w-md mx-auto bg-white rounded-xl"
          >
            <div>
              {loading && <Loader />}

              {showLogin ? (
                <LoginForm
                  formikProps={formikBag}
                  showSignUp={(e) => {
                    if (e) {
                      e.stopPropagation();
                      e.preventDefault();
                    }
                    setShowLogin(false);
                  }}
                />
              ) : (
                <LoginForm
                  formikProps={formikBag}
                  showSignUp={(e) => {
                    if (e) {
                      e.stopPropagation();
                      e.preventDefault();
                    }
                    setShowLogin(false);
                  }}
                />
              )}
            </div>
          </Modal>
        );
      }}
    </Formik>
  );
};

export default LoginModal;
