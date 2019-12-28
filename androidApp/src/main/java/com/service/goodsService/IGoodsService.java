package com.service.goodsService;

import com.domain.Goods;
import com.domain.PurchasedGoods;
import com.domain.Temp;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
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

    //新增我购买的商品
    int insertPurchasedGoods(PurchasedGoods purchasedGoods);

    //查看我购买的商品
    List<PurchasedGoods> findMyPurchasedGoods();

    //购买商品
    String buyGoods(List<Temp> list);

    //加入购物车
    int insertShoppingCart(int goodId);

    //显示购物车商品
    List<Goods> findShoppingCart();
}