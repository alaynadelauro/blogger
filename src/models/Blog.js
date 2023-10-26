export class Blog {
    constructor(data) {
        this.body = data.body
        this.createdAt = new Date(data.createdAt) || new Date()
        this.creator = data.creator
        this.creatorId = data.creatorId
        this.id = data.id
        this.imgUrl = data.imgUrl
        this.published = data.published
        this.tags = data.tags
        this.title = data.title
        this.updatedAt = new Date(data.updatedAt) || new Date()
    }
}