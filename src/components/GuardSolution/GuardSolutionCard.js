import Link from '@mui/material/Link';

const GuardSolutionCard = ({ image, heading }) => {
  return (
    <div className="guardCard">
      <img src={image} alt={`${heading}`} style={{width: '264px', height: '178px'}}/>
      <Link href="#consForm" className="customLink">
        <p className="guardCardHeading">{heading}</p>
      </Link>
    </div>
  );
};

export default GuardSolutionCard;
