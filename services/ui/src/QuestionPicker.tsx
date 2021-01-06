import "./App.css";

import { Button, ButtonGroup } from "reactstrap";

function generateButtons(questions: string[]): JSX.Element[] {
  const buttons: JSX.Element[] = [];

  questions.forEach((question, i) => {
    const button = (
      <Button outline key={i} color="info" style={{ fontSize: 20 }}>
        {question}
      </Button>
    );
    buttons.push(button);
  });

  return buttons;
}

type QuestionPickerProps = {
  questions: string[];
  buttonAction: any;
};

function QuestionPicker({ questions, buttonAction }: QuestionPickerProps) {
  return (
    <div className="App-options">
      <p>Choose your question</p>
      <ButtonGroup vertical onClick={buttonAction}>
        {generateButtons(questions)}
      </ButtonGroup>
    </div>
  );
}

export default QuestionPicker;
