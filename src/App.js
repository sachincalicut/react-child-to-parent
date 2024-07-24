import React, { useState } from 'react';
import Callback from './callback';
import './style.css';
// Parent
export default function App() {
  const [UIcolor, setUIColor] = useState(null);
  const getColor = (color) => {
    setUIColor(color);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <div className="color_bucket" style={{ background: `${UIcolor}` }}></div>
      <Callback getColor={getColor} />
    </div>
  );
}
