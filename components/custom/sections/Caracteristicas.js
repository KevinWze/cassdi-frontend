/* eslint-disable */
import React from 'react';
import { Row, Col, Card, CardBody, Container } from 'reactstrap';
import Image from 'next/image';

import img1 from "../../../assets/images/Servicios/Aplicaciones Moviles.png";  //Aplicaciones Moviles
import img2 from "../../../assets/images/Servicios/Aplicaciones Web.png";  //Aplicaciones Web
import img3 from "../../../assets/images/Servicios/Aplicaciones de Escritorio.png";  //Aplicaciones de Escritorio

const Caracteristicas = () => {
    return (
        <div> 
                <Container>
            <div className="blog-home2">
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1 className="title font-bold" id="caracteristicas">Características y aspectos legales de los delitos informáticos</h1> 
                            <h2 className="title">Características de los delitos informáticos tipificados en México</h2>
                        </Col>
                    </Row>

                    <Row className="m-t-30">
                    <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Descripción de delitos específicos</h5>
                                        <h6 className="subtitle fw-bold">Acceso no autorizado a sistemas</h6>
                                        <p>
                                        Se refiere a la acción de ingresar a un sistema informático 
                                        sin permiso del propietario. Este delito puede incluir la 
                                        obtención de información confidencial o el uso de recursos 
                                        del sistema sin autorización.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12">
                                    <div className="p-t-10">
                                    <h5 className="title font-medium">Descripción de delitos específicos</h5>
                                    <h6 className="subtitle fw-bold">Alteración de datos</h6>
                                        <p>Implica modificar, borrar o añadir datos en un sistema 
                                            informático sin autorización. Esto puede tener consecuencias
                                             graves, como la manipulación de registros financieros o 
                                             la alteración de datos personales.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12">
                                    <div className="p-t-10">
                                    <h5 className="title font-medium">Descripción de delitos específicos</h5>
                                    <h6 className="subtitle fw-bold">Difusión de malware</h6>
                                        <p>Es la distribución de software malicioso diseñado para dañar, 
                                            interferir o acceder sin autorización a sistemas informáticos. 
                                            Ejemplos de malware incluyen virus, troyanos, ransomware y 
                                            spyware.
                                            </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Estadísticas y ejemplos</h5>
                                        <h6 className="subtitle fw-bold">Datos sobre la prevalencia de estos delitos</h6>
                                        <p>Según el Instituto Nacional de Estadística y Geografía (INEGI), 
                                            en México, los delitos informáticos han ido en aumento en los 
                                            últimos años. Un informe de 2020 indicó que el 22.8% de las 
                                            empresas mexicanas han sido víctimas de algún tipo de 
                                            ciberataque.
                                            </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        {/* Aspectos legales relacionados con delitos informáticos en México */}

                        
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                        <h1 className="title font-bold">Aspectos legales relacionados con delitos informáticos en México</h1> 
                            <h2 className="title">Marco legal aplicable</h2>
                        </Col>
                    </Row>

                    <div className="feature4">
          <Row className="m-t-40">

            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                  <Image src={img1} alt="Aplicaciones Móviles" width={120} height={120} />
                  </div>
                  <h5 className="font-medium">Ley Federal de Delitos Informáticos</h5>
                  <p className="m-t-20">
                  Esta ley establece sanciones para diversas actividades delictivas relacionadas 
                  con el uso de computadoras y sistemas de información. Específicamente, tipifica 
                  delitos como el acceso no autorizado a sistemas, la alteración de datos y la difusión 
                  de malware.

                  </p>
                  <h5 className="font-medium">Otras normativas relevantes</h5>
                  <p className="m-t-20">
                  
                  Incluyen la Ley General de Protección de Datos Personales en Posesión de lo
                Particulares y el Código Penal Federal, que también contemplan sanciones para delitos 
                informáticos y la protección de datos personales.

                </p>

                  
                </CardBody>
              </Card>
            </Col>


            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                  <Image src={img2} alt="Aplicaciones Móviles" width={120} height={120} />
                  </div>
                  <h5 className="font-medium">Procedimientos legales</h5>
                  <p className="m-t-20">
                  </p>
                  <h5 className="font-medium">Investigación</h5>
                  <p className="m-t-20">
                  Los delitos informáticos son investigados por unidades especializadas 
                  dentro de la Policía Federal y otras agencias de seguridad. Utilizan 
                  herramientas de análisis forense digital para recopilar evidencia.

                  </p>
                  <h5 className="font-medium">Procesamiento y sanciones</h5>
                  <p className="m-t-20">
                  
                  Los casos de delitos informáticos son llevados a los tribunales donde 
                  se pueden imponer sanciones que van desde multas hasta penas de prisión, 
                  dependiendo de la gravedad del delito y sus consecuencias.

                </p>
                </CardBody>
              </Card>
            </Col>

            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                  <Image src={img3} alt="Aplicaciones Móviles" width={120} height={120} />
                  </div>
                  <h5 className="font-medium">
                    Proceso de elaboración de códigos de conducta y 
                    ética informática
                    Importancia de los códigos de conducta
                    </h5>
                  <p className="m-t-20">
                  </p>
                  <h5 className="font-medium">Establecen pautas claras</h5>
                  <p className="m-t-20">
                  Los códigos de conducta y ética informática son esenciales para definir las 
                  expectativas de comportamiento en el uso de tecnologías. Ayudan a prevenir malas 
                  prácticas y aseguran un entorno digital seguro y respetuoso.
                  </p>
                  <h5 className="font-medium">Promueven la responsabilidad</h5>
                  <p className="m-t-20">
                  Estos códigos fomentan un sentido de responsabilidad y profesionalismo entre los 
                  usuarios y empleados, destacando la importancia de proteger la información y 
                  respetar las leyes.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                  <Image src={img3} alt="Aplicaciones Móviles" width={120} height={120} />
                  </div>
                  <h5 className="font-medium">Ejemplos de códigos de conducta de una empresa de tecnología</h5>
                  <p className="m-t-20">
                  </p>
                  <h5 className="font-medium">Confidencialidad:</h5>
                  <p className="m-t-20">
                  Los empleados deben proteger la información confidencial y no compartirla con personas no autorizadas.
                  </p>
                  <h5 className="font-medium">Uso adecuado de recursos:</h5>
                  <p className="m-t-20">
                  Los recursos tecnológicos deben utilizarse exclusivamente para actividades laborales y de acuerdo con las políticas de la empresa.
                  </p>
                  <h5 className="font-medium">Respeto a la propiedad intelectual:</h5>
                  <p className="m-t-20">
                  Se deben respetar los derechos de autor y las licencias de software, evitando el uso de software no autorizado.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          </div>
                    </Row>
                    </div>
                </Container>
            </div>

    );
}

export default Caracteristicas;
