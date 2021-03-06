import Post from './Post.js'

class Blog {
    #posts
    #title
    #author

    constructor(title, author) {
        this.#title = title
        this.#author = author
        this.fetchPosts()
    }

    fetchPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                if(!response.ok) {
                    this.#posts = []
                    return
                }
                response.json().then(data => {
                    let posts = []
                    let i

                    for (i = 0; i < data.length; i++)
                        posts = [...posts, new Post(data[i].title, data[i].body, data[i].id)]

                    this.#posts = posts
                })
            }).catch(() => {
                this.#posts = []
        })
    }

    getPostById(postId) {
        const post = this.#posts.find(el => { return el.getId() === postId })
        return post ? post : null
    }

    addPost(post) {
        this.#posts.push(post)
    }

    deletePost(postId) {
        const idx = this.#posts.findIndex(el => { return el.getId() === postId })
        if(idx !== -1) {
            this.#posts.splice(idx, 1)
            return true
        }
        return false
    }

    getPosts() {
        return this.#posts
    }
}

export default Blog