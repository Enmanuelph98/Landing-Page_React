import React from "react";

const Navbar = () => {
  return <nav className="navbar navbar-dark bg-dark ">
      <div className="container-fluid ">
         <a className="navbar-brand " href="#">Start bootstrap</a>
         <div className=" ms-auto d-flex">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Services</a>
            <a className="nav-link " href="#" >Contact</a>
         </div>
    </div>
  </nav>;
};

export default Navbar;
