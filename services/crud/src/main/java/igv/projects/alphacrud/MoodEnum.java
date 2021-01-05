package igv.projects.alphacrud;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public enum MoodEnum {
	UNKNOWN(0, "Unknown"), ANGRY(1, "Angry"), HAPPY(2, "Happy"), SAD(3, "Sad"), NEUTRAL(4, "Neutral");

	private int id;
	private String type;

	private MoodEnum(int id, String type) {
		this.id = id;
		this.type = type;
	}
}
