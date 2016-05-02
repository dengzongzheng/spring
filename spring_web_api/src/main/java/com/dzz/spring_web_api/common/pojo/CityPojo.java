package com.dzz.spring_web_api.common.pojo;

import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.List;

/**
 * Created by dzz on 16/5/2.
 */
@XmlRootElement
public class CityPojo implements Serializable {

    private long cityId;

    private String cityName;

    private List<CountryPojo> countryList;

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

    public List<CountryPojo> getCountryList() {
        return countryList;
    }

    public void setCountryList(List<CountryPojo> countryList) {
        this.countryList = countryList;
    }
}
