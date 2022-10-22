<template>
  <div>
    <div style="position: relative">
      <p class="occupied">&nbsp;</p>
      <img src="@/assets/img/wangxiaobo.jpg" alt="王小波" class="inverted" />
      <div id="sentence" fr-fix-stroke="true">
        我相信，总有些人会渴望有趣的事情，讨厌呆板无趣的生活。假如我有什么特殊之处，那就是：这是我对生活主要的要求。
      </div>
      <span id="nameTip">——&nbsp;王小波（1952—1997），中国著名作家</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#alpha-inner img {
  width: 125px;
  height: 166px;
  margin-right: 30px;
  margin-bottom: 30px;
  display: inline-block;
}

#alpha-inner #sentence {
  font-size: 120%;
  margin-top: 35px;
  font-weight: 900;
  position: absolute;
  max-width: 470px;
  top: 5%;
  left: 22%;
}

#alpha-inner #nameTip {
  font-size: 120%;
  position: absolute;
  top: 70%;
  left: 22%;
}
</style>
