import React from "react";

import "./styles.css";

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="app-button">
      {label}
    </button>
  );
};

export default Button;
