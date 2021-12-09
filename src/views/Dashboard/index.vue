<template>
  <div class="page-dashboard">
    <div class="container mx-auto pt-4">
      <ul
        class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 font-semibold text-gray-900 text-center"
      >
        <li
          v-for="project in list"
          :key="project.link"
          @click="gotoProject(project.url)"
          class="flex"
        >
          <a
            class="relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm hover:shadow-md w-full flex flex-col justify-center items-center pt-6 pb-6 px-6"
            href=""
          >
            <component
              :is="project.icon"
              class="h-10 w-10 mb-2 text-blue-500"
            ></component>
            <span>{{ project.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import projectList from "./config";
import { ScissorsIcon } from "@heroicons/vue/solid";

export default {
  name: "DashboardPage",
  components: {
    scissors: ScissorsIcon,
  },
  data() {
    return {
      list: projectList,
    };
  },
  methods: {
    gotoProject(url) {
      this.$router.push(url);
    },
  },
};
</script>
