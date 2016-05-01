package com.dzz.spring_web.resource.client;

import org.springframework.cloud.netflix.feign.FeignClient;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

/**
 * Created by dzz on 16/5/1.
 */
@FeignClient("spring_web_mongo")
public interface CityClient {

    @GET
    @Path("/getCity")
    public Response getCitys();
}
