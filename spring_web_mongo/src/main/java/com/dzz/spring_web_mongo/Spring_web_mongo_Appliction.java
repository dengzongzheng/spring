package com.dzz.spring_web_mongo;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;

/**
 * Created by dzz on 16/4/30.
 */
@SpringBootApplication
@EnableEurekaClient
@ComponentScan("com.dzz")
public class Spring_web_mongo_Appliction {

    public static void main(String args[]){
        new SpringApplicationBuilder(Spring_web_mongo_Appliction.class).web(true).run(args);
    }
}
