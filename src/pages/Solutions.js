import React from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageSubHeader from "../components/PageSubHeader";
import SolutionSlider from "../components/SolutionSlider";
import VisualDesign from "../components/VisualDesign";
import SolutionMesh from "../components/SolutionMesh";
import Partnering from "../components/Partnering";
import RelatedNews from "../components/NewsListing/RelatedNews";
import Footer from "../components/Footer";

const Solutions = () => {
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#203E28"
        textcolor="#E2F2A8"
        heading="Solutions"
      />
      <PageSubHeader
        heading="The only gutter guard endorsed by Colourbond steel"
        description="Superior quality products supported by certified roofing professionals with 20 years experience."
      />
      <SolutionSlider />
      <VisualDesign
        heading="Roof colours"
        p1="Gutterguard Australia have worked with thousands of roof types over the years."
      />
      <SolutionMesh />
      <Partnering />
      <RelatedNews heading="Hear from our happy customers" s={0} e={3} />
      <Footer />
    </>
  );
};

export default Solutions;
