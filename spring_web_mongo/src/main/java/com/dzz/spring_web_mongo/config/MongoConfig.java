package com.dzz.spring_web_mongo.config;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientOptions;
import com.mongodb.ServerAddress;
import com.mongodb.WriteConcern;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

/**
 * Created by dzz on 16/5/1.
 */
@Configuration
@EnableAutoConfiguration
public class MongoConfig
{

    //@Value("${spring.data.mongodb.host}")
    private String host = "192.168.0.141";

   // @Value("${spring.data.mongodb.port}")
    private int port = 27017;

   // @Value("${spring.data.mongodb.database}")
    private String dbName = "house";

    @Bean
    public MongoDbFactory mongoDbFactory() throws Exception {
        ServerAddress serverAddress = new ServerAddress(host,port);
        MongoClientOptions.Builder builder = MongoClientOptions.builder().socketKeepAlive(true)       // 是否保持长链接
                .connectTimeout(5000)   // 链接超时时间
                .socketTimeout(5000)    // read数据超时时间
                .connectionsPerHost(30) // 每个地址最大请求数
                .threadsAllowedToBlockForConnectionMultiplier(50) // 一个socket最大的等待请求数
                .writeConcern(WriteConcern.UNACKNOWLEDGED);
        return new SimpleMongoDbFactory(new MongoClient(serverAddress,builder.build()),dbName);
    }

    @Bean
    public MongoTemplate mongoTemplate() throws Exception {
        return new MongoTemplate(mongoDbFactory());
    }
}
