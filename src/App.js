import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Resources1 from "./pages/NewsDetailPages/News1";
import Resources2 from "./pages/NewsDetailPages/News2";
import Resources3 from "./pages/NewsDetailPages/News3";
import Resources4 from "./pages/NewsDetailPages/News4";
import Resources5 from "./pages/NewsDetailPages/News5";
import Resources6 from "./pages/NewsDetailPages/News6";
import Resources7 from "./pages/NewsDetailPages/News7";
import Resources8 from "./pages/NewsDetailPages/News8";
import Resources9 from "./pages/NewsDetailPages/News9";
import FAQs from "./pages/FAQs";
import EmailSent from "./pages/EmailSent";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

import "./App.css";
import Solutions from "./pages/Solutions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="news" element={<News />} />
      <Route
        path="news-detail/janes-delicious-rainwater-harvesting"
        element={<Resources1 />}
      />
      <Route
        path="news-detail/tims-bushfire-protection"
        element={<Resources2 />}
      />
      <Route
        path="news-detail/pravid-says-goodbye-to-the-rats-in-his-rooftop"
        element={<Resources3 />}
      />
      <Route
        path="news-detail/brian-cuts-back-on-backyard-duties"
        element={<Resources4 />}
      />
      <Route
        path="news-detail/meena-eliminates-roof-top-mould"
        element={<Resources5 />}
      />
      <Route
        path="news-detail/birds-leave-ahmeds-roof-for-good"
        element={<Resources6 />}
      />
      <Route
        path="news-detail/linda-repairs-her-cables-after-gutter-related-electrical-damage"
        element={<Resources7 />}
      />
      <Route
        path="news-detail/joe-fights-roof-top-corrosion"
        element={<Resources8 />}
      />
      <Route
        path="news-detail/lou-stops-the-rot-from-unguarded-gutter-water-damage"
        element={<Resources9 />}
      />
      <Route path="solutions" element={<Solutions />} />
      <Route path="faqs" element={<FAQs />} />
      <Route path="submit/success" element={<EmailSent />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-and-conditions" element={<TermsConditions />} />
    </Routes>
  );
}

export default App;
