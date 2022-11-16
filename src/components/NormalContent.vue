<template>
  <div>
    王小波中文站：<router-link to="/app/index">首页</router-link> ->
    {{ pageName }}
    <hr />
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  pageName: { type: String, required: true },
});
</script>

<style scoped></style>
