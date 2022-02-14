import React from "react";
import { Button } from "..";

import "./style.css";

const Modal: React.FC = () => {
  return (
    <div className="bodyModal">
      <Button
        text="Easy"
        customStyles={{
          height: 30,
          width: 200,
          borderRadius: 13,
          borderColor: "rgba(0,0,0,0.1)",
          marginTop: 200,
          marginBottom: 20,
        }}
      />
      <Button
        text="Hard"
        customStyles={{
          height: 30,
          width: 200,
          borderRadius: 13,
          borderColor: "rgba(0,0,0,0.1)",
          // marginLeft: 200,
        }}
      />
    </div>
  );
};

export default Modal;
