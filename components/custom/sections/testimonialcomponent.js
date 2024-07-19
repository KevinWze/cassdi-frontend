/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import nacional from "../../../assets/images/seguridad/Indautor.jpg"
import ompi from "../../../assets/images/seguridad/ompi.jpg"
import comparacion from "../../../assets/images/seguridad/comparacion.jpg"
import beneficio from "../../../assets/images/seguridad/Beneficios del registro.jpg"
import procedimiento from "../../../assets/images/seguridad/Procedimientos y documentos.jpg"

const TestimonialComponent = () => {
  return (
    <div>
      <div className="testimonial3 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold" id="leyes">Leyes y trámites de registro</h1>
              <h4 className="subtitle">
              Leyes nacionales e internacionales aplicables a los derechos de autor, 
              privacidad y protección de datos
              </h4>
            </Col>
          </Row>
          <Row className="testi3 m-t-40 justify-content-center">
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                <h4>Leyes nacionales </h4>
                  <h6 className="font-light m-b-30">
                  En México, la Ley Federal del Derecho de Autor 
                  y la Ley General de Protección de Datos Personales en Posesión 
                  de los Particulares son ejemplos clave.
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span>
                      <Image src={nacional} width={250} height={250}/>
                    </span>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                <h4>Leyes internacionales</h4>
                  <h6 className="font-light m-b-30">
                  Convenios como el Tratado de la OMPI sobre Derecho de Autor 
                  y el Reglamento General de Protección de Datos (GDPR) de la 
                  UE establecen normas globales.
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span>
                      <Image src={ompi} width={230} height={230}/>
                    </span>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                <h4>Comparación</h4>
                  <h6 className="font-light m-b-30">
                  Analizamos las similitudes y diferencias entre las 
                  legislaciones nacionales e internacionales para comprender 
                  mejor su alcance y aplicación.
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span>
                      <Image src={comparacion} width={240} height={240}/>
                    </span>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Trámites y requisitos de registro de obras ante la institución de derechos de autor */}

      <div className="blog-home2">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">
                Trámites y requisitos de registro de
                obras ante la institución de derechos de autor
                </h1>
            </Col>
          </Row>
          <div className="feature4">
          <Row className="m-t-40">

          <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                  <Image src={procedimiento} alt="Aplicaciones Móviles" width={150} height={120} />
                  </div>
                  <h5 className="font-medium">Procedimientos y documentos</h5>
                  <p className="m-t-20">
                  Para registrar una obra en México, se deben seguir ciertos 
                  pasos y presentar documentos específicos, como una solicitud 
                  y una copia de la obra.
                  </p>
                </CardBody>
              </Card>
            </Col>


            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                  <Image src={beneficio} alt="Aplicaciones Móviles" width={155} height={120} />
                  </div>
                  <h5 className="font-medium">Beneficios del registro</h5>
                  <p className="m-t-20">
                  El registro de obras protege los derechos del autor y 
                  facilita la defensa legal en caso de infracción.
                  </p>
                </CardBody>
              </Card>
            </Col>
            </Row>
            </div>
        </Container>
      </div>
    </div>
  );
};

export default TestimonialComponent;
