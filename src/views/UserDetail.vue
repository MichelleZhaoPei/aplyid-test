<template>
  <aside class="w-full overflow-y-auto border-gray-200 bg-white p-8 lg:block">
    <div class="space-y-6 pb-16">
      <div>
        <div
          class="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg"
        >
          <img :src="user.avatar_url" alt="" class="object-cover" />
        </div>
        <div class="mt-4 flex items-start justify-between">
          <div>
            <h2 class="text-lg font-medium text-gray-900">
              <span class="sr-only"></span>{{ user.name }}
            </h2>
            <p class="text-sm font-medium text-gray-500">{{ user.login }}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="font-medium text-gray-900">Information</h3>
        <dl
          class="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200"
        >
          <div class="flex justify-between py-3 text-sm font-medium">
            <dt class="text-gray-500">Followers:</dt>
            <dd class="whitespace-nowrap text-gray-900">
              {{ user.followers }}
            </dd>
          </div>
          <div class="flex justify-between py-3 text-sm font-medium">
            <dt class="text-gray-500">Following:</dt>
            <dd class="whitespace-nowrap text-gray-900">
              {{ user.following }}
            </dd>
          </div>
          <div class="flex justify-between py-3 text-sm font-medium">
            <dt class="text-gray-500">Public Repos:</dt>
            <dd class="whitespace-nowrap text-gray-900">
              {{ user.public_repos }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </aside>
</template>

<script>
import axios from "axios";
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";

export default {
  props: {
    username: { type: String, required: true },
  },
  setup() {
    const route = useRoute();
    const state = reactive({ user: {} });

    // github rest API Get a user
    // https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-contextual-information-for-a-user
    // api endpoint: https://api.github.com/users/USERNAME
    axios
      .get("https://api.github.com/users/" + route.params.username)
      .then((response) => {
        state.user = response.data;
      });
    const { user } = toRefs(state);
    return { user };
  },
};
</script>
