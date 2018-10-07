package com.btm.btmbe.controller;

import com.btm.btmbe.model.Message;
import com.btm.btmbe.service.MessageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private MessageService messageService;

    @RequestMapping(value = "/message", method = RequestMethod.POST)
    public void receiveMessage(@RequestBody HashMap<String, String> mapper){
        ObjectMapper om = new ObjectMapper();

        String name = (String) om.convertValue(mapper.get("name"), Object.class);
        String email = (String) om.convertValue(mapper.get("email"), Object.class);
        String title = (String) om.convertValue(mapper.get("title"), Object.class);
        String content = (String) om.convertValue(mapper.get("content"), Object.class);

        Message message = new Message(name, email, title, content);
        messageService.saveMessage(message);
    }
}
