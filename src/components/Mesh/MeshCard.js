import React from 'react';
import Link from '@mui/material/Link';

const MeshCard = ({ image, name, description }) => {
  return (
    <div className="meshCard">
      <img src={image} alt={name} />
      <h6 className="meshCardHeading">{name}</h6>
      <p className="meshCardDescription">{description}</p>
      <Link href="#consForm" className="meshCardLink customLink">
        Learn more
      </Link>
    </div>
  );
};

export default MeshCard;
