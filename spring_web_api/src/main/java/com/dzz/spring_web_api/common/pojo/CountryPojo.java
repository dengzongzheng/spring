package com.dzz.spring_web_api.common.pojo;

import java.io.Serializable;
import java.util.List;

/**
 * Created by dzz on 16/5/2.
 */
public class CountryPojo  implements Serializable{

    private long countryId;

    private String countryName;

    private List<BizPojo> bizList;

    public long getCountryId() {
        return countryId;
    }

    public void setCountryId(long countryId) {
        this.countryId = countryId;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public List<BizPojo> getBizList() {
        return bizList;
    }

    public void setBizList(List<BizPojo> bizList) {
        this.bizList = bizList;
    }
}
