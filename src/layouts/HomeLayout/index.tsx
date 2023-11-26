import React from "react";
import Header from "components/Headers/Header";
import Footer from "components/Footer";

type Props = {
  children: React.ReactNode;
};
const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
