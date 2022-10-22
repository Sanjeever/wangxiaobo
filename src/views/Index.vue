<template>
  <div>
    <OuterFrame>
      <router-view v-slot="{ Component }">
        <transition name="component-fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>

      <hr />
      <p style="margin: 10px 20px; text-align: center">
        [<router-link to="/app/biography">生平事迹</router-link>]
        [<router-link to="/app/interview-video">采访视频</router-link>]
        [<router-link to="/app/stories">短篇小说</router-link>]
        [<router-link to="/app/novel">长篇小说</router-link>]
        [<router-link to="/app/nonfiction">非小说作品</router-link>]
        [<router-link to="/app/reviews">相关评论</router-link>]
        [<router-link to="/app/with-programming">王小波和编程</router-link>]
        <br />
        &amp;
        <br />
        [<router-link to="/app/search">图书搜索</router-link>]
        [<router-link to="/" class="rss_link"></router-link>]
        [<router-link to="/app/contact">联系方式</router-link>]
        [<router-link to="/app/about">关于本站</router-link>]
        [<router-link to="/app/message-board">留言板</router-link>]
        [<a href="https://wangxiaobo-chinese-site-introduce.vercel.app/" target="_blank">一些介绍</a>]
        [<a href="https://www.sakuras.cyou/" target="_blank">作者的 Blog</a>]
      </p>
      <hr style="margin-bottom: 40px" />
    </OuterFrame>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OuterFrame from "../components/OuterFrame.vue";
import IndexInner from "./inner/IndexInner.vue";

export default defineComponent({
  components: { OuterFrame, IndexInner },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
});
</script>

<style scoped>
.rss_link::after{
  content:'RSS 订阅';
}

.rss_link:hover::after{
  content:'暂未开发';
}

div {
  position: relative;
  width: 100%;
  margin: 0 auto 0 auto;
  padding: 0;
  text-align: left;
  max-width: 1024px;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease-in;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
