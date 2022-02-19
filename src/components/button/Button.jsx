import React from "react";

import "./styles.css";

const Button = ({ label, ...props }) => {
  return (
    <button className="app-button" {...props}>
      {label}
    </button>
  );
};

export default Button;
