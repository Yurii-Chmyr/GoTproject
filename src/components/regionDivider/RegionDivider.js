import React from 'react';
import './regionDividerStyles.scss';
import regionDescriptions from './regionDescriptions';

const RegionDivider = ({ region }) => {
  const { image, description, borderColor } = regionDescriptions[region] || {};

  if (!image || !description) return null;

  return (
    <div
      className="region-divider pulsing-custom-border my-5 d-flex flex-column flex-md-row align-items-center"
      style={{
        '--glow-color': borderColor || 'rgba(255,255,255,0.8)',
      }}
    >
      <img
        src={image}
        alt={region}
        className="region-divider-img mb-3 mb-md-0 me-md-4"
        style={{ objectFit: 'contain' }}
      />
      <div className="region-divider-text text-center text-md-start flex-grow-1">
        <h2>{region}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RegionDivider;