let commentForm = document.getElementById("comment-form");
let commentSection = document.getElementById("comments");
let commentPopup = document.getElementById("comments-info");

function addComment(name, comment) {
  let comments = getComments();
    comments.push({
    'name': name,
    'comment': comment
  });
  localStorage.setItem('comments', JSON.stringify(comments));
}

function getComments() {
  return JSON.parse(localStorage.getItem('comments')) || [];
}

function showComments(container, comments) {
  container.innerHTML = '';

  comments.forEach(function (comment) {
      let commentItem = document.createElement('p');
      commentItem.innerText = comment.name + " написал: " + comment.comment;
      container.appendChild(commentItem);
  });
}

if (commentForm) {
  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let name = commentForm[0].value;
    let comment = commentForm[1].value;
    addComment(name, comment);

    commentPopup.innerText = "Спасибо за обращение, " + name +
     ". Мы с вами обязательно свяжемся в ближайшее время!";

    showComments(commentSection, getComments());

    setTimeout(function () {
        commentPopup.innerText = "";
    }, 1000);
  })
}

showComments(commentSection, getComments());