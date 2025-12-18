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

        
        // redirect user home page

        window.location.assign('home.html');
        
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



