<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Users</h1>
        <p class="mt-2 text-sm text-gray-700">
          A list of top 30 github users based on your search keyword including
          their avatar, login name, type and the github link.
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <span>Sort by: </span>
        <button
          type="button"
          @click="sortByFollowers()"
          class="mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Followers
        </button>
        <button
          type="button"
          @click="sortByRepositories()"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Repositories
        </button>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Login Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Type
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="user in users" :key="user.name">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="user.avatar_url"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">
                          <a :href="user.html_url" target="_blank" class="block"
                            ><span class="inline-block">Github page</span></a
                          >
                        </div>
                        <div class="text-gray-500">
                          <router-link
                            :to="{
                              name: 'userdetail',
                              params: { username: user.login },
                            }"
                            >Detail page</router-link
                          >
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ user.login }}</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span
                      class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
                      >Active</span
                    >
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ user.type }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import axios from "axios";
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const route = useRoute();
    const state = reactive({ users: [], people: [] });

    function sortByFollowers() {
      axios
        .get(
          "https://api.github.com/search/users?q=" +
            route.params.keyword +
            "+sort:followers"
        )
        .then(function (response) {
          state.users = response.data.items;
        });
    }

    function sortByRepositories() {
      axios
        .get(
          "https://api.github.com/search/users?q=" +
            route.params.keyword +
            "+sort:repositories"
        )
        .then(function (response) {
          state.users = response.data.items;
        });
    }
    // github rest API Search users by name
    // https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-users
    // api endpoint: https://api.github.com/search/users?q=Q
    axios
      .get("https://api.github.com/search/users?q=" + route.params.keyword)
      .then(function (response) {
        state.users = response.data.items;
      });
    const { users } = toRefs(state);
    return { users, sortByFollowers, sortByRepositories };
  },
};
</script>
<style lang=""></style>
