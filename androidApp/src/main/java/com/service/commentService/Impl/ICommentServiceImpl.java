package com.service.commentService.Impl;

import com.dao.commentDao.ICommentDao;
import com.domain.Comment;
import com.domain.Forum;
import com.domain.ForumAndIcon;
import com.service.commentService.ICommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("/CommentService")
public class ICommentServiceImpl implements ICommentService {

    @Autowired
    private ICommentDao commentDao;

    @Override
    public List<ForumAndIcon> findAllForums() {
        return commentDao.findAllForums();
    }

    @Override
    public List<Comment> findAllComments(int postId) {
        return commentDao.findAllComments(postId);
    }

    @Override
    public Forum findForumById(int postId) {
        return commentDao.findForumById(postId);
    }
}
