package igv.projects.alphabackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@SpringBootApplication
@EnableTransactionManagement
public class AlphaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlphaBackendApplication.class, args);
	}

}
