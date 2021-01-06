import "./App.css";

import QuestionPicker from "./QuestionPicker";
import AnswerProvider from "./AnswerProvider";

import { useEffect, useState } from "react";

import mockAnswers from "./mock/answers";
import mockQuestions from "./mock/questions";

const title: string = "Project Alpha";
const numQuestions: number = 5;

function pickRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

async function pickRandomItems<T>(items: T[], number: number): Promise<T[]> {
  let selectedItems: T[] = [];
  for (let i = 0; i < number; i++) {
    let index: number = Math.floor(Math.random() * items.length);
    selectedItems.push(...items.splice(index, 1));
  }
  return selectedItems;
}

async function getQuestions(): Promise<string[]> {
  return pickRandomItems(mockQuestions, numQuestions);
}

async function getAnswer(): Promise<string> {
  return pickRandomItem(mockAnswers);
}

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
