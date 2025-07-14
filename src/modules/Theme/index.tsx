import "./style.css";

import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../../components";

const Theme: React.FC = () => {
  const history = useNavigate();
  const location = useLocation();

  const handleClick = (id: any) => {
    localStorage.setItem("theme", id);
    history("/trivia");
  };

  return (
    <div className="bodyButtons">
      <h1>Choice your Theme</h1>
      <h2>You can choice only one </h2>

      <div className="bodyTheme">
        <Button text="General Knowledge" handleEvent={() => handleClick(9)} />
        <Button
          text="Entertainment: Film"
          handleEvent={() => handleClick(11)}
        />
        <Button
          text="Entertainment: Music"
          handleEvent={() => handleClick(12)}
        />
        <Button text="Sports" handleEvent={() => handleClick(21)} />
        <Button text="Science & Nature" handleEvent={() => handleClick(17)} />
        <Button text="Science: Computers" handleEvent={() => handleClick(18)} />
        <Button text="History" handleEvent={() => handleClick(23)} />
        <Button text="Geography" handleEvent={() => handleClick(22)} />
      </div>
      <Button
        text="Voltar"
        handleEvent={() => history("/difficulty")}
        customStyles={{
          backgroundColor: "#90ADC6",
          color: "#333652",
          marginTop: 30,
        }}
      />
    </div>
  );
};

export default Theme;
