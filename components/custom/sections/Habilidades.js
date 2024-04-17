/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const TeamComponent = () => {
    return (
        <div>
            <div className="blog-home2 spacer">
                <Container>
            <div className="spacer team2">
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                        <h1 className="title font-bold">Habilidades</h1>
                            <h2 className="title">Equipo Profesional y Experiencia</h2>
                            <h6 className="subtitle">Nuestro equipo profesional está compuesto por excelentes programadores con experiencia en diversas áreas, 
                                                     respaldados por un equipo de negocios internacionales y expertos financieros.</h6>
                        </Col>
                    </Row>

                    {/* Isaac CV */}

                    <Row className="m-t-30">
                    <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Isaac de Leon</h5>
                                        <h6 className="subtitle">Desarrollador Full Stack</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    {/* Angel CV */}

                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Angel Cortes</h5>
                                        <h6 className="subtitle">Desarrollador Full Stack</h6>
                                        <p>Desarrollador de interfaces atractivas y sistemas backend robustos, al tanto de las últimas tendencias en ingeniería de software para ofrecer soluciones de calidad.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    {/* Marco CV */}

                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Marco Joel</h5>
                                        <h6 className="subtitle">Desarrollador Full Stack</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    {/* Kevin CV */}

                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Kevin Aldahir</h5>
                                        <h6 className="subtitle">Desarrollador de Bases de Datos</h6>
                                        <p>Desarrollador de programación web y frameworks, con enfoque en POO. Fuerte en bases de datos relacionales y orientadas a objetos, destacando en procedimientos almacenados y disparadores</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                   {/* Erick CV */}

                   <Row className="m-t-30">
                    <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Erick Saucedo</h5>
                                        <h6 className="subtitle">Desarrollador Full Stack</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    {/* Tirza CV */}

                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Tirza Lopez</h5>
                                        <h6 className="subtitle">Negocios Internacionales</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    {/* Natali CV */}

                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Natali Aleman</h5>
                                        <h6 className="subtitle">xd</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    {/* Etlin CV */}

                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Etlin Avelino</h5>
                                        <h6 className="subtitle">Financiero</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default TeamComponent;
