package com.service.goodsService;

import com.domain.Goods;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 定义对商品的操作
 */
public interface IGoodsService {

    //查询所有商品
    List<Goods> findAllGoods();

    //新增商品
    int addGoods(Goods goods);

    //修改商品
    int updateGoods(Goods goods);

    //通过名字查询
    List<Goods> findGoodsByName(String goodName);

    //通过userId和goodName查商品
    Goods findGoodsByIdAndName(String userId,String goodName);

    //通过goodId查商品
    Goods findGoodsById(int goodId);

    //通过userId显示我卖的商品
    List<Goods> findMyGoods();

    int deleteGoods(int goodId);
}