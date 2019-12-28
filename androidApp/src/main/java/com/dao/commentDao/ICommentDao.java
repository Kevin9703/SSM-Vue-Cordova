package com.dao.commentDao;

import com.domain.Comment;
import com.domain.Forum;
import com.domain.ForumAndIcon;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
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

    //联合搜索获取帖子用户的用户名
    @Select("select userInfo.userName from userInfo,forum\n" +
            "where userInfo.userId = forum.userId")
    List<String> findUserNameForForum();

    //用于评论的id获取
    @Select("select userInfo.userName from userInfo,comment\n" +
            "where userInfo.userId = comment.userId and postId = #{postId}")
    List<String> findUserNameForComment(int postId);

    //发表评论
    @Insert("insert into comment(postId,userId,commentDetails,indexNumber,commentTime) values(#{postId},#{userId},#{commentDetails}," +
            "#{indexNumber},#{commentTime})")
    int insertComment(Comment comment);

    //获取索引号
    @Select("select totalNumber from forum where postId = #{postId}")
    String getIndex(int postId);

    //更新totalNumber
    @Update("update forum set totalNumber = #{totalNumber} where postId = #{postId}")
    void updateTotalNumber(@Param("postId") int postId, @Param("totalNumber") String totalNumber);

    //获取头像
    @Select("select userInfo.icon\n" +
            "from comment,userInfo,forum\n" +
            "where comment.userId = userInfo.userId and forum.postId = #{postId} and forum.postId = comment.postId\n" +
            "order by comment.indexNumber")
    List<String> getIcon(int postId);


    //发帖
    @Insert("insert into forum(userId,title,details,totalNumber,photo,postTime) " +
            "values(#{userId},#{title},#{details},#{totalNumber},#{photo},#{postTime})")
    int insertPost(Forum forum);
}
