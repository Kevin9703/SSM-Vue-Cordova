package com.domain;

import java.io.Serializable;
import java.util.Date;

public class Comment implements Serializable,Comparable<Comment>{
    private int postId;
    private String userId;
    private String commentDetails;
    private String indexNumber;
    private String commentTime;
    private String icon;

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCommentDetails() {
        return commentDetails;
    }

    public void setCommentDetails(String commentDetails) {
        this.commentDetails = commentDetails;
    }

    public String getIndexNumber() {
        return indexNumber;
    }

    public void setIndexNumber(String indexNumber) {
        this.indexNumber = indexNumber;
    }

    public String getCommentTime() {
        return commentTime;
    }

    public void setCommentTime(String commentTime) {
        this.commentTime = commentTime;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "postId=" + postId +
                ", userId='" + userId + '\'' +
                ", commentDetails='" + commentDetails + '\'' +
                ", indexNumber='" + indexNumber + '\'' +
                '}';
    }

    @Override
    public int compareTo(Comment o) {
        int index1 = Integer.parseInt(o.getIndexNumber());
        int index2 = Integer.parseInt(this.getIndexNumber());
        if (index2>index1){
            return 1;
        }else if (index1==index2){
            return 0;
        }else
            return -1;
    }
}
