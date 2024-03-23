import React from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const ContactComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Contáctanos</h1>
              <h6 className="subtitle">
              ¿Tienes una idea en mente? Nos encantaría conocerla.
              <br></br>
              ¡No dudes en contáctarnos!
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
        <Row>
          <Container>
            <div className="spacer">
              <Row className="m-5">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Quick Contact</h4>
                <form class="row g-3">

                  {/* NOMBRE */}

  <div class="col-md-6">
    <label for="inputname" class="form-label">Nombre</label>
    <input 
    type="text" 
    class="form-control" 
    id="name_form" 
    required
    />
  </div>

  {/* APELLIDO  */}    

  <div class="col-md-6">
    <label for="inputlastname" class="form-label">Apellido</label>
    <input 
    type="text" 
    class="form-control" 
    id="lastname_form" 
    required
    />
  </div>

  {/* EMPRESA  */}

  <div class="col-12">
    <label for="inputCompany" class="form-label">Nombre de la Empresa</label>
    <input 
    type="text" 
    class="form-control" 
    id="company_form" 
    required
    />
  </div>

  {/* EMAIL  */}

  <div class="col-md-6">
    <label for="inputEmail" class="form-label">Correo</label>
    <input 
    type="email" 
    class="form-control" 
    id="email_form" 
    required
    />
  </div>

  {/* TELÉFONO  */}

  <div class="col-md-6">
    <label for="inputPhone" class="form-label">Teléfono</label>
    <input 
    type="tel" 
    class="form-control" 
    id="phone_form" 
    required
    />
  </div>

  {/* PROPUESTA  */}

  <div class="col-md-6">
    <label for="inputPropuesta" class="form-label">Propuesta</label>
    <input 
    type="text" 
    class="form-control" 
    id="propuesta_form" 
    required
    />
  </div>

    <div class="col-12">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </form>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="detail-box p-40 bg-info">
                    <h2 className="text-white">Wrappixel Headquarters</h2>
                    <p className="text-white m-t-30 op-8">
                      251 546 9442
                      <br /> info@wrappixel.com
                    </p>
                    <p className="text-white op-8">
                      601 Sherwood Ave.
                      <br /> San Bernandino, CA 92404
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
  );
};

export default ContactComponent;
