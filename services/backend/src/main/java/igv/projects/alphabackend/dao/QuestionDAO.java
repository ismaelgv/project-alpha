package igv.projects.alphabackend.dao;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import igv.projects.alphabackend.entities.Question;

public interface QuestionDAO extends CrudRepository<Question, Long> {
}
