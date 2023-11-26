import React from "react";
import { EmailIcon } from "components/Icons";


const ContactMethods = () => {
  const email = process.env?.SUPPORT_EMAIL || "support@example.com"
  return (
    <>
      <div className="fgrid-c fgrid-s-xs-2">
        <div className="fgrid-i fgrid-xs-12 items-center">
          <div className="flex">
            <a href={`mailto:${email}`} className="flex hover:text-primary">
              <EmailIcon width="35" height="35" />
              <span className="text-lg"> {email}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMethods;
