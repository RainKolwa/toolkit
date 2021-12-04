<template>
  <div class="page-tag-thanos">
	<div class="thanos-input">
		<textarea v-model="content"></textarea>
		<div class="actions">
			<button @click="handleSubmit">submit</button>
			<button @click="handleReset">reset</button>
		</div>
	</div>
	<div class="thanos-output">
		<textarea v-model="parsedContent" id="result"></textarea>
		<div class="actions">
			<button @click="handleCopy">copy</button>
		</div>
	</div>
  </div>
</template>

<script>
import { removeTag, removeStyle } from '@/utils/html';

export default {
	name: 'TagThanos',
	data() {
		return {
			content: '',
			parsedContent: '',
		}
	},
	methods: {
		handleSubmit() {
			const styleLess = removeStyle(this.content)
			this.parsedContent = removeTag(styleLess)
		},
		handleReset() {
			this.content = '';
			this.parsedContent = '';
		},
		handleCopy() {
			document.querySelector('#result').select()
			document.execCommand('copy')
		},
	}
}
</script>

<style scoped>
textarea {
	width: 100%;
	height: 200px;
}
</style>