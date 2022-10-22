<template>
  <div>
    <NormalContent :pageName="pageName">
      <h2>📹 采访视频</h2>
      <p>
        <strong> 前言： </strong>
      </p>
      <p>
        许多人爱王小波，大概是爱他的
        “有趣”，爱他的“毒舌”，爱他写给李银河的俏皮的情话，却少有人爱他的悲悯心。他敦厚而幽默的文字背后，同样是一颗敦敦善诱、开启民智的心。今天是他逝世24
        周年，放眼天下，无处不是他的门下走狗，世间却再无一人能超越他。
      </p>
      <p>2021.4.11</p>

      <iframe
        src="//player.bilibili.com/player.html?aid=92125428&bvid=BV1u7411N77f&cid=157302658&page=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
      </iframe>
    </NormalContent>
  </div>
</template>

<script lang="ts">
import NormalContent from "../../components/NormalContent.vue";
export default defineComponent({
  components: { NormalContent },
  data() {
    return {
      pageName: "采访视频",
    };
  },
  mounted() {},
});
</script>

<style scoped>
iframe {
  width: 100%;
  height: 400px;
}
p {
  text-indent: 2em;
}
</style>
