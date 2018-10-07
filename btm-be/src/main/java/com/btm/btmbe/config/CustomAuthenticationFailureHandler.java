package com.btm.btmbe.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component("authenticationFailureHandler")
public class CustomAuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    @Autowired
    private MessageSource messages;

    @Override
    public void onAuthenticationFailure(final HttpServletRequest request, final HttpServletResponse response, final
    AuthenticationException exception) throws IOException, ServletException {
        String message = exception.getMessage();
        if (message.startsWith("otpId")) {
            response.sendRedirect("/otp?otpId="+message.substring(6));
        } else {
            this.logger.debug("No failure URL set, sending 401 Unauthorized error");
            response.sendError(HttpStatus.UNAUTHORIZED.value(), HttpStatus.UNAUTHORIZED.getReasonPhrase());

        }
    }
}
