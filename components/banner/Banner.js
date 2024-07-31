import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Image from "next/image";

import img2 from "../../assets/images/seguridad/logos.png";

const Banner = () => {
  return (
    <div className="">
      <br></br> <br></br> <br></br>
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
          <Image src={img2} className="rounded mx-auto d-block" alt="carreras" width={750} height={140} />
            <h1 className="title font-bold">
              Universidad Politecnica de Tecamac
            </h1>
            <h2 className="subtitle font-light">Seguridad de la Información</h2>
            <br></br>
            <h3 className="subtitle font-bold">
              Grupo:
              <br />
            </h3>
            <h4 className="subtitle font-light">
              4924 IS Dual
              <br />
            </h4>
            <br></br>
            <h3 className="subtitle font-bold">
              Profesor:
              <br />
            </h3>
            <h4 className="subtitle font-light">
              Néstor Apolo López González
              <br />
            </h4>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md="7" className="text-center">
            <h2 className="title">Alumnos:</h2>
          </Col>
        </Row>

        <div className="feature4">
          <Row className="m-t-40">
            <Col md="6" className="">
              <Card>
                <CardBody>
                  <div className=""></div>
                  <h4 className="subtitle font-bold">
                    Cortes de la Cruz Angel
                    <br />
                  </h4>
                  <h5 className="font-medium">
                    Matricula: 1321124036
                  </h5>
                  <h5 className="font-medium">
                    Carrera: Ingeniería en Software
                  </h5>
                </CardBody>
              </Card>
            </Col>

            <Col md="6" className="">
              <Card>
                <CardBody>
                <div className=""></div>
                  <h4 className="subtitle font-bold">
                    Castellanos Martinez Kevin Aldahir
                    <br />
                  </h4>
                  <h5 className="font-medium">
                    Matricula: 1321124014
                  </h5>
                  <h5 className="font-medium">
                    Carrera: Ingeniería en Software
                  </h5>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
