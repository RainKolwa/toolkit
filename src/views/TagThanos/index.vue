<template>
  <div class="container mx-auto px-4">
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
        <button @click="handleCopy" class="button">{{ copyText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  removeTag,
  removeStyle,
  removeBlankLine,
  trimStart,
} from "@/utils/html";

export default {
  name: "TagThanos",
  data() {
    return {
      content: "",
      parsedContent: "",
      copyText: "copy",
    };
  },
  methods: {
    handleSubmit() {
      let styleLess = removeStyle(this.content);
      let tagLess = removeTag(styleLess);
      let noBlankLine = removeBlankLine(tagLess);
      this.parsedContent = trimStart(noBlankLine);
    },
    handleReset() {
      this.content = "";
      this.parsedContent = "";
    },
    handleCopy() {
      document.querySelector("#result").select();
      document.execCommand("copy");
      this.copyText = "copied";
      setTimeout(() => (this.copyText = "copy"), 1000);
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
