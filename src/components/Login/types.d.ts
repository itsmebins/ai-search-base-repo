
import { FormikProps } from 'formik';
import React from 'react';

export type LoginFormProps = {
  formikProps?: FormikProps<LoginValues>;
  showSignUp?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  disabled?: boolean;
  loading?: boolean;
};

export type LoginModalProps = {
  open?: boolean;
  onClose: () => void;
  phoneRequired?: boolean;
  formType?: string;
  redirectRoute?: string;
};
