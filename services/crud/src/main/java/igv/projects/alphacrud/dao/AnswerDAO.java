package igv.projects.alphacrud.dao;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import igv.projects.alphacrud.entities.Answer;

public interface AnswerDAO extends CrudRepository<Answer, Long> {
}
