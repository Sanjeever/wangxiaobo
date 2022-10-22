<template>
  <div>
    王小波中文站：<router-link to="/app/index">首页</router-link> ->
    {{ pageName }}
    <hr />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    pageName: String,
  },
  mounted() {
    this.pageName;
  },
});
</script>

<style scoped></style>
