import React from "react";
import { Row, Col, Container, Form } from "reactstrap";
import Image from "next/image";
import banner from "../../../assets/images/seguridad/xdxd.jpg";

const FormBannerComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <h1 className="title font-bold text-center">
          Conclusiones y Referencias
        </h1>
        <Container>
          <Row className="justify-content-center">
            <Col md="14" className="">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h1 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Conclusiones
                    </button>
                  </h1>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>
                        Seguridad de la Información:
                        <br></br>
                      </strong>
                      La protección adecuada de la información es crucial para
                      salvaguardar la privacidad y la integridad de los datos.
                      Las prácticas de seguridad deben ser adoptadas tanto a
                      nivel individual como organizacional para prevenir accesos
                      no autorizados y posibles
                    </div>
                    <div class="accordion-body">
                      <strong>
                        Legislación Informática:
                        <br></br>
                      </strong>
                      El conocimiento y cumplimiento de las leyes relacionadas
                      con derechos de autor, privacidad y protección de datos
                      son fundamentales para evitar problemas legales y
                      garantizar el uso responsable de la tecnología. La
                      correcta elaboración de avisos de privacidad y el registro
                      de obras son pasos importantes en este proceso
                    </div>
                    <div class="accordion-body">
                      <strong>
                        Ética Informática:
                        <br></br>
                      </strong>
                      Mantener principios éticos en el uso de la tecnología
                      ayuda a promover un entorno digital más seguro y
                      respetuoso. Los códigos de conducta y la educación
                      continua en ética informática son esenciales para prevenir
                      delitos informáticos y fomentar prácticas responsables. La
                      ética informática incluye aspectos como la
                      confidencialidad, la integridad y la responsabilidad en el
                      uso de los recursos tecnológicos.
                    </div>
                    <div class="accordion-body">
                      <strong>
                        Delitos Informáticos:
                        <br></br>
                      </strong>
                      Comprender los diferentes tipos de delitos informáticos,
                      como el hacking, phishing y ransomware, permite a las
                      personas y organizaciones estar mejor preparadas para
                      protegerse contra estas amenazas y responder adecuadamente
                      en caso de incidentes. La legislación vigente proporciona
                      el marco legal necesario para perseguir y sancionar estos
                      delitos, pero la prevención y la educación también son
                      cruciales para reducir su incidencia.
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h1 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Referencias
                      </button>
                    </h1>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong>
                          Legislación informática
                          <br></br>
                        </strong>
                        1. Conceptos de derechos de autor, privacidad y
                        protección de datos:
                        <br></br>• Protección de datos: conceptos, objetivos y
                        principios básicos en El Derecho.
                        https://elderecho.com/proteccion-de-datos-conceptos-objetivos-y-principios-basicos
                        <br></br>• Protección de datos - Qué es, definición y
                        concepto en Definicion.de.
                        https://definicion.de/proteccion-de-datos/
                      </div>
                      <div class="accordion-body">
                        <strong>
                          Legislación informática
                          <br></br>
                        </strong>
                        2. Leyes nacionales e internacionales aplicables a los
                        derechos de autor, privacidad y protección de datos:
                        <br></br>• Protección de datos personales en México: el
                        marco legal en Docusign.
                        https://www.docusign.com/es-mx/blog/proteccion-de-datos
                        <br></br>
                        3. Trámites y requisitos de registro de obras ante la
                        institución de derechos de autor:
                        <br></br>• Información sobre la Ley Federal de Derechos
                        de Autor en México.
                        https://www.gob.mx/epn/articulos/conoce-mas-sobre-los-derechos-de-autor#:~:text=%2D%20El%20derecho%20de%20autor%20es,de%20car%C3%A1cter%20personal%20y%20patrimonial.
                      </div>
                      <div class="accordion-body">
                        <strong>
                          Legislación informática
                          <br></br>
                        </strong>
                        4. Proceso de trámite de registro de obras ante la
                        institución de derechos de autor:
                        <br></br>• Detalles sobre el registro de obras ante el
                        Instituto Nacional del Derecho de Autor (INDAUTOR).
                        https://indautor.gob.mx/
                        <br></br>
                        5. Proceso de elaboración de avisos de privacidad:
                        <br></br>• Lineamientos de Aviso de Privacidad del INAI.
                        https://elderecho.com/proteccion-de-datos-conceptos-objetivos-y-principios-basicos
                      </div>
                      <div class="accordion-body">
                        <strong>
                          Ética y delitos informáticos
                          <br></br>
                        </strong>
                        6. Conceptos de ética y delitos informáticos:
                        <br></br>• Conceptos básicos de ética y delitos
                        informáticos en Derecho.com.
                        https://elderecho.com/proteccion-de-datos-conceptos-objetivos-y-principios-basicos
                      </div>

                      <div class="accordion-body">
                        <strong>
                          Ética y delitos informáticos
                          <br></br>
                        </strong>
                        7. Características de los delitos informáticos
                        tipificados en México:
                        <br></br>• Características de los delitos informáticos
                        en México en el Código Penal Federal.
                        https://www.diputados.gob.mx/
                        <br></br>
                        8. Aspectos legales relacionados con delitos
                        informáticos en México:
                        <br></br>• Información legal sobre delitos informáticos
                        en el sitio del Instituto Nacional de Transparencia,
                        Acceso a la Información y Protección de Datos Personales
                        (INAI). https://home.inai.org.mx/
                        <br></br>
                        9. Proceso de elaboración de códigos de conducta y ética
                        informática:
                        <br></br>• Elaboración de códigos de conducta y ética
                        informática en el sitio del Instituto Nacional de
                        Transparencia, Acceso a la Información y Protección de
                        Datos Personales (INAI). https://home.inai.org.mx/
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FormBannerComponent;
