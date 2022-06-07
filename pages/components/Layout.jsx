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
    isClickToPauseDisabled:true
  };
  return (
    <div>
      <Navbar />
      <Lottie options={defaultOptions}  style={{position:"absolute",right:"0px",top:"0px",height:"auto",width:"1300px",zIndex:"-1000"}}/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
