package igv.projects.alphacrud.service;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import igv.projects.alphacrud.MoodEnum;
import igv.projects.alphacrud.dao.AnswerDAO;
import igv.projects.alphacrud.dao.QuestionDAO;
import igv.projects.alphacrud.entities.Answer;
import igv.projects.alphacrud.entities.Question;

@Service
public class DataFillerService {
	private final AnswerDAO answerDAO;
	private final QuestionDAO questionDAO;

	public DataFillerService(AnswerDAO answerDAO, QuestionDAO questionDAO) {
		this.answerDAO = answerDAO;
		this.questionDAO = questionDAO;
	}

	@PostConstruct
	@Transactional
	public void fillData() {
		if (questionDAO.count() == 0) {
			// @formatter:off
			Stream<String> questions = Stream.of(
					"Will I be the next president of the world?",
					"Will I be the next Steve Jobs?",
					"Will I be rich and famous?",
					"Will I revolutionize the world?",
					"Will future generations remember me as the new Mesiah?"
					);
			// @formatter:on
			var questionList = questions.map(q -> new Question(q, MoodEnum.HAPPY)).collect(Collectors.toList());
			questionDAO.saveAll(questionList);
		}

		if (answerDAO.count() == 0) {
			// @formatter:off
			Stream<String> answers = Stream.of(
					"You are great and you will achieve anything you want in this life.",
					"You are going to be even better than that.",
					"The whole industry envy you.",
					"Today is the next day in the road to your success.",
					"You are awesome."
					);
			// @formatter:on
			var answerList = answers.map(q -> new Answer(q, MoodEnum.HAPPY)).collect(Collectors.toList());
			answerDAO.saveAll(answerList);
		}
	}
}
