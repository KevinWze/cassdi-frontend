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

            {/* FORMULARIO DE CONTACTO  */}

            <div className="card">
              <Row className="m-5">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <form class="row g-3">

                      {/* NOMBRE */}

                      <div class="col-md-6">
                        <label for="inputname" class="form-label">Nombre</label>
                        <input 
                        type="text" 
                        class="form-control " 
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

                      <div class="form-group">
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

                      <div class="form-group">
                        <label for="inputPropuesta" class="form-label">Propuesta</label>
                        <textarea
                        type="text" 
                        class="form-control" 
                        id="propuesta_form" 
                        rows="4" 
                        required
                        />
                      </div>

                      {/* BOTON DE ENVIAR  */}

                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button href="#" type="submit" class="btn btn-primary me-md-2" value="submit">Enviar</button>
                      </div>
                    </form>
                  </div>
                </Col>

                {/* INFORMACIÓN DE CONTACTO  */}

                <Col lg="4">
                  <div className="detail-box p-40 bg-info rounded">
                    <h2 className="text-white">CASSDI</h2>
                    <p className="text-white m-t-30 op-8">
                      251 546 9442
                      <br /> <a>cassdi.solutions@gmail.com</a>
                    </p>
                    <p className="text-white op-8">
                      601 Sherwood Ave.
                      <br /> San Bernandino, CA 92404
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
  );
};

export default ContactComponent;
