import React from "react";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="d-flex justify-content-between">
        <img src="/images/dinnoLogo.png" alt="" width={100} style={{ width: "100px" }} />
        <div className="d-md-flex align-items-center fw-bold d-none" style={{ fontSize: "12px", letterSpacing: "1.5px", cursor: "pointer" }}>
          <span className="ms-3 ms-lg-5">HOME</span>
          <span className="ms-3 ms-lg-5">ABOUT</span>
          <span className="ms-3 ms-lg-5">SERVICES</span>
          <span className="ms-3 ms-lg-5">OUR WORK</span>
          <span className="ms-3 ms-lg-5">OUR JOURNEY</span>
          <span className="ms-3 ms-lg-5">CONTACT</span>
        </div>
        <div className="d-flex d-md-none align-items-center">
          <Dropdown className="btn">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            <i class="fa-solid fa-bars"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">HOME</Dropdown.Item>
              <Dropdown.Item href="#/action-2">ABOUT</Dropdown.Item>
              <Dropdown.Item href="#/action-3">CONTACT</Dropdown.Item>
              <Dropdown.Item href="#/action-1">SERVICES</Dropdown.Item>
              <Dropdown.Item href="#/action-2">OUR WORK</Dropdown.Item>
              <Dropdown.Item href="#/action-3">OUR JOURNEY</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
