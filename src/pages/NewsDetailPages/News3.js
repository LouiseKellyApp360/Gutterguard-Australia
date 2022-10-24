import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import News3Detail from "../../components/NewsDetails/News3Detail";
import RelatedNews from "../../components/NewsListing/RelatedNews";
import Footer from "../../components/Footer";

const News3 = () => {
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#E8EDE5"
        textcolor="#203E28"
        heading="Pravid says goodbye to the rats in his rooftop"
      />
      <News3Detail />
      <RelatedNews heading="Related News" s={3} e={6} />
      <Footer />
    </>
  );
};

export default News3;
