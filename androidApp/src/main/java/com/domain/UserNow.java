package com.domain;

/**
 * 用于保存当前登录的用户id
 */
public  class UserNow {
    public static String userIdNow;

    public static String getUserIdNow() {
        return userIdNow;
    }

    public static void setUserIdNow(String userIdNow) {
        UserNow.userIdNow = userIdNow;
    }
}
