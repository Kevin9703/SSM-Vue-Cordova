package com.controller;

import com.domain.Goods;
import com.domain.UserNow;
import com.service.goodsService.IGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@Controller
@RequestMapping("/Goods")
public class GoodsController {

    @Autowired
    private IGoodsService goodsService;

    /**
     * 查找所有，用于显示主界面
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/FindAllGoods",method = RequestMethod.GET)
    @ResponseBody
    public List<Goods> findAllGoods(){
        return goodsService.findAllGoods();
    }

    /**
     * 根据名字，模糊查询
     * @param map
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/FindGoodsByName",method = RequestMethod.POST)
    @ResponseBody
    public List<Goods> findGoodsByName(@RequestBody HashMap<String,String> map){
        String goodName = map.get("goodName");
        System.out.println(goodName);
        return goodsService.findGoodsByName(goodName);
    }


    /**
     * 新增商品，输入的是一个商品json，如果数据库中已经有这个东西，就把这个商品的数量加上，否则新建
     * @param goods
     * @return 返回字符串
     */
    @CrossOrigin
    @RequestMapping(value = "/AddGoods",method = RequestMethod.POST)
    @ResponseBody
    public String addGoods(@RequestBody Goods goods){
        System.out.println(UserNow.getUserIdNow());
        System.out.println(goods);
        if (goodsService.addGoods(goods)==1){
            return "success";
        }else
            return "fail";
    }

    /**
     * 修改商品，如果不存在显示错误，如果存在则改掉数据，必须有goodId！
     * @param goods
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/UpdateGoods",method = RequestMethod.POST)
    @ResponseBody
    public String updateGoods(@RequestBody Goods goods){
        if (goodsService.updateGoods(goods)==1){
            return "success";
        }else
            return "fail";
    }

    /**
     * 查找我卖的商品
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/FindMyGoods",method = RequestMethod.GET)
    @ResponseBody
    public List<Goods> findMyGoods(){
            return goodsService.findMyGoods();
    }

    /**
     * 删除商品
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/DeleteGoods",method = RequestMethod.POST)
    @ResponseBody
    public String deleteGoods(@RequestBody HashMap<String,String> map){
        if (goodsService.deleteGoods(Integer.parseInt(map.get("goodId")))==1){
            return "success";
        }else
            return "fail";
    }

    @CrossOrigin
    @RequestMapping(value = "/FindGoodsById",method = RequestMethod.POST)
    @ResponseBody
    public Goods findGoodsById(@RequestBody HashMap<String,String> map) {
        int goodId = Integer.parseInt(map.get("goodId"));
        return goodsService.findGoodsById(goodId);
    }
}
