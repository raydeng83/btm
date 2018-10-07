package com.btm.btmbe.config;

import com.btm.btmbe.model.User;
import com.btm.btmbe.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

public class AuthenticationSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
    private RequestCache requestCache = new HttpSessionRequestCache();
    private final ObjectMapper mapper;

    @Autowired
    private UserService userService;

    @Autowired
    AuthenticationSuccessHandler(MappingJackson2HttpMessageConverter messageConverter) {
        this.mapper = messageConverter.getObjectMapper();
    }

    @Override
    public void onAuthenticationSuccess(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication) throws ServletException, IOException {
        HttpSession session = request.getSession();
        User authUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        response.setContentType("application/json");
        Map<String, Object> authSuccessMap = new HashMap<String, Object>();
        authSuccessMap.put("authenticated", true);
        authSuccessMap.put("username", authUser.getUsername());
        authSuccessMap.put("role", authUser.getAuthorities());
        PrintWriter writer = response.getWriter();
        mapper.writeValue(writer, authSuccessMap);
        writer.flush();

    }

    @Override
    public void setRequestCache(RequestCache requestCache) {
        this.requestCache = requestCache;
    }
}

