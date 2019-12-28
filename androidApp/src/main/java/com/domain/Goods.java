package com.domain;

import java.io.Serializable;

public class Goods implements Serializable {
    private int goodId;
    private String userId;
    private String goodName;
    private int number;
    private float price;
    private String describe;
    private String photo1;
    private String photo2;
    private String photo3;

    public int getGoodId() {
        return goodId;
    }

    public void setGoodId(int goodId) {
        this.goodId = goodId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getGoodName() {
        return goodName;
    }

    public void setGoodName(String goodName) {
        this.goodName = goodName;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    public String getphoto1() {
        return photo1;
    }

    public void setphoto1(String photo1) {
        this.photo1 = photo1;
    }

    public String getphoto2() {
        return photo2;
    }

    public void setphoto2(String photo2) {
        this.photo2 = photo2;
    }

    public String getphoto3() {
        return photo3;
    }

    public void setphoto3(String photo3) {
        this.photo3 = photo3;
    }

    @Override
    public String toString() {
        return "Goods{" +
                "goodId=" + goodId +
                ", userId='" + userId + '\'' +
                ", goodName='" + goodName + '\'' +
                ", number=" + number +
                ", price=" + price +
                ", describe='" + describe + '\'' +
                '}';
    }
}
