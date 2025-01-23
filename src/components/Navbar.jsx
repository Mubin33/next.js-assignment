"use client";

import React from "react";
import Link from "next/link";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs"; // Correct hook import

const Navbar = () => {
  const { isAuthenticated, user, login, logout } = useKindeAuth(); // Updated hook usage

  const navItem = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/profile">Profile</Link></li>
      {isAuthenticated ? (
        <li><button onClick={logout}>Logout</button></li>
      ) : (
        <li><button onClick={login}>Login</button></li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn">Button</button>
      </div>
    </div>
  );
};

export default Navbar;
