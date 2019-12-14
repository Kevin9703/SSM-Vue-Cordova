package com.controller;

import com.domain.Goods;
import com.service.goodsService.IGoodsService;
import net.minidev.json.JSONArray;
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
    public List<Goods> FindGoodsByName(@RequestBody HashMap<String,String> map){
        String goodName = map.get("goodName");
        System.out.println(goodName);
        return goodsService.findGoodsByName(goodName);
    }
}
