import LeaderCard from "./LeaderCard";

import "./leaders-protection.css";

const index = () => {
  return (
    <div className="leadersProtection">
      <h4 className="leadersProtectionHeading">Leaders in gutter protection</h4>
      <div className="leaderCards">
        <LeaderCard
          heading="Built to last"
          p1="2 year workmanship warranty and 15 year warranty materials"
          p2="Extra strength - 100% quality Bluescope ColourBond steel"
          p3="Fade resistant - AkzoNobel Powder Coated finish, cheaper imitations can fade in a few years"
        />
        <LeaderCard
          heading="Roofing experts"
          p1="Certified roofing professionals who understand your unique roofing needs."
          p2="Technical experts with an engineer’s eye, to give you the best possible installation fit and neat finish."
          p3="Fully licensed and insured team."
        />
        <LeaderCard
          heading="Material & colour match"
          p1="Our extensive range of colours and materials will provide the best architectural match for your roof. We have the complete manufacturers range. "
          p2="You need to shop no further than Gutterguard Australia."
          a="See our colour chart."
        />
        <LeaderCard
          heading="30 day guarantee"
          p1="High quality professionals with the lowest call back or defect rate in Australia. "
          p2="Full product satisfation or your money back. "
          p3="Installation service guarantee."
        />
      </div>
    </div>
  );
};

export default index;
