package com.service.commentService.Impl;

import com.dao.commentDao.ICommentDao;
import com.domain.Comment;
import com.domain.Forum;
import com.domain.ForumAndIcon;
import com.domain.UserNow;
import com.service.commentService.ICommentService;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@Service("/CommentService")
public class CommentServiceImpl implements ICommentService {

    @Autowired
    private ICommentDao commentDao;

    /**
     * 获取所有帖子，原来的userId改成userName
     * @return
     */
    @Override
    public List<ForumAndIcon> findAllForums() {
        List<ForumAndIcon> forumAndIconList = commentDao.findAllForums();
        List<String> userName = commentDao.findUserNameForForum();
        for (int i=0;i<forumAndIconList.size();i++){
            forumAndIconList.get(i).setUserId(userName.get(i));
        }
        return forumAndIconList;
    }

    @Override
    public List<Comment> findAllComments(int postId) {
        List<Comment> commentList = commentDao.findAllComments(postId);
        List<String> userName = commentDao.findUserNameForComment(postId);
        List<String> icon = getIcon(postId);
        for (int i=0;i<commentList.size();i++){
            commentList.get(i).setUserId(userName.get(i));
            commentList.get(i).setIcon(icon.get(i));
        }
        Collections.sort(commentList);

        return commentList;
    }

    @Override
    public Forum findForumById(int postId) {
        return commentDao.findForumById(postId);
    }


    @Override
    public List<String> findUserNameForForum() {
        return commentDao.findUserNameForForum();
    }

    @Override
    public List<String> findUserNameForComment(int postId) {
        return commentDao.findUserNameForComment(postId);
    }


    @Override
    public int insertComment(Comment comment) {
        //传入的只有postId和commentDetails，要输入userId和indexNumber
        comment.setUserId(UserNow.getUserIdNow());
        int index = Integer.parseInt(getIndex(comment.getPostId()));
        index++;
        String LastIndex = String.valueOf(index);
        comment.setIndexNumber(LastIndex);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm");
        comment.setCommentTime(sdf.format(new Date()));
        //更新帖子总数
        updateTotalNumber(comment.getPostId(),LastIndex);
        return commentDao.insertComment(comment);
    }

    @Override
    public String getIndex(int postId) {
        return commentDao.getIndex(postId);
    }

    @Override
    public void updateTotalNumber(int postId, String totalNumber) {
        commentDao.updateTotalNumber(postId,totalNumber);
    }

    @Override
    public List<String> getIcon(int postId) {
        List<String> list = commentDao.getIcon(postId);
        for (int i=0;i<list.size();i++){
            if (list.get(i)==null){
                list.set(i,"0");
            }
        }
        return list;
    }

    @Override
    public int insertPost(Forum forum) {
        forum.setUserId(UserNow.getUserIdNow());
        forum.setTotalNumber("0");
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm");
        forum.setPostTime(sdf.format(new Date()));
        return commentDao.insertPost(forum);
    }
}
