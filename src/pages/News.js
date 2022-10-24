import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import ResourcesListing from "../components/NewsListing";
import Footer from "../components/Footer";

const News = () => {
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#203E28"
        textcolor="#E2F2A8"
        heading="News"
      />
      <ResourcesListing />
      <Footer />
    </>
  );
};

export default News;
