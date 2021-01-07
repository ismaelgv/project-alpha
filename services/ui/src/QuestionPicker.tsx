import "./QuestionPicker.css";

import { Button, ButtonGroup } from "reactstrap";

/**
 * Generate buttons for each question.
 *
 * @param questions The array of questions to be processed.
 * @returns Array of reactstrap.Button.
 */
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
    <div className="QuestionPicker-buttons">
      <p>Choose your question</p>
      <ButtonGroup vertical onClick={buttonAction}>
        {generateButtons(questions)}
      </ButtonGroup>
    </div>
  );
}

export default QuestionPicker;
