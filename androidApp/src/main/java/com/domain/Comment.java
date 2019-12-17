package com.domain;

public class Comment {
    private int postId;
    private String userId;
    private String commentDetails;
    private String indexNumber;

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

    @Override
    public String toString() {
        return "Comment{" +
                "postId=" + postId +
                ", userId='" + userId + '\'' +
                ", commentDetails='" + commentDetails + '\'' +
                ", indexNumber='" + indexNumber + '\'' +
                '}';
    }
}
