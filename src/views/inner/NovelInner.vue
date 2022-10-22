<template>
  <div>
    <NormalContent :pageName="pageName">
      <h2 class="archive-head">长篇小说</h2>

      <div
        class=".left-edge"
        style="display: inline-block; margin-left: 20%"
      ></div>
      <div class="book-inner">
        <a href="https://book.douban.com/subject/27013746/" target="_blank"
          ><img
            style="margin: 20px 0 0 0; padding: 0"
            src="/img/book/gemingshiqideaiqing.jpg"
            alt="革命时期的爱情"
          />
        </a>

        <p class="book-name">
          <a href="https://book.douban.com/subject/27013746/" target="_blank"
            >革命时期的爱情</a
          >
        </p>
      </div>

      <div class="vertical-separation-m"></div>

      <div class="book-inner">
        <a href="https://book.douban.com/subject/27077957/" target="_blank"
          ><img
            style="margin: 20px 0 0 0; padding: 0"
            src="/img/book/hongfuyeben.jpg"
            alt="红拂夜奔"
          />
        </a>

        <p class="book-name">
          <a href="https://book.douban.com/subject/27077957/" target="_blank"
            >红拂夜奔</a
          >
        </p>
      </div>

      <br />

      <div
        id=".left-edge"
        style="display: inline-block; margin-left: 20%"
      ></div>
      <div class="book-inner">
        <a href="https://book.douban.com/subject/27036978/" target="_blank"
          ><img
            style="margin: 20px 0 0 0; padding: 0"
            src="/img/book/xunzhaowushuang.jpg"
            alt="寻找无双"
          />
        </a>

        <p class="book-name">
          <a href="https://book.douban.com/subject/27036978/" target="_blank"
            >寻找无双</a
          >
        </p>
      </div>

      <div class="vertical-separation-m"></div>

      <div class="book-inner">
        <a href="https://book.douban.com/subject/27143188/" target="_blank"
          ><img
            style="margin: 20px 0 0 0; padding: 0"
            src="/img/book/wanshousi.jpg"
            alt="万寿寺"
          />
        </a>

        <p class="book-name">
          <a href="https://book.douban.com/subject/27143188/" target="_blank"
            >万寿寺</a
          >
        </p>
      </div>
    </NormalContent>
  </div>
</template>

<script lang="ts">
import NormalContent from "../../components/NormalContent.vue";
export default defineComponent({
  components: { NormalContent },
  data() {
    return {
      pageName: "长篇小说",
    };
  },
  mounted() {},
});
</script>

<style scoped>
@import "@/assets/bookcase.css";
</style>
