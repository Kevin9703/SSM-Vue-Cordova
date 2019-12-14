package com.service.userService.Impl;

import com.dao.userDao.IUserDao;
import com.domain.User;
import com.service.userService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements IUserService {

    @Autowired
    private IUserDao userLoginDao;

    @Override
    public int userLogin(String userId, String password) {
        return userLoginDao.userLogin(userId,password);
    }

    @Override
    public int findUserById(String userId) {
        return userLoginDao.findUserById(userId);
    }

    /**
     * 注册用户
     * 用户已经存在，返回0
     * 用户创建成功，返回1
     * 创建失败，返回-1
     * @param user
     * @return
     */
    @Override
    public int userRegister(User user) {
        if (findUserById(user.getUserId())==1){
            return 0;
        }else
            return userLoginDao.userRegister(user);
    }
}
