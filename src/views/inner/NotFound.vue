<template>
  <div>
    <NormalContent :pageName="pageName">
      <h2>未知页面</h2>
      <p><strong>你似乎来到了没有知识存在的荒原。</strong></p>
      <p>{{ time }} 秒后自动跳转至首页</p>

      <div class="pyro">
        <div class="before"></div>
        <div class="after"></div>
      </div>
    </NormalContent>
  </div>
</template>

<script setup lang="ts">
const pageName = "未知页";
let time = $ref(5);
const router = useRouter();
onMounted(() => {
  setInterval(() => {
    time--;
  }, 1000);
  const canvas = document.createElement("canvas");
  canvas.style.cssText = `
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
        pointer-events: none;
    `;
  document.body.appendChild(canvas);
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  const p = { x: 0, y: 0, r: 50 };
  const render = () => {
    context.beginPath();
    context.clearRect(0, 0, canvas.width, canvas.height);
    const radial = context.createRadialGradient(
      p.x,
      p.y,
      p.r,
      p.x,
      p.y,
      p.r * 3
    );
    radial.addColorStop(0, "rgba(255,255,255,0)");
    radial.addColorStop(1, "rgba(0,0,0,0.5)");
    context.fillStyle = radial;
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
  render();
  document.addEventListener("mousemove", (event) => {
    p.x = event.clientX;
    p.y = event.clientY;
    render();
  });
});

watch(() => time, (newTime) => {
  if (newTime === 0) {
    document.body.removeChild(document.querySelectorAll("canvas")[0]);
    router.push("/app/index");
  }
});
</script>

<style lang="scss" scoped>
// see : https://codepen.io/yshlin/pen/WNMmQX
$particles: 50;
$width: 500;
$height: 500;

// Create the explosion...
$box-shadow: ();
$box-shadow2: ();
@for $i from 0 through $particles {
  $box-shadow: $box-shadow,
    random($width)-$width /
      2 +
      px
      random($height)-$height /
      1.2 +
      px
      hsl(random(360), 100, 50);
  $box-shadow2: $box-shadow2, 0 0 #fff;
}
@mixin keyframes($animationName) {
  @-webkit-keyframes #{$animationName} {
    @content;
  }

  @-moz-keyframes #{$animationName} {
    @content;
  }

  @-o-keyframes #{$animationName} {
    @content;
  }

  @-ms-keyframes #{$animationName} {
    @content;
  }

  @keyframes #{$animationName} {
    @content;
  }
}

@mixin animation-delay($settings) {
  -moz-animation-delay: $settings;
  -webkit-animation-delay: $settings;
  -o-animation-delay: $settings;
  -ms-animation-delay: $settings;
  animation-delay: $settings;
}

@mixin animation-duration($settings) {
  -moz-animation-duration: $settings;
  -webkit-animation-duration: $settings;
  -o-animation-duration: $settings;
  -ms-animation-duration: $settings;
  animation-duration: $settings;
}

@mixin animation($settings) {
  -moz-animation: $settings;
  -webkit-animation: $settings;
  -o-animation: $settings;
  -ms-animation: $settings;
  animation: $settings;
}

@mixin transform($settings) {
  transform: $settings;
  -moz-transform: $settings;
  -webkit-transform: $settings;
  -o-transform: $settings;
  -ms-transform: $settings;
}

.pyro > .before,
.pyro > .after {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: $box-shadow2;
  @include animation(
    (
      1s bang ease-out infinite backwards,
      1s gravity ease-in infinite backwards,
      5s position linear infinite backwards
    )
  );
}

.pyro > .after {
  @include animation-delay((1.25s, 1.25s, 1.25s));
  @include animation-duration((1.25s, 1.25s, 6.25s));
}

@include keyframes(bang) {
  to {
    box-shadow: $box-shadow;
  }
}

@include keyframes(gravity) {
  to {
    @include transform(translateY(200px));
    opacity: 0;
  }
}

@include keyframes(position) {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
</style>
