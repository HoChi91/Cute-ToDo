// DateComponent.js
import React from 'react';

const DateComponent = () => {
  const date = new Date();
  const day = date.toLocaleString('fr-FR', { weekday: 'long' });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleString('fr-FR', { month: 'long' });

  return (
    <div className="date-container">
      <div className="date-text">
        <p>{day}</p>
        <div className="circle">
          <span>{dayOfMonth}</span>
        </div>
        <p>{month}</p>
      </div>
    </div>
  );
};

export default DateComponent;
