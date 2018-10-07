package com.btm.btmbe.repository;


import com.btm.btmbe.model.User;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);

    User findByUsername(String username);

    List<User> findAll();

}
