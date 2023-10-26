<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 justify-content-center mb-4 d-flex p-3">
        <h1>Blogger</h1>
        <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add Blog
        </button>
      </div>
      <div v-for="blog in blogs" :key="blog.id" class="col-8 my-3">
        <BlogCardComponent :blogProp="blog" />
      </div>
    </div>
  </div>
  <BlogFormComponent />
</template>

<script>
import { computed, onMounted } from 'vue';
// import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
import { blogService } from '../services/BlogService.js'
import { AppState } from '../AppState.js'
import BlogCardComponent from '../components/BlogCardComponent.vue';
import BlogFormComponent from '../components/BlogFormComponent.vue';

export default {
  setup() {
    async function getBlogs() {
      try {
        await blogService.getBlogs();
      }
      catch (error) {
        logger.error(error);
      }
    }
    onMounted(() => {
      getBlogs();
    });
    return {
      blogs: computed(() => AppState.blogs),

    };
  },
  components: { BlogCardComponent, BlogFormComponent }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
