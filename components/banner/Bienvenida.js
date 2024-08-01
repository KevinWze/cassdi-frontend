import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/Logito_Temporal.png";  //Logo Temporal 
import Seguridad from "../../assets/images/seguridad/seguriad de la informacion.png"


const Banner2 = () => {
  return (
    <div className="static-slider-head">
      <Container> 
        <Row className="blog-home2">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
            Seguridad de
            <br></br>
            la Información
            </h1>
            <h4 className="subtitle font-light">
            Bienvenidos a nuestro sitio web sobre Seguridad de la Información, 
            Legislación y Ética Informática. Aquí profundizaremos en cómo proteger 
            los datos, cumplir con las leyes y mantener un comportamiento ético en 
            el uso de la tecnología. Este sitio ofrece una visión detallada de estos 
            aspectos cruciales.
            </h4>
          </Col>
          <Col lg="6" md="6">
            <Image src={Seguridad} alt="Seguridad"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
