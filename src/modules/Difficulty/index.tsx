import "./style.css";

import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

const Difficulty: React.FC = () => {
  const history = useNavigate();

  const handleClick = (id: any) => {
    localStorage.setItem("difficulty", id);
    history("/theme");
  };
  return (
    <div className="bodyButtons">
      <h1>Choice your difficulty</h1>
      <Button text="Easy" handleEvent={() => handleClick("easy")} />
      <Button text="Medium" handleEvent={() => handleClick("medium")} />
      <Button text="Hard" handleEvent={() => handleClick("hard")} />
      <Button text="Random" handleEvent={() => handleClick(4)} />

      <Button
        text="Back"
        handleEvent={() => history("/")}
        customStyles={{ backgroundColor: "#90ADC6", color: "#333652" }}
      />
    </div>
  );
};

export default Difficulty;
