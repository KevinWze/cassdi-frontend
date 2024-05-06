/* eslint-disable */
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Formulario from "/components/custom/sections/FormularioContacto"
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

import logo from "../../assets/images/logos/CASSDI.png"; //Logo CASSDI

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
   
    <div id="section" className="fixed-top">
      <div className="bg-black">
        <Container>

          <Navbar className="navbar-expand-lg h2-nav container-fluid ">
            <NavbarBrand>
              <Image src={logo} class="rounded" alt="CASSDI"  width={221} height={64}/>
            </NavbarBrand>
            
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>

            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">

                {/* INICIO  */}
                
                <NavItem>
                  <NavLink href="#" >Inicio</NavLink>
                </NavItem>

                {/* SERVICIOS  */}

                <NavItem>
                  <NavLink href="#">Servicios</NavLink>
                </NavItem>

                {/* PORTAFOLIO */}

                <NavItem>
                  <NavLink href="#">Portafolio</NavLink>
                </NavItem>

                {/* HABILIDADES */}

                <NavItem>
                  <NavLink href="#">Habilidades </NavLink>
                </NavItem>

                {/* STACK TECNOLOGICO */}
                <NavItem>
                  <NavLink href="#">Stack Tecnologico</NavLink>
                </NavItem>

                {/* CONTACTO  */}

                <NavItem>
                  <a className="btn btn-info"  href="#">
                    Contactanos
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default HeaderComponent;


 {/* <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Header/Navigation</h1>
              <h6 className="subtitle">
                Here you can check Demos we created you can easily use it. Its
                quite easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="#">
              <Image src={logo} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Work</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Services <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem>Separated link</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>One more separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="#">Freebies</NavLink>
                </NavItem>
                <NavItem>
                  <a className="btn btn-outline-info" href="#">
                    Hire Me
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div> */}
