package com.dzz.spring_web_mongo.service;

import com.dzz.spring_web_api.common.json.City;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by dzz on 16/4/30.
 */
@Service
public class CityService {

    public List<City> getCitys(){
        List citys = new ArrayList<City>();
        City city = new City();
        city.setCityId(2);
        city.setCityName("上海");
        citys.add(city);
        return citys;
    }
}
