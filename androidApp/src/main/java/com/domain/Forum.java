package com.domain;

public class Forum {
    private int postId;
    private String userId;
    private String title;
    private String details;
    private String totalNumber;
    private String photo;
    private String postTime;

    public String getPostTime() {
        return postTime;
    }

    public void setPostTime(String postTime) {
        this.postTime = postTime;
    }

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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getTotalNumber() {
        return totalNumber;
    }

    public void setTotalNumber(String totalNumber) {
        this.totalNumber = totalNumber;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    @Override
    public String toString() {
        return "Forum{" +
                "postId=" + postId +
                ", userId='" + userId + '\'' +
                ", title='" + title + '\'' +
                ", details='" + details + '\'' +
                ", totalNumber='" + totalNumber + '\'' +
                ", postTime='" + postTime + '\'' +
                '}';
    }
}
