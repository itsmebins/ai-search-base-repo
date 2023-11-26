import React, { useState } from "react";
import { SupportRequestProps } from "./types";
import { Button, Loader } from "components/UI";
import { Formik } from "formik";
import * as yup from "yup";
import SupportForm from "./SupportForm";
// import { createSupportTicket } from "utils/apiCalls";
import useToast from "src/hooks/useToast";

const createSupportTicket = () => 'Dummy return'

const contextTypes = {
  CONTEXT_SUPPORT_PAGE: "CONTEXT_SUPPORT_PAGE",
  CONTEXT_FEEDBACK_PAGE: "CONTEXT_FEEDBACK_PAGE",
  CONTEXT_SERVICE_REQUEST_PAGE: "CONTEXT_SERVICE_REQUEST_PAGE",
};

const locMessages = {
  EMAIL_MUST_BE_VALID: "Please enter a valid email address.",
  NUMBERS_ONLY: "Must be numbers only",
  MAX_N_CHARACTERS: "Must be 10 characters max",
  MIN_N_CHARACTERS: "Must be 10 characters min",
  GENERIC_ERROR: "An unexpected error occurred. Please try again later.",
  SUBMIT: "Submit",
  CREATE_SUPPORT_TICKET_SUCCESS:
    "Thank you for reaching out to us. We appreciate your patience, and a member of our customer care team will respond to your query shortly.",
};

const formatMessage = (key: string) => key || "";
interface ServiceOption {
  value: string; // Add other properties as needed
}

const SupportRequest: React.FC<SupportRequestProps> = ({ context }) => {
  // const router = useRouter();
  // const { formatMessage } = useIntl()
  const { setToastAlert } = useToast();
  // const q = router.query || {}
  const [loading, setLoading] = useState(false);
  const formSchema = yup.object({
    name: yup.string().trim().required("Required"),
    type: yup
      .string()
      .test("typeTest", "Required", (value) => {
        return context !== 'CONTEXT_SERVICE_REQUEST_PAGE' && !value
          ? false
          : true;
      })
      .nullable(),
    email: yup
      .string()
      .trim()
      .email(formatMessage(locMessages.EMAIL_MUST_BE_VALID))
      .required("Required"),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, formatMessage(locMessages.NUMBERS_ONLY))
      .max(10, formatMessage(locMessages.MAX_N_CHARACTERS))
      .min(10, formatMessage(locMessages.MIN_N_CHARACTERS)),
    msg: yup.string().trim().required("Required"),
  });

  const saveCustomerSupportForm = async () => {
    setLoading(true);

    try {
      await createSupportTicket();
      setToastAlert({
        type: "success",
        title: "Success!",
        message: formatMessage(locMessages.CREATE_SUPPORT_TICKET_SUCCESS),
      });
    } catch (error: any) {
      console.log(error);
      setToastAlert({
        type: "error",
        title: "Error!",
        message:
          (error?.data && error?.data.errorCode) ||
          "Something went wrong. Please try again later or contact the support team.",
      });
      /* const errorCode =
        error && error.data && error.data.errorCode
          ? error.data.errorCode
          : 'GENERIC_ERROR'
      const errorMsg = locMessages[errorCode]
        ? formatMessage(locMessages[errorCode])
        : formatMessage(locMessages.GENERIC_ERROR) */
      // showSnackbar('error', errorMsg)
    }
    setLoading(false);
  };

  const initialValues = {
    email: "",
    phone: "",
    name: "",
    country: "",
    countryCode: "",
    msg: "",
    type: context === contextTypes.CONTEXT_FEEDBACK_PAGE ? "FEEDBACK" : "",
    services: [],
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={saveCustomerSupportForm}
      validationSchema={formSchema}
      autoComplete="off"
    >
      {(formikBag) => {
        const services = (formikBag.values || {}).services || [];
        const setService = (e: React.ChangeEvent<HTMLInputElement>, option: ServiceOption) => {
          const exist = services.find((o: ServiceOption) => o?.value === option.value);
          if (e.target.checked && !exist) {
            const newServices = [...services, option];
            return formikBag.setFieldValue("services", newServices);
          } else if (!e.target.checked && exist) {
            const filterServices =
              services.filter((o: ServiceOption) => o?.value !== option.value) || [];
            const newServices = [...filterServices];
            return formikBag.setFieldValue("services", newServices);
          }
        };
        return (
          <div>
            <SupportForm
              selectedServices={services}
              setService={setService}
              showService={
                context === contextTypes.CONTEXT_SERVICE_REQUEST_PAGE
              }
            />
            <div className="flex items-center justify-center mt-6">
              <div className="min-w-[230px]">
                <Button
                  color="primary"
                  onClick={formikBag.handleSubmit}
                  disabled={
                    (context === contextTypes.CONTEXT_SERVICE_REQUEST_PAGE &&
                      services.length === 0) ||
                    formikBag.isSubmitting
                  }
                  fullWidth
                >
                  {formatMessage(locMessages.SUBMIT)}
                </Button>
              </div>
            </div>
            {loading && <Loader />}
          </div>
        );
      }}
    </Formik>
  );
};

export default SupportRequest;
