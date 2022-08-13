import type { NextPage } from "next";
import React, { useRef, useState } from "react";
// import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { trpc } from "../utils/trpc";
import { Menubar } from 'primereact/menubar';
import { useSession } from "next-auth/react";

const pages = [
  { label: "Home", url: "/", permissions: null },
  { label: "About", url: "/about", permissions: null },
  { label: "Contact", url: "/contact", permissions: null },
  { label: "Register", url: "/register", permissions: null },
  { label: "Dashboard", url: "/dashboard", permissions: null },
  { label: "API", url: "/api-tests", permissions: null },
  { label: "Admin", url: "/admin", permissions: 'loggedIn' },
  { label: "Login", url: "/api/auth/signin", permissions: 'loggedOut' },
  { label: "Logout", url: "/api/auth/signout", permissions: 'loggedIn' },
]
 


const NavBar: React.FC = () => {
  const { data: session } = useSession()
  const setPages = () => {
    if (!session) {
      return pages.filter(page => page.permissions === null || page.permissions === 'loggedOut')
    }
    else if (session) {
      return pages.filter(page => page.permissions === null || page.permissions === 'loggedIn')
    }
    else {
      return pages
    }
  }
  const localPageSet = setPages()
  return (
    <>
      <Menubar
        model={localPageSet}
        start={<h1><a href='/'>Logo</a></h1>}
      />
    </>
  );
};

export default NavBar;
