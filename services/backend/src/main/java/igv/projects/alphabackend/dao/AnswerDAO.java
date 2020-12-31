package igv.projects.alphabackend.dao;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import igv.projects.alphabackend.entities.Answer;

public interface AnswerDAO extends CrudRepository<Answer, Long> {
}
