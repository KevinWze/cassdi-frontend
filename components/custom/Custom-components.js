import React from "react";

// core components
import Bienvenida from "../banner/Bienvenida";

// sections for this page
import BannerComponent from "./sections/bannercomponent";
import FormBannerComponent from "./sections/formbannercomponent";
import Servicios from "./sections/Servicios";
import Proyectos from "./sections/Proyectos";
import PricingComponent from "./sections/pricingcomponent";
import Habilidades from "./sections/Habilidades";
import TestimonialComponent from "./sections/testimonialcomponent";
import StackTecnologico from "./sections/StackTecnologico";
import C2aComponent from "./sections/c2acomponent";
import FormularioContacto from "./sections/FormularioContacto";
import CallToAction from "../../components/call-to-action/CallToAction";

const CustomComponents = () => {
  return (
    <div>
      <BannerComponent /> 
      <Bienvenida />
      {/* <FormBannerComponent /> */}
      <Servicios />
      <Proyectos />
      {/* <PricingComponent /> */}
      <Habilidades />
      {/* <TestimonialComponent /> */}
      <StackTecnologico />
      {/* <C2aComponent /> */}
      <FormularioContacto />
      <CallToAction />
    </div>
  );
};

export default CustomComponents;
