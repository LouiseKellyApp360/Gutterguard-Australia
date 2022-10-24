import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import News1Detail from "../../components/NewsDetails/News1Detail";
import RelatedNews from "../../components/NewsListing/RelatedNews";
import Footer from "../../components/Footer";

const News1 = () => {
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#E8EDE5"
        textcolor="#203E28"
        heading="Jane’s delicious rainwater harvesting"
      />
      <News1Detail />
      <RelatedNews heading="Related News" s={3} e={6} />
      <Footer />
    </>
  );
};

export default News1;
