import "./App.css";

import { getQuestions, screamQuestion } from "./api/question";
import { getAnswer, screamAnswer } from "./api/answer";

import QuestionPicker from "./QuestionPicker";
import AnswerProvider from "./AnswerProvider";
import ScreamSwitch from "./ScreamSwitch";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const title: string = "Project Alpha";

function App() {
  const [showAnswer, setShowAnswer] = useState(false);

  const [questions, setQuestions] = useState<string[]>([]);
  const previousQuestions = useRef<string[]>([]);

  useEffect(() => {
    if (questions.length === 0) {
      getQuestions().then((qs) => {
        setQuestions(qs);
        previousQuestions.current = qs;
      });
    }
  }, [questions]);

  const [answer, setAnswer] = useState<string>("");
  const previousAnswer = useRef<string>("");

  useEffect(() => {
    if (!answer) {
      getAnswer().then((a) => {
        setAnswer(a);
        previousAnswer.current = a;
      });
    }
  }, [answer]);

  const [screamMode, setScreamMode] = useState(false);
  useLayoutEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps --
     * Avoid loops using questions and answer deps. This may be need to be
     * updated manually when questions or answers change externally.
     */
    if (screamMode) {
      previousQuestions.current = questions;
      previousAnswer.current = answer;

      Promise.all(questions.map((q) => screamQuestion(q))).then((qs) =>
        setQuestions(qs)
      );
      screamAnswer(answer).then((a) => setAnswer(a));
    } else {
      if (previousQuestions.current.length !== 0)
        setQuestions(previousQuestions.current);
      if (previousAnswer.current) setAnswer(previousAnswer.current);
    }
  }, [screamMode]);

  return (
    <div className="App">
      <div className="App-background"></div>
      <header className="App-header">
        <h1>Welcome to the {title}</h1>
        Ask your personal <span>AI-BioTech-K8s-powered coach</span> anything you
        want
      </header>

      <ScreamSwitch active={screamMode} switchAction={setScreamMode} />

      {!showAnswer ? (
        <QuestionPicker questions={questions} buttonAction={setShowAnswer} />
      ) : null}
      {showAnswer ? <AnswerProvider answer={answer} /> : null}
    </div>
  );
}

export default App;
