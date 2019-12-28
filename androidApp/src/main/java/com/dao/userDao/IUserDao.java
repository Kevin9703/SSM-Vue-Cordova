package com.dao.userDao;

import com.domain.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

/**
 * 用于用户登录相关的dao
 */
@Repository
public interface IUserDao {
    //用户登录
    @Select("select count(*) from userInfo where userId = #{userId} and password = #{password}")
    int userLogin(@Param("userId") String userId, @Param("password") String password);

    //用户注册
    @Insert("insert into userInfo(userId,userName,password,sex,address,phone,qq,icon) values(#{userId},#{userName},#{password},#{sex},#{address},#{phone},#{qq},#{icon})")
    int userRegister(User user);

    //通过id查找用户
    @Select("select * from userInfo where userId = #{userId}")
    User findUserById(String userId);


    //改头像
    @Update("update userInfo set icon = #{icon} where userId = #{userId}")
    int updateIcon(@Param("icon") String icon,@Param("userId") String userId);
}
