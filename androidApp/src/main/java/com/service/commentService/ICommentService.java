package com.service.commentService;

import com.domain.Comment;
import com.domain.Forum;
import com.domain.ForumAndIcon;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ICommentService {

    //查询所有帖子
    public List<ForumAndIcon> findAllForums();

    //通过postId查询帖子中的所有评论
    List<Comment> findAllComments(int postId);

    //根据postId查询帖子
    Forum findForumById(int postId);
}
