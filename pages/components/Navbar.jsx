import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="d-flex justify-content-between">
        <img src="/images/dinnoLogo.png" alt="" width={100} style={{ width: "100px" }} />
        <div className="d-flex align-items-center fw-bold" style={{fontSize:"12px",letterSpacing:"1.5px",cursor:"pointer"}}>
          <span className="ms-5">HOME</span>
          <span className="ms-5">ABOUT</span>
          <span className="ms-5">SERVICES</span>
          <span className="ms-5">OUR WORK</span>
          <span className="ms-5">OUR JOURNEY</span>
          <span className="ms-5">CONTACT</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
