import React from "react";
import { Row, Col, Container, Form } from "reactstrap";
import Image from "next/image";
import banner from "../../../assets/images/seguridad/xdxd.jpg";

const FormBannerComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Introduccion</h1>
              <h3 className="subtitle">
              
              </h3>
            </Col>
          </Row>
          <Col lg="6" md="6">
          <div class="text-center">
            <Image src={banner} class="rounded mx-auto d-block" alt="Seguridad"/>
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default FormBannerComponent;
