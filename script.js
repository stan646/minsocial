// object for holding user information post

const postData = {
    id: '',
    captionPost: '',
    author: '',
    time: '',
    comments: '',
    likes: '',
}

// form handling

document.getElementById('createForm').addEventListener('submit',function(event){
    event.preventDefault();

    try {
        // get user input for posting

        const userCaption = document.getElementById('captionPost').value;
        const mediaPost = document.getElementById('fileUpload');

        // date
        const postDate = new Date();
        let month = postDate.getMonth();
        let hour = postDate.getHours();
        let minutes = postDate.getMinutes();
        let second = postDate.getSeconds();
        let Time = `posted at ${hour}:${minutes}`;
        
       
        

        // assign objects key to values

        postData.captionPost = userCaption;
        postData.time = Time;

        // lets create a localstorage for storing userPost

        const postStorage = localStorage.setItem('post', JSON.stringify(postData));

        // output data

        const showPosts = JSON.parse(localStorage.getItem('post'));
        console.log(showPosts.captionPost);

        userCaption.value = '';
        
    } catch (error) {
        alert(`system got error on ${error.name} ${error.message}`);
    }
})


