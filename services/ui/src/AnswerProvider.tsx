import "./App.css";
import { useEffect, useState } from "react";

import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Button,
  Spinner,
} from "reactstrap";

type AnswerProviderProps = {
  answer: string;
};

function AnswerProvider({ answer }: AnswerProviderProps) {
  const [loading, setLoading] = useState(true);
  const [currentImg, updateImg] = useState("");

  useEffect(() => {
    if (!currentImg) {
      const imageToLoad = new Image();
      imageToLoad.src = "https://picsum.photos/600/300";
      imageToLoad.onload = () => {
        setLoading(false);
        updateImg(imageToLoad.src);
      };
    }
  }, [currentImg]);

  if (loading) {
    return (
      <Card className="App-answer">
        <Spinner color="info" />
        <CardTitle className="App-answer-title">Loading answer...</CardTitle>
      </Card>
    );
  } else {
    return (
      <Card className="App-answer">
        <CardImg top height="300" width="400" src={currentImg}></CardImg>
        <CardTitle className="App-answer-title">Your Coach says:</CardTitle>
        <CardText>{answer}</CardText>
        <Button
          className="App-answer-reload-button"
          onClick={() => window.location.reload(true)}
        >
          Restart
        </Button>
      </Card>
    );
  }
}

export default AnswerProvider;
