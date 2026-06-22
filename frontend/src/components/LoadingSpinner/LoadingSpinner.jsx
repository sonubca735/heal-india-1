import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner({ label = 'Loading...' }) {
  return <div className="spinner"><span /> <p>{label}</p></div>;
}

export default LoadingSpinner;
