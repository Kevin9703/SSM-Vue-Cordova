package com.dao.goodsDao;

import com.domain.Goods;
import org.apache.ibatis.annotations.*;
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
    @Update("update salesList set goodName=#{goodName},number=#{number}," +
            "price=#{price},describe=#{describe},photo1=#{photo1},photo2=#{photo2},photo3=#{photo3}" +
            " where goodId = #{goodId}")
    int updateGoods(Goods goods);

    //新增商品
    @Insert("insert into salesList(userId,goodName,number,price,describe,photo1,photo2,photo3) " +
            "values(#{userId},#{goodName},#{number},#{price},#{describe},#{photo1},#{photo2},#{photo3})")
    int addGoods(Goods goods);

    //通过goodId查商品
    @Select("select * from salesList where goodId = #{goodId}")
    Goods findGoodsById(int goodId);

    //通过userId和goodName查商品
    @Select("select * from salesList where userId = #{userId} and goodName = #{goodName}")
    Goods findGoodsByIdAndName(@Param("userId") String userId,@Param("goodName") String goodName);

    //通过商品名查商品 模糊查询
    @Select("select * from salesList where goodName like CONCAT('%',#{goodName},'%')")
    List<Goods> findGoodsByName(String goodName);

    //通过商品id删除
    @Delete("delete from salesList where goodId = #{goodId}")
    int deleteGoods(int goodId);

    //通过userId显示我卖的商品
    @Select("select * from salesList where userId = #{userId}")
    List<Goods> findMyGoods(String userId);

}
