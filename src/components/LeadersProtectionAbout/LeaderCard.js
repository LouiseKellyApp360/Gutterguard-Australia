import ProtectionIcon from '../../assets/protection-icon.svg';

const LeaderCard = ({ heading, p1, p2, p3, a }) => {
  return (
    <div className="leaderCard">
      <img src={ProtectionIcon} alt="Protection Icon" />
      <hr className="hzLine" />
      <h5 className="protectionCardHeading">{heading}</h5>
      {p1 && <p className="protectionCardDescription">{p1}</p>}
      {p2 && <p className="protectionCardDescription">{p2}</p>}
      {p3 && <p className="protectionCardDescription">{p3}</p>}
      {a && (
        <a href="#color-chart" className="protectionCardLink">
          {a}
        </a>
      )}
    </div>
  );
};

export default LeaderCard;
