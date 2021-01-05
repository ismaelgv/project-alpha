package igv.projects.alphacrud.dao;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import igv.projects.alphacrud.entities.Question;

public interface QuestionDAO extends CrudRepository<Question, Long> {
}
