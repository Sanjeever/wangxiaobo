<template>
  <div>
    <NormalContent :pageName="pageName">
      <h2 class="archive-head">非小说作品</h2>

      <div class="book-inner">
        <a href="https://book.douban.com/subject/27013708/" target="_blank"
          ><img
            style="margin: 20px 0 0 0; padding: 0"
            src="/img/book/yizhiteliduxingdezhu.jpg"
            alt="一只特立独行的猪"
          />
        </a>

        <p class="book-name" style="font-size: 0.9em">
          <a href="https://book.douban.com/subject/27013708/" target="_blank"
            >一只特立独行的猪</a
          >
        </p>
      </div>

      <div class="vertical-separation-m"></div>

      <div class="book-inner">
        <a href="https://book.douban.com/subject/27013716/" target="_blank"
          ><img
            style="margin: 20px 0 0 0; padding: 0"
            src="/img/book/chenmodedaduoshu.jpg"
            alt="沉默的大多数"
          />
        </a>

        <p class="book-name">
          <a href="https://book.douban.com/subject/27013716/" target="_blank"
            >沉默的大多数</a
          >
        </p>
      </div>

      <div class="vertical-separation-m"></div>

      <div class="book-inner">
        <a href="https://book.douban.com/subject/27156834/" target="_blank"
          ><img
            style="margin: 20px 0 0 0; padding: 0"
            src="/img/book/wodejingshenjiayuan.jpg"
            alt="我的精神家园"
          />
        </a>

        <p class="book-name">
          <a href="https://book.douban.com/subject/30180681/" target="_blank"
            >我的阴阳两界</a
          >
        </p>
      </div>

      <br />

      <div id="left-edge" style="display: inline-block; margin-left: 20%"></div>
      <div class="book-inner">
        <a href="https://book.douban.com/subject/27111096/" target="_blank"
          ><img
            style="margin: 20px 0 0 0; padding: 0"
            src="/img/book/ainijiuxiangaishengming.jpg"
            alt="爱你就像爱生命"
          />
        </a>

        <p class="book-name">
          <a href="https://book.douban.com/subject/27111096/" target="_blank"
            >爱你就像爱生命</a
          >
        </p>
      </div>

      <div class="vertical-separation-m"></div>

      <div class="book-inner">
        <a href="https://book.douban.com/subject/30296222/" target="_blank"
          ><img
            style="margin: 20px 0 0 0; padding: 0"
            src="/img/book/heitieshidai.jpg"
            alt="黑铁时代"
          />
        </a>

        <p class="book-name">
          <a href="https://book.douban.com/subject/30296222/" target="_blank"
            >黑铁时代</a
          >
        </p>
      </div>

      <div class="vertical-separation-m"></div>
    </NormalContent>
  </div>
</template>

<script lang="ts">
import NormalContent from "../../components/NormalContent.vue";
export default defineComponent({
  components: { NormalContent },
  data() {
    return {
      pageName: "非小说作品",
    };
  },
  mounted() {},
});
</script>

<style scoped>
@import "@/assets/bookcase.css";
</style>
