import { AppState } from "../AppState"
import { Blog } from "../models/Blog"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BlogService {
    async getBlogs() {
        const res = await api.get('api/blogs')
        logger.log(res.data)
        const newBlog = res.data
        AppState.blogs = newBlog.map(pojo => new Blog(pojo))
        logger.log(AppState.blogs)
    }

    async getBlogById(blogId) {
        const res = await api.get(`api/blogs/${blogId}`)
        AppState.activeBlog = new Blog(res.data)
        // logger.log('active blog', AppState.activeBlog)
    }

    async clearData() {
        AppState.activeBlog = null
    }

    // AUTHENTICATION REQUIRED
    async createBlog(blogData) {
        const res = await api.post('api/blogs', blogData)
        AppState.blogs.unshift(new Blog(res.data))
    }
    async getCreatorById(creatorId) {
        const res = await api.get(`api/blogs/creator/${creatorId}`)
        AppState.activeCreator = res.data
        logger.log(res.data)
    }
}

export const blogService = new BlogService