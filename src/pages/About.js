import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageSubHeader from "../components/PageSubHeader";
import LeadersProtectionAbout from "../components/LeadersProtectionAbout";
import ProtectingHomes from "../components/ProtectingHomes";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#203E28"
        textcolor="#E2F2A8"
        heading="About"
      />
      <PageSubHeader
        heading="Why use Gutterguard Australia"
        description="Gutterguard Australia offers personalized service to help you the best
        gutter protection for your home and your family. We are the number one
        choice for people who want proven solutions supported by certified
        roofing professionals."
      />
      <LeadersProtectionAbout />
      <ProtectingHomes />
      <Footer />
    </>
  );
};

export default About;
