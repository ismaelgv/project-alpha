import axios from "axios";

import config from "../config";
import mockQuestions from "../mock/questions";
import { pickRandomItems } from "./utils";

const numQuestions: number = 5;

/** Question in the request format. */
interface RequestQuestion {
  question: string;
}

/** Response of a query to questions endpoint. */
interface QuestionsResponse {
  _embedded: {
    questions: RequestQuestion[];
  };
}

/** Get questions from persistence layer. */
export async function getQuestions(): Promise<string[]> {
  return axios
    .get<QuestionsResponse>(
      config.crudUrl + "/questions/search/randomQuestions",
      {
        params: { size: numQuestions },
      }
    )
    .then((res) => res.data._embedded.questions.map((rq) => rq.question))
    .catch((e) => {
      console.warn("Error getting questions, fallback to mockup.", e);
      return pickRandomItems(mockQuestions, numQuestions);
    });
}

/** Scream this question. */
export async function screamQuestion(question: string): Promise<string> {
  return axios
    .post<RequestQuestion>(config.screamerUrl + "/question", {
      question: question,
    })
    .then((res) => res.data.question)
    .catch((e) => {
      console.error("Error screaming a question", e);
      return question;
    });
}
