import LeaderCard from "./LeaderCard";

import "./leaders-protection.css";

const index = () => {
  return (
    <div className="leadersProtection">
      <h4 className="leadersProtectionHeading">Leaders in gutter protection</h4>
      <div className="leaderCards">
        <LeaderCard
          heading="Best personalised service"
          p1="Our certified roof professionals offer over the phone consults, risk advice and measure and quote. Our experts are with you every step of the way​."
        />
        <LeaderCard
          heading="Full manufacturers range"
          p1="We are the manufacturer and have the manufactures full range which means you need to shop no further.​"
        />
        <LeaderCard
          heading="Patented design"
          p1="The patented design ensures little to no maintenance. Gravity does the work, with leaves falling away from the roof, while water flows freely through the gutters. Robust and bird proof, your gutters will be pest free in the years ahead."
        />
        <LeaderCard
          heading="CSIRO approved"
          p1="Not only has Gutterguard Australia’s product been CSIRO tested, we meet the Building Code of Australia’s requirements and all other regulatory requirements."
        />
      </div>
    </div>
  );
};

export default index;
