<template lang="">
  <div class="container mx-auto">
    <label for="name" class="block text-sm font-medium text-gray-700"
      >Search users</label
    >
    <div class="mt-1 flex rounded-md shadow-sm">
      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <input
          v-on:keyup.enter="searchUser()"
          type="text"
          v-model="username"
          name="name"
          id="name"
          class="block w-full rounded-none rounded-l-md border-gray-300 pl-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
          placeholder="user name"
        />
      </div>
      <button
        type="button"
        @click="searchUser()"
        class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        <span>Search</span>
      </button>
    </div>

    <Users :users="users"></Users>
  </div>
</template>
<script>
import axios from "axios";
import Users from "./Users.vue";
import { ref, reactive, toRefs } from "vue";

export default {
  components: {
    Users,
  },
  setup() {
    const state = reactive({ users: [] });
    let username = ref("");

    // github rest API Search users
    // https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-users
    // api endpoint: https://api.github.com/search/users?q=Q
    function searchUser() {
      axios
        .get(
          "https://api.github.com/search/users?q=" +
            username.value +
            "+sort:followers,repositories"
        )
        .then(function (response) {
          state.users = response.data.items;
        });
    }
    const { users } = toRefs(state);
    return { username, users, searchUser };
  },
};
</script>
<style lang=""></style>
