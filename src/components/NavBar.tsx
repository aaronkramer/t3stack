import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { trpc } from "../utils/trpc";
import styles from "./NavBar.module.css"

const pages = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Register", link: "/register" },
  { name: "Dashboard", link: "/dashboard" },
  { name: "API", link: "/api-tests" },
]

const NavBar: React.FC = () => {
  return (
    <>
      <Container className={styles.inline}>
        <Navbar variant="light" bg="light">
          <Navbar.Brand href="/">Aaron's Thing <img /></Navbar.Brand>
          <Container>
            {pages.map((page) => {
              return (
                <Nav.Link href={page.link}>{page.name}</Nav.Link>
              )
            })}
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default NavBar;
