/* eslint-disable */
import React, { useState } from "react";
import Image from "next/image";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="section">
      <div className="">
        <Container>
          <Navbar className="navbar-expand-lg h2-nav">
            <NavbarBrand></NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active"></NavItem>
                <NavItem></NavItem>
                <NavItem></NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav></DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp"></DropdownMenu>
                </UncontrolledDropdown>
                <NavItem></NavItem>
                <NavItem></NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default HeaderComponent;

