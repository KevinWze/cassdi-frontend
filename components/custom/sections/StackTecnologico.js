/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody, CardTitle } from "reactstrap";
import Image from "next/image";

function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });

  return images;
}

const images = importAll(require.context('../../../assets/images/stack'));

const allElements = [
  {
    title: 'Lenguajes y Frameworks',
    items: {
      'java': images['java.png'],
      'spring': images['spring.png'],
      'laravel': images['laravel.svg'],
      'vue': images['vue.jpg'],
      'html': images['html.png'],
      'css': images['css.webp'],
    },
  },
  {
    title: 'Infraestructura',
    items: {
      'apache': images['apache.png'],
      'mysql': images['mysql.png'],
      'nginx': images['nginx.png'],
    },
  },
];

const BlogComponent = () => {
  return (
    <div>
      <div className="blog-home2 spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="text-center">
              <h1 className="title font-bold">Stack Tecnologico</h1>
              <h6 className="subtitle">
              Tenemos experiencia en múltiples lenguajes de programación y 
              nos ajustamos a las preferencias tecnológicas de nuestros clientes 
              para ofrecer soluciones a medida.
              </h6>
            </Col>
          </Row>
          <Col>
            {allElements.map((data) => {
              return CardComponent(data.title, data.items);
            })}
          </Col>
        </Container>
      </div>
    </div >
  );
};

const CardComponent = (title, items) => {
  return (
    <Card className="card-shadow">
      <CardBody>
        <CardTitle tag="h5">
          {title}
        </CardTitle>

        <div className="d-flex flex-row justify-content-start flex-wrap">
          {Object.keys(items).map((key) => {
            return <div className="flex-shrink-1 p-3" style={{ 'max-width': '12rem' }}>
              <Image
                className="h-100 w-100"
                style={{ 'object-fit': 'contain' }}
                alt={key}
                src={items[key]} />
            </div>
          })}
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogComponent;
