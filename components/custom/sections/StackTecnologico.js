/* eslint-disable */
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import Image from 'next/image';
import seguridad from "../../../assets/images/seguridad/logo upt.png"
import img1 from "../../../assets/images/seguridad/confidencial.png"
import img2 from "../../../assets/images/seguridad/integridad.png"
import img3 from "../../../assets/images/seguridad/responsabilidad.png"

const Cards = () => {
    return (
        <div>
            <div id="card-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                        <br/>
                            <h1 className="title font-bold">Ética informática y delitos informáticos</h1>
                            <h3 className="subtitle">Conceptos de ética y delitos informáticos</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br/><br/>
            <Container> 
        <Row className="blog-home2">
          <Col className="align-self-center">
            <h5 className="subtitle font-light">
            La ética informática se refiere a los principios y normas de conducta que deben guiar el uso responsable de la tecnología. Incluye temas como la privacidad, el respeto por los derechos de autor, y la honestidad en la comunicación y el uso de la tecnología.
            </h5>
          </Col>
        </Row>
      </Container>
            <Container>
                <Row className='justify-content-center'>
                    <Col md="6" className='text-center'>
                        <Card body className="card-shadow">
                            <CardTitle>Confidencialidad</CardTitle>
                            <CardText>Es el principio de proteger la información personal y sensible. Esto significa no divulgar ni utilizar datos sin permiso.</CardText>
                            <Image src={img1} class="rounded mx-auto d-block" width={180} height={150} alt="Seguridad"/>
                        </Card>
                    </Col>
                    <Col md="6" className='text-center'>
                        <Card body className="card-shadow">
                            <CardTitle>Integridad</CardTitle>
                            <CardText>Refleja la necesidad de mantener la exactitud y veracidad de la información. Los datos deben ser manipulados de manera ética y no falsificados.</CardText>
                            <Image src={img2} class="rounded mx-auto d-block" width={180} height={150} alt="Seguridad"/>
                        </Card>
                    </Col>
                    <Col md="6" className='text-center'>
                        <Card body className="align-self-center">
                            <CardTitle>Responsabilidad</CardTitle>
                            <CardText>Implica usar la tecnología de manera segura y legal. Esto significa cumplir con las leyes y políticas y evitar el daño a otros a través de actividades tecnológicas.</CardText>
                            <Image src={img3} width={180} height={150} class="rounded mx-auto d-block" alt="Seguridad"/>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cards;
