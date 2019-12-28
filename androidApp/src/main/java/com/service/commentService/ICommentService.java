package com.service.commentService;

import com.domain.Comment;
import com.domain.Forum;
import com.domain.ForumAndIcon;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ICommentService {

    //查询所有帖子
    public List<ForumAndIcon> findAllForums();

    //通过postId查询帖子中的所有评论
    List<Comment> findAllComments(int postId);

    //根据postId查询帖子
    Forum findForumById(int postId);

    //联合搜索获取帖子用户的用户名-->用于全部贴
    List<String> findUserNameForForum();

    //联合搜索获取帖子用户的用户名-->用于评论
    List<String> findUserNameForComment(int postId);

    //发表评论
    int insertComment(Comment comment);

    //获取索引号
    String getIndex(int postId);

    //更新totalNumber
    void updateTotalNumber(int postId,String totalNumber);

    //获取头像
    List<String> getIcon(int postId);

    //发帖
    int insertPost(Forum forum);
}
