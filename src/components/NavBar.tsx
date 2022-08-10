import type { NextPage } from "next";
import React, { useRef, useState } from "react";
// import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { trpc } from "../utils/trpc";
import { Menubar } from 'primereact/menubar';

const pages = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
  { label: "Register", url: "/register" },
  { label: "Dashboard", url: "/dashboard" },
  { label: "API", url: "/api-tests" },
]

const NavBar: React.FC = () => {
  return (
    <>
    <Menubar 
    model={pages}
    start={<h1><a href='/'>Logo</a></h1>}
    />
    </>
  );
};

export default NavBar;
