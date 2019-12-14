package com.dao.goodsDao;

import com.domain.Goods;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 用于对商品进行显示、操作的dao
 */
@Repository
public interface IGoodsDao {

    //获取所有商品
    @Select("select * from salesList ")
    List<Goods> findAllGoods();

    //更新商品
    @Update("update salesList set userId=#{userId},goodName=#{goodName},number=#{number}," +
            "price=#{price},describe=#{describe},photo1=#{photo1},photo2=#{photo2},photo3=#{photo3}" +
            " where userId = #{getId} and goodName = #{getName}")
    int updateGoods(Goods goods);

    //新增商品
    @Insert("insert into salesList(userId,goodName,number,price,describe,photo1,photo2,photo3) " +
            "values(#{userId},#{goodName},#{number},#{price},#{describe},#{photo1},#{photo2},#{photo3})")
    int addGoods(Goods goods);

    //通过用户和商品名 查商品
    @Select("select * from salesList where userId = #{userId} and goodName = #{goodName}")
    Goods findGoodsById(String userId,String goodName);

    //通过商品名查商品 模糊查询
    @Select("select * from salesList where goodName like CONCAT('%',#{goodName},'%')")
    List<Goods> findGoodsByName(String goodName);

    @Delete("delete from salesList where userId = #{userId} and goodName = #{goodName}")
    int deleteGoods(String userId,String goodName);
}
