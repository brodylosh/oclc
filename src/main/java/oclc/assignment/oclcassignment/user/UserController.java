package oclc.assignment.oclcassignment.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // // Get All Users
    // @GetMapping
    // public List<User> getUsers() {
    // return userService.getUsers();
    // }

    @GetMapping
    public Page<User> getUsers(
            // @RequestParam Optional<String> search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size)

    {
        return userService.getUsers(page, size);
    }
}
