package com.service.goodsService.Impl;

import com.dao.goodsDao.IGoodsDao;
import com.dao.userDao.IUserDao;
import com.domain.Goods;
import com.domain.UserNow;
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
     * 新增商品函数  判断是否存在,如果存在，则返回不能新增
     * @param goods
     * @return
     */
    @Override
    public int addGoods(Goods goods) {

        String userId = UserNow.getUserIdNow();
        String goodName = goods.getGoodName();

        if(findGoodsByIdAndName(userId,goodName)==null){

            goods.setUserId(userId);
            return goodsDao.addGoods(goods);
        }else {
            return 0;//找到了,返回0，表示不能新增
        }
    }

    /**
     * 查找所有商品
     * @return
     */
    @Override
    public List<Goods> findAllGoods() {
        return goodsDao.findAllGoods();
    }

    /**
     * 根据名字模糊查询商品
     * @param goodName
     * @return
     */
    @Override
    public List<Goods> findGoodsByName(String goodName) {
        return goodsDao.findGoodsByName(goodName);
    }


    /**
     * 更新商品，先判断这个商品是否存在，如果存在就根据goodId修改
     * @param goods
     * @return
     */
    @Override
    public int updateGoods(Goods goods) {
        if(findGoodsById(goods.getGoodId())!=null){//找到了，就只更新
            Goods dbGoods = findGoodsById(goods.getGoodId());
            if(!goods.getGoodName().equals("")){ dbGoods.setGoodName(goods.getGoodName()); }
            if (goods.getNumber()!=0) { dbGoods.setNumber(goods.getNumber()); }
            if (goods.getPrice()!=0.0){ dbGoods.setPrice(goods.getPrice()); }
            if (!goods.getDescribe().equals("")){ dbGoods.setDescribe(goods.getDescribe()); }
            if (goods.getphoto1()!=null){ dbGoods.setphoto1(goods.getphoto1()); }
            if (goods.getphoto2()!=null){ dbGoods.setphoto2(goods.getphoto2()); }
            if (goods.getphoto3()!=null){ dbGoods.setphoto3(goods.getphoto3()); }
            return goodsDao.updateGoods(dbGoods);
        }else {
           return 0;//没找到，返回0，表示没这个商品
        }
    }

    /**
     * 根据userId和goodName找，用于新增和修改  找不到会报空指针异常
     * @param userId
     * @param goodName
     * @return
     */
    @Override
    public Goods findGoodsByIdAndName(String userId,String goodName){
        return goodsDao.findGoodsByIdAndName(userId,goodName);
    }

    @Override
    public Goods findGoodsById(int goodId) {
        return goodsDao.findGoodsById(goodId);
    }

    /**
     * 查询我卖的
     * @return
     */
    @Override
    public List<Goods> findMyGoods() {
        return goodsDao.findMyGoods(UserNow.getUserIdNow());
    }

    /**
     * 通过id删除货物
     * @param goodId
     * @return
     */
    @Override
    public int deleteGoods(int goodId) {
        return goodsDao.deleteGoods(goodId);
    }
}

