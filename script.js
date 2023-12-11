
function hoverLike(div) {
    let likeImage = div.querySelector('.like');
    if (!likeImage.classList.contains('liked')) {
        div.style.color = "red";
        likeImage.src = "images/like2.png";
    }
}
function hoverOutLike(div) {
    let likeImage = div.querySelector('.like');
    if (!likeImage.classList.contains('liked')) {
        div.style.color = "#bbb";
        likeImage.src = "images/like0.png";
    }
}
function clickLike(div) {
    let likeImage = div.querySelector('.like');
    let likeCounter = div.querySelector('.like-counter');
    let numberOfLikes = Number.parseInt(likeCounter.textContent);
    if (likeImage.classList.contains('liked')) {
        likeImage.classList.remove('liked');
        likeImage.src = "images/like2.png";
        --numberOfLikes;
    } else {
        likeImage.classList.add('liked');
        likeImage.src = "images/like3.png";
        ++numberOfLikes;
    }
    likeCounter.textContent = numberOfLikes;
}
const commentInput = document.getElementById("comment-input");
const commentButton = document.getElementById("comment-button");

commentInput.addEventListener("input", function () {
    if (commentInput.value.trim() !== "") {
        commentButton.style.display = "block";
    } else {
        commentButton.style.display = "none";
    }
});
function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (48+element.scrollHeight)+"px";
}
textAreaAdjust(document.querySelector('.comment-input'))
function publishComment() {
    let commentInput = document.querySelector('.comment-input');
    const newCommentDiv = document.createElement("div");
    newCommentDiv.setAttribute("class", "comment");
    newCommentDiv.innerHTML = `
        <div class="comment-author">
          <img class="avatar" src="images/avatar-1.jpg" alt="Аватар">
          <div class="comment-author-text">
            <h3>Аноним</h3>
            <p class="comment-time">Только что</p>
          </div>
        </div>
        <p class="comment-text">Текст комментария</p>
        <div class="like-div" onmouseover="hoverLike(this)" onmouseout="hoverOutLike(this)" onclick="clickLike(this)">
          <img class="like" src="images/like0.png" alt="Количество лайков">
          <p class="like-counter">0</p>
        </div>
      `;
    let newCommentText = newCommentDiv.querySelector('.comment-text');
    newCommentText.textContent = commentInput.value;
    commentInput.value = "";
    let firstComment = document.querySelector('.comment');
    firstComment.insertAdjacentElement('beforebegin', newCommentDiv);
}