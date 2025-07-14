import "./style.css";

import React from "react";

interface ButtonProps {
  text: string;
  handleEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;

  customStyles?: React.CSSProperties;
  disable?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  customStyles,
  handleEvent,
  disable,
}) => {
  return (
    <button
      style={customStyles}
      onClick={handleEvent}
      className="buttonBody"
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default Button;
