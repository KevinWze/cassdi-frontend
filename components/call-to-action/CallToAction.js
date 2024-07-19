import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const CallToAction = () => {
  return (
    <div className="coming-soon" id="coming">
      <Container className="py-5 mt-5">
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center">
              <div>
                <h2 className="title text-black font-weight-bold">
                Presenta Información Legal de Manera Accesible
                </h2>
                <h6 className="subtitle font-light text-black">
                Traduce el lenguaje legal complejo en términos más simples para que los usuarios que no son expertos en el tema puedan entenderlo.
                </h6>
                <h6 className="subtitle font-light text-black">
                Ofrece guías detalladas sobre el proceso de registro de obras y la elaboración de avisos de privacidad. Incluye pasos específicos y requisitos.                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;
