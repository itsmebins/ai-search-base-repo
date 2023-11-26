import React from "react";
import { SupportRequestProps } from "./types";
import SupportRequest from "./SupportRequest";
import ContactMethods from "./ContactMethods";

const Support: React.FC<SupportRequestProps> = ({ context }) => {
  return (
    <div className="container mx-auto flex flex-col items-center p-12 pt-14 flex-grow max-w-screen-xl">
      <div className="fgrid-c fgrid-s-xs-5">
        <div className="fgrid-i fgrid-xs-12">
          <span className="text-2xl font-extrabold">Contact Us</span>
        </div>
        <div className="fgrid-i fgrid-xs-12 fgrid-md-8">
          <div className="flex flex-col">
            <SupportRequest context={context} />
          </div>
        </div>
        <div className="fgrid-i fgrid-xs-12 fgrid-md-4">
          <ContactMethods />
        </div>
      </div>
    </div>
  );
};

export default Support;
