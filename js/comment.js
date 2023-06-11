function submitComment() {
    var commentInput = document.getElementById("comment-input");
    var commentText = commentInput.value;
    if (commentText.trim() === "") {
        alert("请填写评论");
        return;
    }
    var commentList = document.getElementById("comment-list");
    var newComment = document.createElement("div");
    newComment.classList.add("comment");
    var newAvatar = document.createElement("i");
    newAvatar.classList.add("expand", "fa", "fa-user");
    var newCommentText = document.createElement("p");
    newCommentText.classList.add("comment-text");
    newCommentText.textContent = commentText;
    var newCommentTime = document.createElement("span");
    newCommentTime.classList.add("comment-time");
    newCommentTime.textContent = new Date().toLocaleString();
    newComment.appendChild(newAvatar);
    newComment.appendChild(newCommentText);
    newComment.appendChild(newCommentTime);
    commentList.appendChild(newComment);
    commentInput.value = "";
}

window.addEventListener("load", function () {
    var commentInput = document.getElementById("comment-input");
    commentInput.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            submitComment();
        }
    });
    var commentSubmitBtn = document.getElementById("comment-submit");
    commentSubmitBtn.addEventListener("click", function () {
        submitComment();
    });
});