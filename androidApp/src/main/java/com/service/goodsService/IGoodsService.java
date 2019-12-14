package com.service.goodsService;

import com.domain.Goods;

import java.util.List;

/**
 * 定义对商品的操作
 */
public interface IGoodsService {

    //查询所有商品
    List<Goods> findAllGoods();

    //新增商品
    int addGoods(Goods goods);
}
