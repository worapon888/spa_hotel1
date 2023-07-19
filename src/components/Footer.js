import React from "react";
// Logo
import LogoWhite from "../assets/img/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex justify-between">
        {/* Logo */}
        <img src={LogoWhite} alt="logo" />
        Copyright &copy; 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
