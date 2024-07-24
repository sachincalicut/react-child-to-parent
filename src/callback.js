import React, { useState } from 'react';

const Callback = ({ getColor }) => {
  const [curColor, setCurrentColor] = useState();
  const handleChange = (e) => {
    const { value } = e.target;
    setCurrentColor(value);
    getColor(value);
  };
  return (
    <input
      type="text"
      id="input"
      onChange={handleChange}
      value={curColor}
      aria-label="input"
    />
  );
};
export default Callback;
