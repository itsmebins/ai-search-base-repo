import React from "react";
import { SupportFormProps } from "./types";
import { Form } from "formik";
import { Field } from "formik";
import {
  Input as FormInput,
  Select as FormSelect,
  CheckboxGroup,
  Textarea,
} from "components/UI";
import { supportTypes, iTservices } from "utils/appData";

const SupportForm: React.FC<SupportFormProps> = ({
  selectedServices = [],
  setService,
  showService,
  serviceError,
}) => {
  return (
    <Form autoComplete="false">
      <div className="fgrid-c fgrid-s-xs-5">
        <div className="fgrid-i fgrid-xs-12">
          <div>
            <Field
              name="name"
              component={FormInput}
              required={true}
              label="Your Name"
              placeholder="Your Name"
              autoComplete="no"
            />
          </div>
        </div>
        <div className="fgrid-i fgrid-xs-12 fgrid-md-6">
          <div>
            <Field
              name="email"
              component={FormInput}
              required={true}
              label="Email "
              placeholder="Email "
            />
          </div>
        </div>
        <div className="fgrid-i fgrid-xs-12 fgrid-md-6">
          <div>
            <Field
              name="phone"
              component={FormInput}
              label="Phone Number(Optional)"
              placeholder="Phone Number(Optional)"
              autoComplete="no"
            />
          </div>
        </div>
        <div className="fgrid-i fgrid-xs-12 fgrid-md-6">
          <div>
            <Field
              name="company"
              component={FormInput}
              label="Company(Optional)"
            />
          </div>
        </div>
        <div className="fgrid-i fgrid-xs-12 fgrid-md-6">
          <div>
            <Field
              name="website"
              component={FormInput}
              label="Website(Optional)"
            />
          </div>
        </div>
        {showService && (
          <div className="fgrid-i fgrid-xs-12">
            <div>
              <CheckboxGroup
                name="services"
                label={"What services can we provide you?"}
                options={iTservices}
                onChange={setService}
                selectedValues={selectedServices || []}
                error={serviceError}
              />
            </div>
          </div>
        )}

        {!showService && (
          <div className="fgrid-i fgrid-xs-12">
            <div>
              <Field
                name="type"
                component={FormSelect}
                label="Type of request"
                options={supportTypes}
                required={true}
              />
            </div>
          </div>
        )}

        <div className="fgrid-i fgrid-xs-12">
          <div>
            <Field
              name="msg"
              component={Textarea}
              multiline="true"
              required={true}
              label="Message"
              placeholder="Please enter your requirements here"
              rows={4}
              fullWidth={true}
            />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default SupportForm;
