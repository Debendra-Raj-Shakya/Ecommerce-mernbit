import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">Main</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/home">Home</Link></li>
      
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/login'>Login</Link></li>

    </ul>
  </div>
</div>
    </>
  );
};

export default Navbar;
