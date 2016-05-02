package com.dzz.spring_web_mongo.service;

import com.dzz.spring_web_api.common.json.City;
import com.dzz.spring_web_api.common.pojo.BizPojo;
import com.dzz.spring_web_api.common.pojo.CityPojo;
import com.dzz.spring_web_api.common.pojo.CountryPojo;
import com.dzz.spring_web_api.common.pojo.MarkPojo;
import jdk.nashorn.internal.objects.annotations.Where;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by dzz on 16/4/30.
 */
@Service
public class CityService {

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<City> getCitys(){
        List citys = new ArrayList<City>();
        City city = new City();
        city.setCityId(2);
        city.setCityName("上海");
        mongoTemplate.save(city);
        citys = mongoTemplate.findAll(City.class,"city");
        return citys;
    }

    public boolean addCitys(){
        System.out.println("add");
        CityPojo cityPojo = new CityPojo();
        cityPojo.setCityId(1);
        cityPojo.setCityName("上海");

        CountryPojo countryPojo = new CountryPojo();
        countryPojo.setCountryId(1);
        countryPojo.setCountryName("浦东");
        BizPojo bizPojo = new BizPojo();
        bizPojo.setBizId(1);
        bizPojo.setBizName("万达");
        bizPojo.setMarks(new ArrayList<MarkPojo>());
        List bizList = new ArrayList<BizPojo>();
        bizList.add(bizPojo);
        countryPojo.setBizList(bizList);
        List countryList = new ArrayList<CountryPojo>();
        countryList.add(countryPojo);
        cityPojo.setCountryList(countryList);
        mongoTemplate.save(cityPojo,"city");
        return true;
    }
    public boolean updateCity(long cityId,long countryId,long bizId,MarkPojo markPojo){

        System.out.println("1111");
        Query query = new Query();
        query.addCriteria(Criteria.where("cityId").is(cityId).and("countryList.countryId").is(countryId).and("countryList.bizList.bizId").is(bizId));
        Update update = new Update();
//        update.addToSet("countryList.bizList.marks",markPojo);
        update.push("marks",markPojo);
        mongoTemplate.upsert(query,update,"city");
        return true;
    }

}
