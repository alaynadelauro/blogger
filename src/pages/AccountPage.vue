<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>

  <div class="m-3 p-3 d-flex justify-content-center">
    <form @submit.prevent="updateAccount()" class="card p-4 pb-3 ">
      <div class="d-flex">
        <div class="d-block">
          <div class="">
            <label for="name" class="form-label">Name</label>
            <input v-model="editable.name" type="text" class="form-control" placeholder="Name..">
          </div>
          <div class="mt-3">
            <label for="picture" class="form-label">User Image</label>
            <input v-model="editable.picture" type="url" class="form-control" placeholder="User picture..">
          </div>
        </div>
      </div>
      <div class="text-center mt-4 mb-0 me-3">
        <button type="submit" class="btn submitButton">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { AppState } from '../AppState';
import { accountService } from '../services/AccountService';
import { logger } from '../utils/Logger';
export default {
  setup() {
    const editable = ref({})

    return {
      editable,
      account: computed(() => AppState.account),
      async updateAccount() {
        try {
          await accountService.updateAccount(editable.value)
          editable.value = {}
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}

.submitButton {
  background-color: mediumspringgreen;
  color: black;
}
</style>
