import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import News6Detail from "../../components/NewsDetails/News6Detail";
import RelatedNews from "../../components/NewsListing/RelatedNews";
import Footer from "../../components/Footer";

const News6 = () => {
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#E8EDE5"
        textcolor="#203E28"
        heading="Bird’s leave Ahmed’s roof for good"
      />
      <News6Detail />
      <RelatedNews heading="Related News" s={3} e={6} />
      <Footer />
    </>
  );
};

export default News6;
