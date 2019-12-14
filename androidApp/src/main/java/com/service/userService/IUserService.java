package com.service.userService;

import com.domain.User;

/**
 * 用户登录接口
 * 功能：判断用户账号密码是否合法
 */
public interface IUserService {
    /**
     * @param userId 用户id
     * @param password 用户密码
     * @return 登录成功返回200 失败返回500
     */
    int userLogin(String userId,String password);

    /**
     * 用户注册
     * @param user
     */
    int userRegister(User user);

    /**
     * 通过id查找用户
     * @param userId
     * @return 找到返回1 没找到返回0
     */
    int findUserById(String userId);
}
