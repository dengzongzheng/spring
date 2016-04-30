package com.dzz.spring_web_mongo.config;

import com.dzz.spring_web_mongo.resource.CityResource;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import javax.ws.rs.ApplicationPath;

/**
 * Created by dzz on 16/4/30.
 */
@ApplicationPath("")
@Configuration
public class JerseyConfig extends ResourceConfig {


    public JerseyConfig(){
        registerEndpoints();
    }

    public void registerEndpoints(){

        register(CityResource.class);
    }

}
