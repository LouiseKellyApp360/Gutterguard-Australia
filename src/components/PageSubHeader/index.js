import "./page-subheader.css";

const index = ({ heading, description }) => {
  return (
    <div className="servicesSections">
      <h4 className="serviceHeading">{heading}</h4>
      <p className="protectionDescription">{description}</p>
    </div>
  );
};

export default index;
