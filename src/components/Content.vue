<template>
  <div>
    王小波中文站：<router-link to="/app/index">首页</router-link> ->
    {{ pageName }}
    <hr />
    <component :is="source"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    pageName: String,
    source: String,
  },
  mounted() {
    this.pageName;
    this.source;
  },
});
</script>

<style>
.markdown-body img {
  width: 100%;
  height: auto;
  display: inline-block;
}

.markdown-body a {
  transition: all 0.2s;
}
</style>
