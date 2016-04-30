package com.dzz.spring_web.resource;

import com.dzz.spring_web_api.common.json.City;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.ws.Response;

/**
 * Created by dzz on 16/4/30.
 */

@RestController
@RequestMapping(value="/city")
public class CityResource {

    @RequestMapping(value="",method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity getCity(){

        City city = new City();
        city.setCityId(1);
        city.setCityName("北京");
        return ResponseEntity.ok(city);
    }
}
