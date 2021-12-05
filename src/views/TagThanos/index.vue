<template>
  <div class="page-tag-thanos container mx-auto">
    <div class="mb-4">
      <textarea
        class="textarea"
        v-model="content"
        placeholder="请输入html"
      ></textarea>
      <div class="actions">
        <button @click="handleSubmit" class="button">submit</button>
        <button @click="handleReset" class="button-sencondary">reset</button>
      </div>
    </div>
    <div class="mb-4">
      <textarea class="textarea" v-model="parsedContent" id="result"></textarea>
      <div class="actions">
        <button @click="handleCopy" class="button">copy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { removeTag, removeStyle } from "@/utils/html";

export default {
  name: "TagThanos",
  data() {
    return {
      content: "",
      parsedContent: "",
    };
  },
  methods: {
    handleSubmit() {
      const styleLess = removeStyle(this.content);
      this.parsedContent = removeTag(styleLess);
    },
    handleReset() {
      this.content = "";
      this.parsedContent = "";
    },
    handleCopy() {
      document.querySelector("#result").select();
      document.execCommand("copy");
    },
  },
};
</script>

<style lang="less" scoped>
.actions {
  @apply flex mt-4;
  > button {
    @apply mr-4;
  }
}
.textarea {
  height: 200px;
  @apply w-full p-2 block rounded-md border-gray-300 border-2;
}
.button {
  text-transform: uppercase;
  @apply text-white text-base font-medium flex items-center justify-center px-8 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700;
}
.button-sencondary {
  text-transform: uppercase;
  @apply text-white text-base font-medium flex items-center justify-center px-8 py-3 rounded-md bg-gray-600 hover:bg-gray-700;
}
</style>
