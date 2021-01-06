import "./App.css";

import { getQuestions } from "./api/question";
import { getAnswer } from "./api/answer";

import QuestionPicker from "./QuestionPicker";
import AnswerProvider from "./AnswerProvider";

import { useEffect, useState } from "react";

const title: string = "Project Alpha";

function App() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [questions, setQuestions] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    if (questions.length === 0) {
      getQuestions().then((q) => {
        setQuestions(q);
      });
    }
  }, [questions]);

  useEffect(() => {
    if (!answer) {
      getAnswer().then((a) => setAnswer(a));
    }
  }, [answer]);

  return (
    <div className="App">
      <div className="App-background"></div>
      <header className="App-header">
        <h1>Welcome to the {title}</h1>
        Ask your personal <span>AI-BioTech-K8s-powered coach</span> anything you
        want
      </header>

      {!showAnswer ? (
        <QuestionPicker questions={questions} buttonAction={setShowAnswer} />
      ) : null}
      {showAnswer ? <AnswerProvider answer={answer} /> : null}
    </div>
  );
}

export default App;
