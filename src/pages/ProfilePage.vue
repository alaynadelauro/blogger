<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-11">
                {{ creator }}
            </div>
        </div>
        <div class="row">
            <div v-for="blog in blogs" :key="blog.id" class="col-8 my-3">
                <BlogCardComponent :blogProp="blog" />
            </div>
        </div>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import BlogCardComponent from '../components/BlogCardComponent.vue';
import { AppState } from '../AppState';
import { useRoute } from 'vue-router';
import { blogService } from '../services/BlogService';

export default {
    setup() {
        const route = useRoute
        async function getCreatorById() {
            const creatorId = route.params.getCreatorById
            await blogService.getCreatorById(creatorId)
        }
        onMounted(() => {
            // getCreatorById()
        })
        return {
            blog: computed(() => AppState.blogs),
            creator: computed(() => AppState.activeCreator)
        };
    },
    components: { BlogCardComponent }
}
</script>


<style lang="scss" scoped></style>