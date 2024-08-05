/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/Servicios/Aplicaciones Moviles.png";  //Aplicaciones Moviles
import img2 from "../../../assets/images/Servicios/Aplicaciones Web.png";  //Aplicaciones Web
import img3 from "../../../assets/images/Servicios/Aplicaciones de Escritorio.png";  //Aplicaciones de Escritorio
import img4 from "../../../assets/images/Servicios/E-commerce.png";  //E-commerce

const Legislacion = () => {
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
              <h1 className="title font-bold">Legislación Informática</h1>
              <h6 className="subtitle">
              Conceptos de derechos de autor, privacidad y protección de datos
              </h6>
            </Col>
          </Row>
      <div className="feature4">
          {}

<Row className="m-t-40">
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <CardBody className="p-30 text-center"> 
                  <h5>Derechos de autor</h5>
                  <p className="m-t-40">
                  Los derechos de autor son un conjunto de leyes que protegen 
                  las obras creativas de los autores, permitiéndoles controlar 
                  el uso y distribución de sus creaciones.
                  </p>
                  <h5 className="font-medium">Ejemplo:</h5>
                  <p className="m-t-40">
                  Un autor escribe un libro y registra su obra en la oficina 
                  de derechos de autor de su país. Esto le otorga el derecho 
                  exclusivo de reproducir, distribuir y realizar adaptaciones 
                  de su libro. Si alguien quiere hacer una película basada en 
                  su libro, necesita obtener su permiso y posiblemente pagarle 
                  por los derechos.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <CardBody className="p-30 text-center">
                  <h5>Privacidad</h5>
                  <p className="m-t-40">
                  La privacidad se refiere al derecho de los individuos a 
                  controlar la información que se recopila sobre ellos y 
                  cómo se utiliza.
                  </p>
                  <h5 className="font-medium">Ejemplo:</h5>
                  <p className="m-t-20">
                  Una persona se inscribe en un servicio de correo electrónico 
                  y proporciona su dirección de correo electrónico y nombre. La 
                  empresa que ofrece el servicio debe respetar la privacidad de 
                  esta persona, utilizando la información solo para el propósito 
                  declarado y no compartiéndola con terceros sin su consentimiento.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <CardBody className="p-30 text-center">
                  <h5>Protección de datos</h5>
                  <p className="m-t-40">
                  La protección de datos implica medidas para garantizar 
                  que la información personal de las personas esté segura 
                  y se utilice de manera adecuada.
                  </p>
                  <h5 className="font-medium">Ejemplo:</h5>
                  <p className="m-t-20">
                  Una clínica médica recopila información personal y de 
                  salud de sus pacientes. Para proteger estos datos, la 
                  clínica implementa medidas de seguridad como el cifrado 
                  de la información, acceso restringido solo a personal 
                  autorizado y copias de seguridad periódicas. Además, la 
                  clínica debe cumplir con leyes de protección de datos, como 
                  el Reglamento General de Protección de Datos (GDPR) en la Unión 
                  Europea, que regula cómo deben manejarse y protegerse los datos 
                  personales.
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

export default Legislacion;
