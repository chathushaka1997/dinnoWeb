import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Lottie from "react-lottie";
import animationData from "./images/animation.json";

const Layout = ({ children }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: "svg",
    isClickToPauseDisabled: true,
  };
  return (
    <div>
      <Navbar />
      <div className="bgSvg">
        <Lottie options={defaultOptions} />
      </div>

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
