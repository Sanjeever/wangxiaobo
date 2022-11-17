<template>
  <div>
    <NormalContent :pageName="pageName">
      <h2>留言板</h2>
      <p>畅所欲言，在此。</p>
      <button @click="cleanStorageState">重置留言板状态</button>
      <hr />
      <form @submit.prevent="addMessage">
        <p><label for="username">用户名</label></p>
        <input
          placeholder="Your name will keep anonymous"
          autocomplete="off"
          type="text"
          id="username"
          v-model="messageForm.username"
        />
        <p><label for="content">内容</label></p>
        <textarea
          placeholder="Speak out freely..."
          autocomplete="off"
          id="content"
          cols="20"
          rows="5"
          v-model="messageForm.content"
          @keyup.enter="addMessage"
        ></textarea>
        <button type="submit">留言</button>
      </form>
      <div
        class="messagePost"
        v-for="message in filteredMessageList"
        :key="message.id"
      >
        <p>
          <strong>{{ message.id }} 楼 </strong>
          <span
            ><a @click="deleteMessage(message.id)" class="deleteButton"
              >删除</a
            ></span
          >
        </p>
        <p>{{ message.username }} 在 {{ message.createTime }} 时说：</p>
        <p class="messageContent" v-html="message.content"></p>
      </div>
    </NormalContent>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
const router = useRouter();
const pageName = "留言板";
let messageList = $ref([
  {
    id: 1,
    username: "Sanjeev",
    content:
      "希望大家开心 😏 <br/> emoji : <a href='https://gist.github.com/rxaviers/7360908' target='_blank'>Complete list of github markdown emoji markup</a>",
    createTime: "2022 年 10 月 22 日 16:04:45",
    isShow: true,
  },
]);
const filteredMessageList = computed(() => {
  return messageList.filter((item) => item.isShow);
});

const messageForm = $ref({
  id: -1,
  username: "",
  content: "",
  createTime: "",
  isShow: true,
});

onBeforeMount(() => {
  const messageListJson = window.localStorage.getItem("messageList");
  console.log(messageListJson);
  if (messageListJson) {
    messageList = JSON.parse(messageListJson);
  }
  console.log(messageList);
});

function updateStorageState() {
  window.localStorage.setItem("messageList", JSON.stringify(messageList));
}

function addMessage() {
  if (messageForm.username === "" || messageForm.content === "") {
    return;
  }
  messageForm.id = messageList.length + 1;
  messageForm.username = messageForm.username.trim();
  messageForm.content = messageForm.content.trim();
  messageForm.createTime = moment().format("YYYY 年 M 月 D 日 H:mm:ss");
  messageList.unshift({ ...messageForm });
  messageForm.content = "";
  updateStorageState();
}

function deleteMessage(id: number) {
  for (let i = 0; i < messageList.length; i++) {
    if (messageList[i].id === id) {
      messageList[i].isShow = false;
    }
  }
  updateStorageState();
}

function cleanStorageState() {
  window.localStorage.removeItem("messageList");
  router.go(0);
}
</script>

<style scoped>
p {
  margin: 10px 0;
}
form {
  display: grid;
}

form textarea {
  resize: none;
}
.messagePost {
  border: 1px solid gray;
  border-radius: 10px;
  margin: 20px auto;
  padding-left: 20px;
  padding-right: 20px;
}

input {
  height: 20px;
  border-radius: 10px;
  border: 1px solid gray;
}

button {
  border: 1px solid gray;
  border-radius: 10px;
  background: #726c5f;
  color: white;
  font-size: 0.9em;
  font-weight: bold;
  transition: border-radius 3s;
}

button:hover {
  border-radius: 50px 10px 50px 10px;
}
textarea {
  border-radius: 10px;
  border: 1px solid gray;
  margin-bottom: 10px;
}

.deleteButton {
  float: right;
}

.messageContent {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
</style>
