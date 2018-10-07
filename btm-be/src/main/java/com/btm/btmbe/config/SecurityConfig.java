package com.btm.btmbe.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

import static com.btm.btmbe.utility.SecurityUtility.passwordEncoder;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomAuthenticationProvider authProvider;

    @Autowired
    private RestAuthenticationEntryPoint restAuthenticationEntryPoint;

    @Autowired
    private AuthenticationSuccessHandler authenticationSuccessHandler;

    @Autowired
    private CustomAuthenticationFailureHandler customAuthenticationFailureHandler;

    @Autowired
    private UserSecurityService userSecurityService;

    private static final String[] PUBLIC_MATCHERS = {
            "/css/**",
            "/js/**",
            "/image/**",
            "/login/**",
            "/logout/**",
            "/user",
            "/user/forgetpassword",
            "/user/oauthUser",
            "/authenticate",
            "/otp",
            "/googleLogin",
            "/googleLoginPost",
            "/contact/**"
    };

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors().and()
                .csrf().disable()
                .exceptionHandling()
                .authenticationEntryPoint(restAuthenticationEntryPoint)
                .and()
                .authorizeRequests()
                .antMatchers(PUBLIC_MATCHERS)
                .permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .successHandler(authenticationSuccessHandler)
                .failureHandler(new SimpleUrlAuthenticationFailureHandler())
                .and()
                .logout();
    }

    @Bean
    public AuthenticationSuccessHandler mySuccessHandler() {
        return new AuthenticationSuccessHandler(new MappingJackson2HttpMessageConverter());
    }

    @Bean
    public SimpleUrlAuthenticationFailureHandler myFailureHandler() {
        return new SimpleUrlAuthenticationFailureHandler();
    }



    @Override
    protected void configure(
            AuthenticationManagerBuilder auth) throws Exception {
//        auth.authenticationProvider(authProvider);
        auth.userDetailsService(userSecurityService).passwordEncoder(passwordEncoder());
    }


}
