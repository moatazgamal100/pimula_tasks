import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import SSC from "../SSC/SSC";
import Partners from "../Partners/Partners";
import Services from "../Services/Services";
import RegionalAllocation from "../RegionalAllocation/RegionalAllocation";

const LandingPage = () => {
  return (
    <>
      <div className="container_fluid">
        <NavbarComponent />
        <SSC />
        <Partners />
        <Services />
        <RegionalAllocation />
      </div>
    </>
  );
};

export default LandingPage;
