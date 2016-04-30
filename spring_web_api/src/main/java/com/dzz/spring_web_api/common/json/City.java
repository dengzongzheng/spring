package com.dzz.spring_web_api.common.json;

import java.io.Serializable;

/**
 * Created by dzz on 16/4/30.
 */
public class City  implements Serializable {

    private long cityId;

    private String cityName;

    public long getCityId() {
        return cityId;
    }

    public void setCityId(long cityId) {
        this.cityId = cityId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }
}
