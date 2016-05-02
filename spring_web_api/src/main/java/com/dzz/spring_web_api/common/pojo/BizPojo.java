package com.dzz.spring_web_api.common.pojo;

import java.io.Serializable;
import java.util.List;

/**
 * Created by dzz on 16/5/2.
 */
public class BizPojo implements Serializable{

    private long bizId;

    private String bizName;

    private List<MarkPojo> marks;

    public long getBizId() {
        return bizId;
    }

    public void setBizId(long bizId) {
        this.bizId = bizId;
    }

    public String getBizName() {
        return bizName;
    }

    public void setBizName(String bizName) {
        this.bizName = bizName;
    }

    public List<MarkPojo> getMarks() {
        return marks;
    }

    public void setMarks(List<MarkPojo> marks) {
        this.marks = marks;
    }
}
