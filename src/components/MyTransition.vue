<!-- MyTransition.vue -->
<script>
// JavaScript 钩子逻辑...
export default {
  name: "MyTransition",
};
</script>

<template>
  <!-- 包装内置的 Transition 组件 -->
  <Transition name="fade">
    <slot></slot>
    <!-- 向内传递插槽内容 -->
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
