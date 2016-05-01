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
        String packageName = JerseyConfig.class.getPackage().getName();
        // 所有resource自动扫描，不需要再依次手动添加
       // packages(packageName.substring(0, packageName.lastIndexOf(".")) + ".resource");
        registerEndpoints();
    }
    private void registerEndpoints() {
        register(CityResource.class);
    }

}
