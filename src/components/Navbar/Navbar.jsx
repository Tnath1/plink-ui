import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="left">
        <Link href="/" className="logo">
          <img src="/public/logo.png" alt="logo image" />
          <span>P'Links</span>
        </Link>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Agent</Link>
      </div>
      <div className="right">
        <Link href="/">Sign in</Link>
        <Link href="/" className="register">
          Sign up
        </Link>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu icon"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Agent</Link>
          <Link href="/">Sign in</Link>
          <Link href="/">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
