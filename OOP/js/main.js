import User from './model/User.js'
import Post from "./model/Post.js"
import Blog from "./model/Blog.js"

const user = new User('Béla', 'Kovács', '')
const post = new Post("Tini nindzsa harci teknőc", "Zseniális teknős", 3)
const blog = new Blog('Címe', user)

setTimeout(() => {
    blog.addPost(post)
    blog.deletePost(1)
    console.log(blog.getPostById(54))
    console.log(blog.getPosts(), 'van-e 1-es')
}, 3000)


console.log(user.getFullName())
console.log(user.getEmail())
console.log(post.getPreview(),post.getPreview(3))

