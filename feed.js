function postDetails (){
    const showPost = JSON.parse(localStorage.getItem('userPost'));
    document.getElementById('showCaption').innerHTML = showPost.postData.captionPost;
    const postTime = document.getElementById('post-date');
    postTime.innerHTML = showPost.postDateInfo.time;   
}
postDetails();




// document.getElementById('like-btn').addEventListener('click', function(){
//     const showLikes = document.getElementById('likes');
//     showPost.likes++;
//     if (showPost.likes >= 1000) {
//         showLikes.innerHTML = `${showPost.likes}k`;
//     } else {
//         showLikes.innerHTML = showPost.likes;
//     }
// });
