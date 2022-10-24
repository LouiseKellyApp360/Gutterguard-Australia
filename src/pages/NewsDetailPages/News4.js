import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import News4Detail from "../../components/NewsDetails/News4Detail";
import RelatedNews from "../../components/NewsListing/RelatedNews";
import Footer from "../../components/Footer";

const News4 = () => {
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#E8EDE5"
        textcolor="#203E28"
        heading="Brian cuts back on backyard duties"
      />
      <News4Detail />
      <RelatedNews heading="Related News" s={3} e={6} />
      <Footer />
    </>
  );
};

export default News4;
