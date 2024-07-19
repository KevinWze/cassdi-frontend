/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
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
import logo_upt from "../../assets/images/seguridad/logo upt.png"

const HeaderComponent = () => {

  const [isOpen, setIsOpen,] = useState(false);

  // Nuevo

  const toggle = () => setIsOpen(!isOpen);

  return (
   
    <div id="section" className="fixed-top">
      <div className="bg-black">
        <Container>

          <Navbar className="navbar-expand-lg h2-nav container-fluid ">
            <NavbarBrand>
              <Image src={logo_upt} class="rounded" alt="UPT"  width={112} height={75}/>
            </NavbarBrand>
            
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>

            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">

                
                <NavItem>
                  <NavLink href="/" >Inicio</NavLink>
                </NavItem>


                <NavItem>
                  <NavLink href="/#servicio">Legislación Informática</NavLink>
                </NavItem>


                <NavItem>
                  <NavLink href="/#portafolio">Proceso de trámite</NavLink>
                </NavItem>


                <NavItem>
                  <NavLink href="/#Habilidades">Características</NavLink>
                </NavItem>


                <NavItem>
                  <NavLink href="/#stack">Leyes y Tramites</NavLink>
                </NavItem>


                <NavItem>
                  <NavLink href="/#stack">Ética informática</NavLink>
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