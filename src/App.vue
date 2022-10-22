<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import MyTransition from "./components/MyTransition.vue";
</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <MyTransition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </MyTransition>
    </router-view>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div {
  width: 100vw;
}
</style>
