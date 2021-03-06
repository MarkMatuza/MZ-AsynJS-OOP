class Post {
    title;
    body;
    #id;

    constructor(title, body, id) {
        this.title = title;
        this.body = body;
        this.#id = id;
    }

    getPreview(length) {
        if(!this.body || typeof this.body !== 'string') return ''
        const charLength = length ? length : this.body.length - 1
        return this.body.substring(0, charLength)
    }

    getId() {
        return this.#id
    }
}

export default Post
