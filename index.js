const posts = [
    {
        id: 0,
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: true
    },
    {
        id: 1,
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
    {
        id: 2,
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: true
    }
]

const feedEl = document.getElementById('post-wrapper')

// render post 
function renderPosts() {
    feedEl.innerHTML = ''
    for(let i = 0; i < posts.length; i++) {
        feedEl.appendChild(createPostElement(posts[i]))
    }
}
renderPosts()

// create html element
function createPostElement(post) {
    const article = document.createElement('article')
    article.className = 'post'
    article.dataset.id = post.id

    article.innerHTML = `
        <div class="container">
            <header class="post-header">
                <img src=" ${post.avatar}" alt="Profile picture of Vangogh." class="profile-pic avatar">
                <div class="user-info">
                    <h2 class="user-name text-small-bold">
                        ${post.name}
                    </h2>
                    <p class="location">
                            ${post.location}
                    </p>
                </div>
            </header>

            <figure class="post-media">
                <img src=" ${post.post}" alt="A media post of Vicent Vangogh.">
            </figure>

            <div class="post-actions">
                <button class="like-btn" aria-label="Like post.">
                    <i class="fa-${post.liked ? 'solid' : 'regular'} fa-heart"></i>
                <button class="comment-btn aria-label="Comment on post.">
                    <i class="fa-regular fa-comment"></i>
                </button>
                <button class="share-btn aria-label="Share post">
                    <i class="fa-regular fa-paper-plane"></i>
                </button>
            </div>

            <span class="likes-count text-small-bold" aria-label="21,495 likes"  class="post-likes text-small-bold"> ${post.likes} likes</span>

            <div class="post-comments">
                <ul>
                    <li><strong> ${post.username}</strong>  ${post.comment}</li>
                </ul>
            </div>
        </div>
    `

    return article
}

// like post
function likePost(post) {
    post.liked = !post.liked
    post.likes += post.liked ? 1 : -1
}
feedEl.addEventListener('click', function(e) {
    const btn = e.target.closest('.like-btn')
    if(!btn) return

    const postEl = btn.closest('.post')
    const postId = Number(postEl.dataset.id)

    const post = posts.find(p => p.id === postId)

    likePost(post)

    renderPosts()
})

// double click post to like
feedEl.addEventListener('dblclick', function(e) {
    const postMedia = e.target.closest('.post-media')
    if(!postMedia) return

    const postEl = postMedia.closest('.post')
    const postId = Number(postEl.dataset.id)

    const post = posts.find(p => p.id === postId)

    likePost(post)

    renderPosts()    
})

