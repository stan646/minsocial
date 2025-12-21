// object for holding user information post

const post = {
    postData:{
        id: '',
        captionPost: '',
        author: '',
        comments: 0,
        likes: 0,
    },
    postDateInfo: {
        currentTime: new Date(),
        time: '',
    }
    
}

// form handling

document.getElementById('createForm').addEventListener('submit',function(event){
    event.preventDefault();

    try {
        // get user input for posting

        const userCaption = document.getElementById('captionPost');
        const postCaption = userCaption.value;
        const mediaPost = document.getElementById('fileUpload');

        let hour = post.postDateInfo.currentTime.getHours();
        let min = post.postDateInfo.currentTime.getMinutes();
        let month = post.postDateInfo.currentTime.getMonth();
        let timePost = (hour < 12) ? `${hour} : ${min} AM` : `${hour} : ${min} PM`;
        

          
        // assign objects key to values

        post.postData.captionPost = postCaption;
        post.postDateInfo.time = timePost;
        post.postData.likes;
        // lets create a localstorage for storing userPost

        const postStorage = localStorage.setItem('userPost', JSON.stringify(post));

        // redirect user home page

        window.location.assign('index.html');
       
        
    } catch (error) {
        alert(`system got error on ${error.name} ${error.message}`);
    }
});

// lets enable the button when user start to input

document.getElementById('captionPost').addEventListener('input', function(){
    try {
        const getButton = document.getElementById('post-btn');
        getButton.disabled = false;
    } catch (error) {
        alert(`system got error on ${error.name} ${error.message}`);
    }
    
})






