package com.service.goodsService.Impl;

import com.dao.goodsDao.IGoodsDao;
import com.dao.userDao.IUserDao;
import com.domain.Goods;
import com.service.goodsService.IGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("goodsService")
public class GoodsServiceImpl implements IGoodsService {

    @Autowired
    private IGoodsDao goodsDao;
    @Autowired
    private IUserDao userDao;

    /**
     * 新增商品函数  判断是否存在
     * @param goods
     * @return
     */
    @Override
    public int addGoods(Goods goods) {
        String userId = goods.getUserId();
        String goodName = goods.getGoodName();
        Goods dbGood = goodsDao.findGoodsById(userId,goodName);//找到已有，则数量加一，否则创建

        if(!dbGood.getUserId().equals("")){//找到了，就只更新
            dbGood.setNumber(dbGood.getNumber()+goods.getNumber());
            return goodsDao.updateGoods(goods);
        }else {
            return goodsDao.addGoods(goods);
        }
    }

    @Override
    public List<Goods> findAllGoods() {
        return goodsDao.findAllGoods();
    }

    @Override
    public List<Goods> findGoodsByName(String goodName) {
        return goodsDao.findGoodsByName(goodName);
    }
}

