<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="component-fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
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
