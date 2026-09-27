//import { useState, useEffect } from "react";
function Header() {

  return (
    <>
      <div className="nav-links">
        <li>
          <ul><a href="">Home</a></ul>
          <ul><a href="/about">About Us</a></ul>
          <ul><a href="">Contact US</a></ul>
          <ul><a href="">Login/Logout</a></ul>
        </li>
      </div>
    </>
  );
}

export default Header;
