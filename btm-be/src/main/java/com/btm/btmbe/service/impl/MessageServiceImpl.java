package com.btm.btmbe.service.impl;

import com.btm.btmbe.model.Message;
import com.btm.btmbe.repository.MessageRepository;
import com.btm.btmbe.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Override
    public void saveMessage(Message message) {
        messageRepository.save(message);
    }
}
