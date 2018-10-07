package com.btm.btmbe.service.impl;

import com.btm.btmbe.repository.UserRepository;
import com.btm.btmbe.service.UserService;
import com.btm.btmbe.utility.SecurityUtility;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private static final Logger LOG = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private BCryptPasswordEncoder passwordEncoder(){
        return SecurityUtility.passwordEncoder();
    }


}
