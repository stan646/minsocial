const showPost = JSON.parse(localStorage.getItem('post'));

document.getElementById('showCaption').innerHTML = showPost.captionPost;
const postTime = document.getElementById('post-date');

if (showPost.time <= 12) {
    postTime.innerHTML = `${showPost.time} AM`
} else {
    postTime.innerHTML = `${showPost.time} PM`
}


document.getElementById('like-btn').addEventListener('click', function(){
    const showLikes = document.getElementById('likes');
    showPost.likes++;
    if (showPost.likes >= 1000) {
        showLikes.innerHTML = `${showPost.likes}k`;
    } else {
        showLikes.innerHTML = showPost.likes;
    }
});
