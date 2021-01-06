import axios from "axios";

import config from "../config";
import mockAnswers from "../mock/answers";
import { pickRandomItem } from "./utils";

/** Answer in the request format. */
interface RequestAnswer {
  answer: string;
}

/** Response of a query to answers endpoint. */
interface AnswersResponse {
  _embedded: {
    answers: RequestAnswer[];
  };
}

/** Get answer from persistence layer. */
export async function getAnswer(): Promise<string> {
  return axios
    .get<AnswersResponse>(config.crudUrl + "answers/search/randomAnswers", {
      params: { size: 1 },
    })
    .then((res) => {
      console.log(res.data);
      return res.data._embedded.answers[0].answer;
    })
    .catch((e) => {
      console.warn("Error getting answers, fallback to mockup.", e);
      return pickRandomItem(mockAnswers);
    });
}
