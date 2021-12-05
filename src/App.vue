<template>
  <div>
    <div class="header container mx-auto">
      <h1>{{ title }}</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  @apply antialiased;
}
.header {
  h1 {
    @apply text-4xl font-bold py-4;
  }
}
</style>
