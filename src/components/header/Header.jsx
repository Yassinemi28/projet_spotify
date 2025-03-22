import React from "react";
import "./header.css";
import { useState } from "react";
import Button from "../button.jsx";
import Card from "../card.jsx";

const Header = () => {
  return (
    <div>
      <h1>header</h1>
      <Button />
      <Card />
    </div>
  );
};

export default Header;
