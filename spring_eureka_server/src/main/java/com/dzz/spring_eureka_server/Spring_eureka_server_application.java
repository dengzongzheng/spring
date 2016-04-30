package com.dzz.spring_eureka_server;

import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.Configuration;

/**
 * Created by dzz on 16/4/30.
 */
@SpringBootApplication
@Configuration
@EnableEurekaServer
public class Spring_eureka_server_application {

    public static void main(String args[]){

        SpringApplication.run(Spring_eureka_server_application.class, args);
    }

}
