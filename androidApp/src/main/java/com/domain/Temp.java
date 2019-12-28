package com.domain;

import java.io.Serializable;

/**
 * 在购买时用于接收goodId和number的
 */
public class Temp implements Serializable {
    public int goodId;
    public int number;

    public int getGoodId() {
        return goodId;
    }

    public void setGoodId(int goodId) {
        this.goodId = goodId;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
