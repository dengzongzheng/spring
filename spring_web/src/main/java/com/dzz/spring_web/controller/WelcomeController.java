package com.dzz.spring_web.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.ModelMap;

/**
 * Created by dzz on 16/4/30.
 */

@Controller
@EnableAutoConfiguration
public class WelcomeController {

    @Value("${user.name}")
    private  String name;

    @RequestMapping(value = "/")
    public String welcome(ModelMap map){

        map.put("name",name);
        return "welcome";
    }
}
