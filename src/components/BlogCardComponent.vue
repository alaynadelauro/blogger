<template>
    <div class="d-flex borderColor">
        <img :src="blogProp.imgUrl" :alt="blogProp.title" class="blogImg">
        <div class="p-4">
            <h1>{{ blogProp.title }}</h1>
            <p>{{ blogProp.creator.name }}</p>
            <router-link :to="{ name: 'ActiveBlog', params: { blogId: blogProp.id } }">
                <button class="btn btn-success"><i class="mdi mdi-magnify"></i> View Blog</button>
            </router-link>
        </div>
    </div>
</template>


<script>
import { Blog } from '../models/Blog';

export default {
    props: {
        blogProp: {
            type: Blog
        }
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.borderColor {
    border: 5px solid black;
}

.blogImg {
    width: 50%;
    height: 40vh;
    object-fit: cover;
}
</style>