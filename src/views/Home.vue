<template>
  <div class="relative overflow-hidden">
    <main>
      <div
        class="bg-gray-900 pt-10 sm:pt-10 lg:overflow-hidden lg:pt-8 lg:pb-14"
      >
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div
              class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"
            >
              <div class="">
                <h1
                  class="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
                >
                  <span class="block">Ready for connect</span>
                  <span class="block text-indigo-400"
                    >most talented people around the word</span
                  >
                </h1>
                <p
                  class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                >
                  Type any name that comes to your mind then click Search. for
                  example 'Evan You' or 'Mark Zuckerberg'. you will see a bunch
                  of people listed there then click one start to explore.
                </p>
                <div class="mt-10 sm:mt-12">
                  <form action="#" class="sm:mx-auto sm:max-w-xl lg:mx-0">
                    <div class="sm:flex">
                      <div class="min-w-0 flex-1">
                        <label for="username" class="sr-only">User name</label>
                        <input
                          id="username"
                          type="text"
                          v-model="keyword"
                          placeholder="type Evan You"
                          class="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                        />
                      </div>
                      <div class="mt-3 sm:mt-0 sm:ml-3">
                        <router-link
                          v-if="keyword"
                          :to="{ name: 'users', params: { keyword: keyword } }"
                        >
                          <button
                            type="submit"
                            class="block w-full rounded-md bg-indigo-500 py-3 px-4 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          >
                            Search
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
              <div
                class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
              >
                <img
                  class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let keyword = ref(" ");
    return { keyword };
  },
};
</script>
