<template>
    <div class="d-flex borderColor">
        <img :src="blogProp.imgUrl" :alt="blogProp.title" class="blogImg">
        <div class="p-4">
            <h1>{{ blogProp.title }}</h1>
            <router-link :to="{ name: 'Profile', params: { creatorId: blogProp.creatorId } }">
                <p class="fw-bold">{{ blogProp.creator.name }}</p>
            </router-link>
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