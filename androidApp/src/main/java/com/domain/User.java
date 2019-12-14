package com.domain;

import java.io.Serializable;
import java.util.Date;

public class User implements Serializable {

    private String userId;
    private String userName;
    private String password;
    private String sex;
    private String address;
    private String phone;
    private String qq;
    private String icon;

    public User(String userId, String userName, String password, String sex, String address, String phone, String qq, String icon) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.sex = sex;
        this.address = address;
        this.phone = phone;
        this.qq = qq;
        this.icon = icon;
    }

    public User() {
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId='" + userId + '\'' +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", sex='" + sex + '\'' +
                ", address='" + address + '\'' +
                ", phone='" + phone + '\'' +
                ", qq='" + qq + '\'' +
                '}';
    }
}
