import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import News9Detail from "../../components/NewsDetails/News9Detail";
import RelatedNews from "../../components/NewsListing/RelatedNews";
import Footer from "../../components/Footer";

const News9 = () => {
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#E8EDE5"
        textcolor="#203E28"
        heading="Lou stops the rot from unguarded gutter water damage"
      />
      <News9Detail />
      <RelatedNews heading="Related News" s={3} e={6} />
      <Footer />
    </>
  );
};

export default News9;
