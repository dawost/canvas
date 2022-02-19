import React from "react";
import { Button, Input } from "../../components";

import "./styles.css";

const Header = () => {
  return (
    <div className="app-header">
      <label>Project ID:</label>
      <Input />
      <Button label="Fetch" />
      <Button label="Random" />
    </div>
  );
};

export default Header;
