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
}

export const blogService = new BlogService