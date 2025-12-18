const showPost = JSON.parse(localStorage.getItem('post'));

document.getElementById('showCaption').innerHTML = showPost.captionPost;
const postTime = document.getElementById('post-date');

if (showPost.time <= 12) {
    postTime.innerHTML = `${showPost.time} AM`
} else {
    postTime.innerHTML = `${showPost.time} PM`
}
