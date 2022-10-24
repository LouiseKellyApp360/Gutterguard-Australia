import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import News5Detail from "../../components/NewsDetails/News5Detail";
import RelatedNews from "../../components/NewsListing/RelatedNews";
import Footer from "../../components/Footer";

const News5 = () => {
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#E8EDE5"
        textcolor="#203E28"
        heading="Meena eliminates roof top mould"
      />
      <News5Detail />
      <RelatedNews heading="Related News" s={3} e={6} />
      <Footer />
    </>
  );
};

export default News5;
