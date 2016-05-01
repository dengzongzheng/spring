package com.dzz.spring_web_mongo.resource;


import com.dzz.spring_web_api.common.json.City;
import com.dzz.spring_web_mongo.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by dzz on 16/4/30.
 */

@Path("/city")
@Produces(MediaType.APPLICATION_JSON)
public class CityResource {

    @Autowired
    private CityService cityService;

    @GET
    @Path("/getCity")
    public Response getCitys(){
        System.out.println("ddd");
        List<City> citys = cityService.getCitys();
        return Response.ok().entity(citys).build();
    }

}

