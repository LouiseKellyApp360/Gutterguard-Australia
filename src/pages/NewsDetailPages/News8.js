import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import News8Detail from "../../components/NewsDetails/News8Detail";
import RelatedNews from "../../components/NewsListing/RelatedNews";
import Footer from "../../components/Footer";

const News8 = () => {
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#E8EDE5"
        textcolor="#203E28"
        heading="Joe fights roof top corrosion"
      />
      <News8Detail />
      <RelatedNews heading="Related News" s={3} e={6} />
      <Footer />
    </>
  );
};

export default News8;
