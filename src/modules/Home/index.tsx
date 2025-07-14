import "./style.css";

import React, { useState } from "react";

import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [name, setName] = useState("");
  const history = useNavigate();

  const handleClick = () => {
    localStorage.setItem("name", name);
    history("/difficulty");
  };

  return (
    <div className="bodyHome">
      <div className="bodyForm">
        <h1>TRIVA</h1>
        <h2>Enter your name</h2>
        <label style={{ display: "block", marginTop: 10, marginBottom: 5 }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 12px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginTop: 4,
              boxSizing: "border-box",
            }}
          />
        </label>

        <Button
          handleEvent={handleClick}
          text="Start"
          customStyles={{ width: "100%" }}
          disable={name.length < 3 ? true : false}
        />
      </div>
    </div>
  );
};

export default Home;
