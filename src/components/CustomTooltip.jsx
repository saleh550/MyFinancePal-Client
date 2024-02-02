import React from 'react';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className="custom-tooltip">
        <h6>{`Date: ${label}`}</h6>
        <h6>{`Amount: ${payload[0].value}`}</h6>
        <h6>{`Name: ${payload[0].payload.name}`}</h6>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;