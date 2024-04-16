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
            <p>Casa de la Natali</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Teléfono</h5>
            <p>
              Reception : +000 000 0000 <br />
              Office : +000 000 0000
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

              <Link href="https://www.facebook.com/cassdi.solutions/">
                  <i className="fa fa-facebook"></i>
              </Link>

              {/* INSTAGRAM */}

              <Link href="https://www.instagram.com/cassdi_solutions/">
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
        {/* <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Reserved by{" "}
                  <Link href="https://www.wrappixel.com">
                   wrappixel.com
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <Link href="#">
                    Terms of Use
                  </Link>
                  <Link href="#">
                    Legal Disclaimer
                  </Link>
                  <Link href="#">
                   Privacy Policy
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div> */}
      </Container>
    </div>
  );
};
export default Footer;
