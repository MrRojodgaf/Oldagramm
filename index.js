const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let imgDiv = document.getElementById("img-div")
let nameLocation = document.getElementById("name-location")
let postReact = document.getElementById("post-react")
let heartBtn = document.querySelector(".heart-icon")
let likesEl = document.querySelector(".likes")
let userComment = document.getElementById("user-comment")
let userLike = document.getElementById("user-like")


function renderPage(name) {
    for(let i = 0; i < posts.length; i++) {
        if (posts[i].name === name) {
            nameLocation.innerHTML = `<h2 class="name">${posts[i].name}</h2>
                                      <h3 class="location">${posts[i].location}</h3>`
            imgDiv.innerHTML = `<img class="avatar" alt="avatar" src="images/post-ducreux.jpg">`
            postReact.innerHTML = `<img class="post" alt="post" src=${posts[i].post}>`
            userLike.innerHTML = `<p class="likes">${posts[i].likes} likes</p>`
            userComment.innerHTML = `<span>${posts[i].username}</span> ${posts[i].comment}`
        }
    }
}

renderPage("Joseph Ducreux")


function renderLike(like){
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].likes === like) {
                like++
                userLike.innerHTML = `<p class="likes">${like} likes</p>`
            }
                
        
            }
        
}


heartBtn.addEventListener("click", function(){
        renderLike(152)
        
})






