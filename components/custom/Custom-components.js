import React from "react";

// core components
import Bienvenida from "../banner/Bienvenida";

// sections for this page
import BannerComponent from "./sections/bannercomponent";
import FormBannerComponent from "./sections/formbannercomponent";
import Servicios from "./sections/Servicios";
import PortfolioComponent from "./sections/portfoliocomponent";
import PricingComponent from "./sections/pricingcomponent";
import Habilidades from "./sections/Habilidades";
import TestimonialComponent from "./sections/testimonialcomponent";
import BlogComponent from "./sections/blogcomponent";
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
      {/* <PortfolioComponent /> */}
      {/* <PricingComponent /> */}
      <Habilidades />
      {/* <TestimonialComponent /> */}
      <BlogComponent />
      {/* <C2aComponent /> */}
      <FormularioContacto />
      <CallToAction />
    </div>
  );
};

export default CustomComponents;
