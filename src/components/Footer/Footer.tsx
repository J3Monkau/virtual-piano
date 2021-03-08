import React, { FC } from "react";
import "./style.css";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <a href="https://github.com/J3Monkau/virtual-piano">Jack Monkau</a>
      <br />
      {currentYear}
    </footer>
  );
};
