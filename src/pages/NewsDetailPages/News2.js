import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import News2Detail from "../../components/NewsDetails/News2Detail";
import RelatedNews from "../../components/NewsListing/RelatedNews";
import Footer from "../../components/Footer";

const News2 = () => {
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#E8EDE5"
        textcolor="#203E28"
        heading="Tim’s bushfire protection"
      />
      <News2Detail />
      <RelatedNews heading="Related News" s={3} e={6} />
      <Footer />
    </>
  );
};

export default News2;
