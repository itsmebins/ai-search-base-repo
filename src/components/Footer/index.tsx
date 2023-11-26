import React from "react";
import Link from "next/link";
import { useIntl } from "react-intl";

// backgroundColor: "#6f7585",
// reference https://www.material-tailwind.com/docs/html/footer

const Footer = () => {
  const { formatMessage } = useIntl();
  return (
    <footer
      aria-label="Site Footer"
      className="di-m w-full flex-wrap items-center justify-center gap-y-2 gap-x-6  py-6 text-center bg-white  shadow"
    >
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 min-[320px]:ml-2 min-[670px]:ml-0">
      <li>
          <Link passHref href={`/support`}>
            <span className="hover:text-primary focus:text-primary">
              {formatMessage({ id: "CONTACT_US" })}
            </span>
          </Link>
        </li>
      </ul>
      <div>
        © {new Date().getFullYear()}{" "}
        {process.env.REACT_APP_DOMAIN}
      </div>
    </footer>
  );
};

export default Footer;
