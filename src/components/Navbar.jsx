"use client";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = ({ user }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  console.log(currentPath);

  const navItem = (
    <>
      <li>
        <Link
          href="/"
          className={
            currentPath === "/" ? "text-black font-bold" : "text-gray-600"
          }
        >
          Home
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <Link
              href="/profile"
              className={
                currentPath === "/profile"
                  ? "text-black font-bold"
                  : "text-gray-600"
              }
            >
              Profile
            </Link>
          </li>
          <li>
            <LogoutLink>Logout</LogoutLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <LoginLink>Profile</LoginLink>
          </li>
          <li>
            <RegisterLink>Sign up</RegisterLink>
          </li>
          <li>
            <LoginLink>Login</LoginLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Mubin</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
