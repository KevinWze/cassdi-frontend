/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/Servicios/Aplicaciones Moviles.png";  //Aplicaciones Moviles
import img2 from "../../../assets/images/Servicios/Aplicaciones Web.png";  //Aplicaciones Web
import img3 from "../../../assets/images/Servicios/Aplicaciones de Escritorio.png";  //Aplicaciones de Escritorio
import img4 from "../../../assets/images/Servicios/E-commerce.png";  //E-commerce

const FeatureComponent = () => {
  return (
    <div>
      <div className="blog-home2">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <br></br>
              <h1 className="title font-bold">Servicios</h1>
              <h6 className="subtitle">
              Ofrecemos una amplia variedad de servicios de desarrollo de software 
              y trabajamos con cualquier tipo de lenguaje de programación.
              </h6>
            </Col>
          </Row>
      <div className="feature4">
          <Row className="m-t-40">

            {/* Aplicaciones Moviles */}

            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                  <Image src={img1} alt="Aplicaciones Móviles" width={120} height={120} />
                  </div>
                  <h5 className="font-medium">Aplicaciones Moviles</h5>
                  <p className="m-t-20">
                  Programas diseñados específicamente para dispositivos móviles 
                  como teléfonos y tabletas. Se instalan desde una tienda de 
                  aplicaciones y permiten realizar tareas en movimiento con 
                  funcionalidades específicas para dispositivos móviles.
                  </p>
                  <ul>
  <li>Plataforma de E-learning</li>
  <li>App de Servicios a Domicilio</li>
  <li>Herramienta de Gestión</li>
  <li>App de Organización y Productividad</li>
  <li>Aplicación de Control Parental</li>
  <li>Software de Monitoreo</li>
    </ul>
                  {/* <a href="#" className="linking text-themecolor">
                    Explore More<i className="ti-arrow-right"></i>
                  </a> */}
                </CardBody>
              </Card>
            </Col>

            {/* Aplicaciones Web */}

            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                  <Image src={img2} alt="Aplicaciones Móviles" width={120} height={120} />
                  </div>
                  <h5 className="font-medium">Aplicaciones Web</h5>
                  <p className="m-t-20">
                  Programas desarrollados para ser accesibles a través de un navegador, 
                  sin necesidad de instalación. Permiten a los usuarios realizar tareas 
                  en línea desde cualquier dispositivo con conexión a Internet.
                  </p>
                  <ul>
  <li>Sistema de Reservas</li>
  <li>APlataforma de Gestión de Contenidos (CMS)</li>
  <li>Red Social Profesional</li>
  <li>Sistema de Gestión de Proyectos Colaborativos</li>
  <li>Plataforma de Gestión de Facturas y Pagos</li>
  <li>Plataforma de E-commerce</li>
    </ul>
                  {/* <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a> */}
                </CardBody>
              </Card>
            </Col>

            {/* Aplicaciones de Escritorio */}

            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                  <Image src={img3} alt="Aplicaciones Móviles" width={120} height={120} />
                  </div>
                  <h5 className="font-medium">Aplicaciones de Escritorio</h5>
                  <p className="m-t-20">
                  Programas instalados directamente en una computadora de escritorio o portátil. 
                  Ofrecen un alto rendimiento y están diseñadas para aprovechar al máximo los 
                  recursos del hardware local.
                  </p>
                  <ul>
  <li>Sistema de Gestión</li>
  <li>Herramienta de Análisis</li>
  <li>Plataforma de Gestión de Proyectos</li>
  <li>Software de Contabilidad</li>
  <li>Software de Planificación</li>
    </ul>
                  {/* <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a> */}
                </CardBody>
              </Card>
            </Col>

            {/* E-commerce */}

            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                  <Image src={img4} alt="Aplicaciones Móviles" width={120} height={120} />
                  </div>
                  <h5 className="font-medium">E-commerce</h5>
                  <p className="m-t-20">
                  Plataformas que permiten la compra y venta de productos y servicios en línea. 
                  Ofrecen funcionalidades como catálogos de productos, carritos de compra, y 
                  pasarelas de pago para facilitar transacciones seguras.
                  </p>
                  <ul>
  <li>Marketplace de Productos</li>
  <li>Tienda en Línea de Ropa y Accesorios</li>
  <li>Sitio Web de Alquiler de Propiedades</li>
  <li>Plataforma de Venta de Productos Digitales</li>
  <li>Plataforma de Compra y Venta </li>
  <li>Tienda Virtual de Artículos</li>
    </ul>
                  {/* <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
      {/* <div className="bg-light spacer feature20 up">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-info label-rounded">Feature 2</span>
              <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Row className="wrap-feature-20">
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img1}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img2}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img3}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img4}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <Image
                src={img5}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <span className="label label-info label-rounded">
                      Feature 3
                    </span>
                    <h3 className="title">
                      The New way of Making Your Website in mins
                    </h3>
                    <p>
                      You can relay on our amazing features list and also our
                      customer services will be great experience. You will love
                      it for sure.
                    </p>
                    <a
                      className="btn btn-danger btn-md btn-arrow m-t-20"
                      href="#"
                    >
                      <span>
                        Explore More <i className="ti-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row> 
        </Container> 
      </div> */}
    </div>
  );
};

export default FeatureComponent;
