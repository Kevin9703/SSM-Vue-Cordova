package com.controller;

import com.domain.Comment;
import com.domain.Forum;
import com.domain.ForumAndIcon;
import com.service.commentService.ICommentService;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@Controller
@RequestMapping("/Comment")
public class CommentController {

    @Autowired
    private ICommentService commentService;


    /**
     * 查找论坛中所有的帖子
     * @return 返回帖子列表
     */
    @CrossOrigin
    @RequestMapping(value = "/FindAllForums",method = RequestMethod.GET)
    @ResponseBody
    public List<ForumAndIcon> findAllForums(){
        return commentService.findAllForums();
    }

    //通过postId查询帖子中的所有评论
    @CrossOrigin
    @RequestMapping(value = "/FindAllComments",method = RequestMethod.POST)
    @ResponseBody
    List<Comment> findAllComments(@RequestBody HashMap<String,Integer>map){
        int postId = map.get("postId");
        return commentService.findAllComments(postId);
    }
}
