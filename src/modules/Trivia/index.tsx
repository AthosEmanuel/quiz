import "./style.css";

import { useEffect, useState } from "react";

import { Button } from "../../components";
import { getQuestions } from "../../services/service";
import { useNavigate } from "react-router-dom";

const Trivia: React.FC = () => {
  const history = useNavigate();

  const name = localStorage.getItem("name");
  const difficulty = localStorage.getItem("difficulty");
  const theme = localStorage.getItem("theme");

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    const handleTrivia = async () => {
      try {
        const data = await getQuestions(theme, difficulty);
        setQuestions(data.results);
      } catch (error) {
        console.error("Error fetching questions", error);
      }
    };
    handleTrivia();
  }, []);

  const handleAnswer = (
    selectedAnswer: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.currentTarget.blur();
    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct_answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    history("/theme");
  };

  if (questions.length === 0) return <p>Loading questions...</p>;

  if (showResult) {
    return (
      <div className="bodyTrivia">
        <h1>Result</h1>
        <h2>
          {name}, you got {score} out of {questions.length} questions right!
        </h2>
        <Button
          text="Back to Home"
          handleEvent={() => history("/")}
          customStyles={{ backgroundColor: "#90ADC6", color: "#333652" }}
        />
      </div>
    );
  }

  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="bodyTrivia">
      <h1>TRIVIA</h1>
      <h2>
        Question {currentIndex + 1} of {questions.length}
      </h2>
      <div
        className="question"
        dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
      />
      <div className="options">
        {answers.map((answer: string, index: number) => (
          <Button
            key={index}
            text={answer}
            handleEvent={(e) => handleAnswer(answer, e)}
          />
        ))}
      </div>
    </div>
  );
};

export default Trivia;
