import React from "react";
import { LoginFormProps } from "./types";
import { useIntl, FormattedMessage } from "react-intl";
import { Form, Field } from "formik";
import Link from "next/link";
import { Input as FormInput, Button } from "components/UI";

const LoginForm: React.FC<LoginFormProps> = ({
  formikProps,
  showSignUp,
  loading,
}) => {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <Form>
          <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <div className="w-full min-w-[200px]">
                <Field
                  name="userName"
                  component={FormInput}
                  label={formatMessage({ id: "USERNAME_EMAIL" })}
                  size="large"
                  type="text"
                />
              </div>
              <div className="w-full min-w-[200px]">
                <Field
                  name="password"
                  component={FormInput}
                  type="password"
                  label={formatMessage({ id: "PASSWORD" })}
                  size="large"
                />
              </div>
            </div>
          </div>
          <div className="grid place-items-end mb-2">
            <Link href="/forgot-password">
              <span className="text-primary hover:text-primary/75">
                {formatMessage({ id: "FORGOT_PASSWORD" })}?
              </span>
            </Link>
          </div>

          <div className="grid place-items-center">
            <Button
              type="submit"
              color="primary"
              fullWidth
              disabled={formikProps?.isSubmitting || loading}
            >
              {formatMessage({ id: "LOGIN" })}
            </Button>
          </div>

          <div className="w-full min-w-[200px] grid place-items-center">
            <div className="divider w-full" />
          </div>

          <div className="w-full min-w-[200px] grid place-items-center">
            <div>
              <FormattedMessage id="LOGIN_NOT_REGISTERED">
                {(nodes: React.ReactNode[]) => (
                  <div className="flex flex-row">
                    <div>{nodes}</div>
                    <div className="ml-2 text-primary hover:text-primary/75">
                      <a onClick={showSignUp}>
                        {" "}
                        <FormattedMessage id="SIGNUP_FREE" />{" "}
                      </a>
                    </div>
                  </div>
                )}
              </FormattedMessage>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
