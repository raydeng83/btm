package com.btm.btmbe.repository;

import com.btm.btmbe.model.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageRepository extends CrudRepository<Message, Long> {
}
