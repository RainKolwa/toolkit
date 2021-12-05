<template>
  <div class="page-dashboard">
    <ul>
      <li
        v-for="project in list"
        :key="project.link"
        @click="gotoProject(project.url)"
      >
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import projectList from "./config";

export default {
  name: "DashboardPage",
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
