<template lang="">
  <div class="container mx-auto py-8">
    <ul
      role="list"
      class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8"
    >
      <li class="relative" v-for="user in users" :key="user.id">
        <div
          class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
        >
          <img :src="user.avatar_url" />
        </div>
        <a :href="user.html_url" target="_blank" class="block"
          ><span class="inline-block">Github:</span> {{ user.login }}</a
        >
        <router-link
          :to="{ name: 'userdetail', params: { username: user.login } }"
          >Detail page</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["users"],
};
</script>
<style lang=""></style>
