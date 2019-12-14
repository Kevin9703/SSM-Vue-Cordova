package com.controller;

import com.domain.User;
import com.service.userService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

@Controller
@RequestMapping("/User")
public class UserController {

    @Autowired
    private IUserService accountService;

    /**
     *
     如果前端传入的是json数据那么后端使用
     @RequestBody HashMap<String, String> map
     进行接收，然后再通过map.get(“id”)获取对应的数据

     如果前端传入的是正常表单数据，那么后端使用
     @RequestParam("id") String id或者
     @RequestParam(value="id", required = false) String id接收参数

     需要注意的是，如果请求类型为delete并且参数类型不是json的话，不能使用通过表单类型提交，
     参数需要跟到请求url后面，并且后台使用@PathVariable进行获取参数
     */


    /**
     * 登录函数
     * @param map 获取普通json
     * @return 查出记录数不为0，则登录成功，返回200 否则返回500
     */
    @CrossOrigin
    @RequestMapping(value = "/Login",method = RequestMethod.POST)
    @ResponseBody
    public String Login(@RequestBody HashMap<String, String> map){
        String userId = map.get("userId");
        String password = map.get("password");
        System.out.println(map.get("userId")+map.get("password"));
        if (accountService.userLogin(userId,password)!=0)
            return "success";
        else
            return "fail";
    }

    /**
     *  模拟ajax异步请求
     * @param user   导入jackson.jar可以实现javabean对象与json之间的转换
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/Register",method = RequestMethod.POST)
    @ResponseBody
    public String Register(@RequestBody User user){
        int returnValue = accountService.userRegister(user);
        System.out.println(returnValue);
        if (returnValue==1){
            return "success";
        }else
            return "fail";
    }



    /**
     *自动封装中 string转date
     * @param request
     * @param binder
     */
    @InitBinder
    protected void init(HttpServletRequest request, ServletRequestDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        dateFormat.setLenient(false);
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
    }

}
