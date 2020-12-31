package igv.projects.alphabackend.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import igv.projects.alphabackend.MoodEnum;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Table(name = "question")
public class Question {
	@Id
	@GeneratedValue
	private long id;

	@Column(unique = true)
	@NonNull
	private String question;
	@NonNull
	private MoodEnum mood;
}
