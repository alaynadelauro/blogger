<template>
    <div class="container-fluid">
        <section v-if="activeBlog" class="row justify-content-center borderColor m-5 p-4 rounded">
            <div class="col-10 d-flex justify-content-center">
                <img class="blog-img mb-3 rounded" :src="activeBlog.imgUrl" :alt="activeBlog.title">
            </div>
            <div class="col-10 d-flex flex-column align-items-center justify-content-center">

                <div class="d-flex align-items-center w-100 justify-content-between">
                    <div class="d-flex">
                        <img class="creator-img rounded-circle" :src="activeBlog.creator.picture" :alt="activeBlog.creator.name">
                        <span class="mx-3">
                            <p class="fs-1 d-flex justify-content-center mb-0">{{ activeBlog.title }}</p>
                            <p>By: {{ activeBlog.creator.name }}</p>
                            <p>Updated At: {{ activeBlog.updatedAt.toLocaleDateString() }}</p>
                        </span>
                    </div>
                    <button type="button" title="edit blog" class="btn fs-1"><i class="mdi mdi-pencil-box"></i></button>
                </div>
                <div class="m-4">
                    {{ activeBlog.body }}
                </div>
            </div>
        </section>
        <section v-else class="row">
            <div class="col-10 fs-1 p-5">
                <p>Loading...<i class="mdi mdi-loading mdi-spin"></i></p>
            </div>
        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { blogService } from '../services/BlogService.js';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { AppState } from '../AppState.js'

export default {
    setup() {
        const route = useRoute()
        async function getBlogById() {
            try {
                const blogId = route.params.blogId
                await blogService.getBlogById(blogId)
            } catch (error) {
                logger.log(error)
                Pop.error(error)
            }
        }
        onMounted(() => {
            blogService.clearData()
            getBlogById()
        })
        return {
            activeBlog: computed(() => AppState.activeBlog)

        }
    }
}
</script>


<style lang="scss" scoped>
.blog-img {
    max-height: 30rem;
    width: 55rem;
    object-fit: cover;
    position: center;
}

.creator-img {
    height: 7rem;
    position: center;
    object-fit: cover;
}

.borderColor {
    border: 2px solid black;
}
</style>