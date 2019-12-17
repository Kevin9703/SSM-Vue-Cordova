package com.dao.commentDao;

import com.domain.Comment;
import com.domain.Forum;
import com.domain.ForumAndIcon;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICommentDao {


     //查询所有帖子
    @Select("select forum.*,userInfo.icon from forum,userInfo\n" +
            "where forum.userId = userInfo.userId\n")
    List<ForumAndIcon> findAllForums();


    //通过postId查询帖子中的所有评论
    @Select("select comment.* from comment,forum\n" +
            "where comment.postId = forum.postId and forum.postId = #{postId}\n" +
            "order by comment.indexNumber")
    List<Comment> findAllComments(int postId);

    //根据postId查询帖子
    @Select("select * from forum where postId = #{postId}")
    Forum findForumById(int postId);


}
