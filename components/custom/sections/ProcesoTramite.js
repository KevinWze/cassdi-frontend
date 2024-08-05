/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody, Form } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/seguridad/solicitud.png";
import img2 from "../../../assets/images/seguridad/registrar.png";
import img3 from "../../../assets/images/seguridad/adicionales.png";
import img4 from "../../../assets/images/seguridad/linea.png";
import img5 from "../../../assets/images/seguridad/pago.png";
import img6 from "../../../assets/images/seguridad/revision.png";
import img7 from "../../../assets/images/seguridad/certificado.png";

const ProcesoTramite = () => {
  return (
    <div>
      <div className="blog-home2">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
              <h1 className="title font-bold" id="proceso">Proceso de trámite de registro de obras ante la institución de derechos de autor</h1>
              <h3 className="subtitle">
              Proceso de Trámite de Registro
              </h3>
            </Col>
          </Row>
      <div>
          <Row className="m-t-40">
            <Col md="4">
              <Card className="card-shadow">
                  <Image
                    src={img1}
                    class="rounded mx-auto d-block"
                    width={180} height={150}
                  />
                <CardBody>
                  <h5 className="font-medium m-b-0">
                  Solicitud
                  </h5>
                  <p className="m-b-0 font-14">Completa el formulario de solicitud de 
                    registro de obra, disponible en la página web de la institución de 
                    derechos de autor (en México, el Instituto Nacional del Derecho de
                    Autor - INDAUTOR).</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                  <Image
                    src={img2}
                    class="rounded mx-auto d-block"
                    idth={200} height={170}
                  />
                <CardBody>
                  <h5 className="font-medium m-b-0">Obra a Registrar</h5>
                  <p className="m-b-0 font-14">Prepara una copia de la obra que deseas registrar. 
                    Dependiendo del tipo de obra, esto podría ser un manuscrito, una obra de arte, 
                    un software, etc.</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                  <Image
                    src={img3}
                    class="rounded mx-auto d-block"
                    idth={180} height={150}
                  />
                <CardBody>
                  <h5 className="font-medium m-b-0">Documentos Adicionales</h5>
                  <p className="m-b-0 font-14">Reúne documentos necesarios como una identificación oficial,
                    comprobante de domicilio y, en algunos casos, un documento que acredite la autoría.
                    </p>
                </CardBody>
              </Card>
            </Col>

          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Presentación de la Solicitud</h1>
              <br></br><br></br>
            </Col>
          </Row>

            <Col md="4">
              <Card className="card-shadow">
                  <Image
                    src={img4}
                    class="rounded mx-auto d-block"
                    width={180} height={150}
                  />
                <CardBody>
                  <h5 className="font-medium m-b-0">En Línea o Presencial</h5>
                  <p className="m-b-0 font-14">La solicitud puede ser presentada en línea a través del 
                    portal del INDAUTOR o en sus oficinas físicas. Asegúrate de seguir las instrucciones 
                    específicas para cada modalidad.</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                  <Image
                    src={img5}
                    class="rounded mx-auto d-block"
                    width={180} height={150}
                  />
                <CardBody>
                  <h5 className="font-medium m-b-0">Pago de Derechos</h5>
                  <p className="m-b-0 font-14">Realiza el pago correspondiente por el trámite. 
                    Las tarifas pueden variar dependiendo del tipo de obra y del número de obras 
                    a registrar.</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                  <Image
                    src={img6}
                    class="rounded mx-auto d-block"
                    width={180} height={150}
                  />
                <CardBody>
                  <h5 className="font-medium m-b-0">Revisión y Aprobación</h5>
                  <br/>
                  <p className="m-b-0 font-14">Evaluación: El INDAUTOR revisará la solicitud y 
                    la documentación presentada. Puede solicitar información adicional si es necesario.</p>
                    <br/>
                  <p className="m-b-0 font-14">
                  Registro: Una vez aprobado, se emitirá un certificado de registro que confirma los derechos 
                  de autor sobre la obra. Este certificado servirá como prueba legal en caso de disputas.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          </div>
        </Container>

          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Recepción del Certificado</h1>
              <br></br>
            </Col>
          </Row>
          <div class="abs-center">
        <Container>
              <Row className="blog-home2">
                <Col lg="6" md="7" className="align-self-center">
                  <h3 className="title font-bold">
                  Recibe el certificado de registro, que puede ser enviado por correo electrónico o 
                  físico, dependiendo del método de solicitud.
                  </h3>
                  <p className="m-t-40 m-b-30">
                  El registro de derechos de autor protege la obra de usos no autorizados y 
                  facilita la defensa legal en caso de infracción. Asegura que el autor pueda 
                  ejercer sus derechos sobre la obra.
                  </p>
                </Col>
                <Col lg="6" md="6" className="align-self-center ml-auto">
                  <Image
                    src={img7}
                    class="rounded mx-auto d-block"
                    alt="We are Digital Agency"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Container>
            </div>
      </div>
    </div>
  );
};

export default ProcesoTramite;
