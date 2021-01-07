package igv.projects.alphacrud.service;

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
					"CRUD Question 1",
					"CRUD Question 2",
					"CRUD Question 3",
					"CRUD Question 4",
					"CRUD Question 5"
					);
			// @formatter:on
			var questionList = questions.map(q -> new Question(q, MoodEnum.HAPPY)).collect(Collectors.toList());
			questionDAO.saveAll(questionList);
		}

		if (answerDAO.count() == 0) {
			// @formatter:off
			Stream<String> answers = Stream.of(
					"CRUD Answer 1",
					"CRUD Answer 2",
					"CRUD Answer 3",
					"CRUD Answer 4",
					"CRUD Answer 5"
					);
			// @formatter:on
			var answerList = answers.map(q -> new Answer(q, MoodEnum.HAPPY)).collect(Collectors.toList());
			answerDAO.saveAll(answerList);
		}
	}
}
