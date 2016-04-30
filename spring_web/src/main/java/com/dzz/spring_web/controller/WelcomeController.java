package com.dzz.spring_web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by dzz on 16/4/30.
 */

@Controller
public class WelcomeController {

    @RequestMapping(value = "/")
    public String welcome(){

        return "welcome";
    }
}
