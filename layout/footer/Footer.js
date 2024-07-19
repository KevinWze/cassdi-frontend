/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link"; 
import Logo from "../../assets/images/landingpage/portada.png";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Dirección</h5>
            <p>Av. 5 de Mayo Manzana 018, Tecamac, 55740 Tecámac de Felipe Villanueva, Méx.</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Teléfono</h5>
            <p>
              Reception : 55 5938 8670 <br />
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <p>
              cassdi.solutions@gmail.com
            </p>
          </Col>

          {/* REDES SOCIALES  */}
          
          <Col lg="3" md="6">
            <h5 className="m-b-20">Redes Sociales</h5>
            <div className="round-social light">

              {/* FACEBOOK */}

              <Link href="https://www.facebook.com/UniversidadPolitecnicadeTecamac/?locale=es_LA">
                  <i className="fa fa-facebook"></i>
              </Link>

              {/* INSTAGRAM */}

              <Link href="https://www.instagram.com/uptecamac/">
                  <i className="fa fa-instagram"></i>
              </Link>

              {/* GITHUB */}

              <Link href="https://github.com/cassdi-solutions">
                  <i className="fa fa-github"></i>
              </Link>

              {/* LINKEDIN */}

              <Link href="https://www.linkedin.com/company/cassdi/">
                  <i className="fa fa-linkedin"></i>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  CASSDI © 2024 | Consultoria Avanzada de Software y Soluciones de Desarrollo Inteligente
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
