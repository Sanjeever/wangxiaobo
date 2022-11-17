<template>
  <div>
    <NormalContent :pageName="pageName">
      <h2>💖 图书搜索</h2>
      <p id="typewriter">Everything</p>
      <div style="margin-top: 20px; text-align: center">
        <label>
          <input
            type="text"
            size="30"
            id="keyword"
            v-model="keyword"
            @focus="focus"
            @keyup.enter="toSearch"
          />
          <input
            id="search-btn"
            type="submit"
            value="Search"
            @click="toSearch"
          />
        </label>
      </div>
    </NormalContent>
  </div>
</template>

<script setup lang="ts">
const pageName = "图书搜索";
let keyword = $ref("王小波");
let isOnce = true;

function focus() {
  if (isOnce) {
    keyword = "";
    isOnce = false;
  }
}

function toSearch() {
  if (keyword === "") {
    return;
  } else {
    const url = `https://search.douban.com/book/subject_search?search_text=${keyword}`;
    window.open(url);
  }
}
</script>

<style scoped>
#typewriter {
  display: flex;
  text-align: center;
  font-size: 2rem;
  margin: 0 0 0 37%;
  padding: 0;
  font-family: Terminal, Consolas, serif;
  font-weight: bold;
  width: 1ch;
  overflow: hidden;
  animation: 2s typing steps(10, jump-none) forwards;
}

@keyframes typing {
  from {
    width: 1ch;
  }
  to {
    width: 10ch;
  }
}

#search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
}

#search-btn {
  display: inline-block;
  border: 0;
  border-radius: 10px;
  background: #726c5f;
  color: white;
  font-size: 0.9em;
  font-weight: bold;
  padding: 2px 6px 2px 6px;
  outline: none;
  transition: border-radius 3s;
  -webkit-transition: border-radius 3s;
}

#search-btn:hover {
  margin: 0;
  border-radius: 50px 10px 50px 10px;
}

#keyword {
  padding: 2px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid gray;
  margin-right: 5px;
}
</style>
