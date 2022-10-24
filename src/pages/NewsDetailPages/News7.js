import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import News7Detail from "../../components/NewsDetails/News7Detail";
import RelatedNews from "../../components/NewsListing/RelatedNews";
import Footer from "../../components/Footer";

const News7 = () => {
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#E8EDE5"
        textcolor="#203E28"
        heading="Linda repairs her cables after gutter-related electrical damage"
      />
      <News7Detail />
      <RelatedNews heading="Related News" s={3} e={6} />
      <Footer />
    </>
  );
};

export default News7;
