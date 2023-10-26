<template>
    <div class="modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title w-100 text-center" id="exampleModalLabel">Add Blog</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- TODO check on [error] :: 4:23:13 PM ::  TypeError: Cannot read properties of undefined (reading 'backdrop') -->
                    <form @submit.prevent="createBlog()" class="p-4 pb-3">
                        <div class="d-flex">
                            <div class="d-block w-25">
                                <div class="">
                                    <label for="title" class="form-label">Title</label>
                                    <input v-model="editable.title" type="text" required class="form-control" placeholder="Title..">
                                </div>
                                <div class="mt-3">
                                    <label for="imgUrl" class="form-label">Blog Image</label>
                                    <input v-model="editable.imgUrl" maxlength="500" type="url" required class="form-control" placeholder="Article picture..">
                                </div>
                            </div>
                            <div class="mx-3 w-75">
                                <label for="body" class="form-label">Body</label>
                                <textarea v-model="editable.body" rows="5" required class="form-control" placeholder="Blog content..."></textarea>
                            </div>
                        </div>
                        <div class="text-end mt-4 mb-0 me-3">
                            <button type="submit" class="btn submitButton">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import { Blog } from '../models/Blog';
import { blogService } from '../services/BlogService';
import { logger } from '../utils/Logger';
import { Modal } from 'bootstrap';

export default {
    setup() {
        const editable = ref({})

        return {
            editable,
            async createBlog() {
                try {
                    await blogService.createBlog(editable.value);
                    editable.value = {};
                    Modal.getOrCreateInstance('#blogForm').hide();
                } catch (error) {
                    logger.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.submitButton {
    background-color: mediumspringgreen;
    color: black;
}
</style>