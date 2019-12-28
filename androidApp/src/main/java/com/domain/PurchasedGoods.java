package com.domain;

import java.io.Serializable;

public class PurchasedGoods implements Serializable {
    private int goodId;
    private String myId;
    private String userId;
    private String goodName;
    private int number;
    private float price;
    private String photo1;

    public PurchasedGoods() {
    }

    public PurchasedGoods(int goodId, String myId, String userId, String goodName, int number, float price, String photo1) {
        this.goodId = goodId;
        this.myId = myId;
        this.userId = userId;
        this.goodName = goodName;
        this.number = number;
        this.price = price;
        this.photo1 = photo1;
    }

    public int getGoodId() {
        return goodId;
    }

    public void setGoodId(int goodId) {
        this.goodId = goodId;
    }

    public String getMyId() {
        return myId;
    }

    public void setMyId(String myId) {
        this.myId = myId;
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

    public String getPhoto1() {
        return photo1;
    }

    public void setPhoto1(String photo1) {
        this.photo1 = photo1;
    }
}
