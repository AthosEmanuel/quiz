import React, { useEffect, useState } from "react";
import "./style.css";
import { Modal } from "../../components";
import { getQuiz } from "../../services/quizService";

const Home: React.FC = () => {
  const [name, setName] = useState("");
  const [form, setForm] = useState(false);

  const handleForm = () => {
    setForm(!form);
  };

  useEffect(() => {
    const handleQuiz = async () => {
      const data = await getQuiz();
      console.log(data);
      if (data) {
      }
    };
    handleQuiz();
  }, []);

  return (
    <div className="bodyHome">
      <label className="nameLabel">{name}</label>
      {form ? (
        <>
          <Modal />
          <button onClick={handleForm}>iniciar</button>
        </>
      ) : (
        <div className="bodyForm">
          <label>Digite seu nome </label>
          <input
            placeholder="Nome"
            type="text"
            style={{ marginTop: 10, marginBottom: 10 }}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleForm}>iniciar</button>
        </div>
      )}
    </div>
  );
};

export default Home;
