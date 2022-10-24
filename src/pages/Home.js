import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Form from "../components/Form";
import Protection from "../components/Protection";
import LandingSlider from "../components/LandingSlider";
import FreeAssessment from "../components/FreeAssessment";
import LeadersProtection from "../components/LeadersProtection";
import Services from "../components/Services";
import GuardSolution from "../components/GuardSolution";
import Mesh from "../components/Mesh";
import Partners from "../components/Partners";
import VisualDesign from "../components/VisualDesign";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <LandingSlider />
      <Form />
      <Protection />
      <FreeAssessment
        heading="Get your free unguarded gutter risk assessment"
        description="Talk today to one of Gutterguard Australia’s professional roofing experts about the risks of your unguarded gutters to your home and family. Phone 1300 515 024"
      />
      <LeadersProtection />
      <Services />
      <GuardSolution />
      <Mesh />
      <Partners />
      <VisualDesign
        heading="We have the full range of manufacturer’s colours, you need to shop no
        further than Gutterguard Australia."
        p1="With Gutterguard Australia’s products your roof line will look as sharp
        as it did before installation."
        p2="Even though our products are on your roof, we make no compromise in the
        visual design of our products. We subtly blend in with your roof, each
        accessory down to your screws can be colour matched. With Gutter Guard
        Australia products your roof line will looks as sharp as it did before
        installation. Gutterguard protection will maintain your roofs looks and
        structure in the decades ahead."
      />
      <FreeAssessment
        heading="Talk to us for free to get started"
        description="We are open 6 days a week from 8am to 6pm. We are ready to take your call and respond to all emails within 24 hours."
      />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
