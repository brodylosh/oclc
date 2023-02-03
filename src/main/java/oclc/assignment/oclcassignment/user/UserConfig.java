package oclc.assignment.oclcassignment.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.github.javafaker.Faker;

import java.util.List;
import java.util.ArrayList;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository) {
        return args -> {
            Faker faker = new Faker();

            List<User> users = new ArrayList<User>();
            for (int i = 0; i < 10; i++) {
                User user = new User(
                        faker.name().fullName(),
                        faker.phoneNumber().cellPhone());
                users.add(user);
            }

            repository.saveAll(
                    users);
        };
    }
}
