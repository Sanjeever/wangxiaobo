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
          autocomplete="no"
          type="text"
          id="username"
          v-model="messageForm.username"
        />
        <p><label for="content">内容</label></p>
        <textarea
          placeholder="Speak out freely..."
          id="content"
          cols="20"
          rows="5"
          v-model="messageForm.content"
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
        <p v-html="message.content"></p>
      </div>
    </NormalContent>
  </div>
</template>

<script lang="ts">
import NormalContent from "../../components/NormalContent.vue";
import moment from "moment";
const initialMessageForm = {
  username: "",
  content: "",
  createTime: moment().format("YYYY 年 M 月 D 日 H:mm:ss"),
};
export default defineComponent({
  components: { NormalContent },
  created() {
    const messageListJson = window.localStorage.getItem("messageList");
    if (messageListJson) {
      this.messageList = JSON.parse(messageListJson);
    }
  },
  data() {
    return {
      pageName: "留言板",
      messageList: [
        {
          id: 1,
          username: "Sanjeev",
          content:
            "希望大家开心 😏 <br/> emoji : <a href='https://gist.github.com/rxaviers/7360908' target='_blank'>Complete list of github markdown emoji markup</a>",
          createTime: "2022 年 10 月 22 日 16:04:45",
          isShow: true,
        },
      ],
      messageForm: {
        id: -1,
        username: "",
        content: "",
        createTime: "",
        isShow: true,
      },
      nextID: 0,
    };
  },
  computed: {
    filteredMessageList() {
      return this.messageList.filter((item) => item.isShow);
    },
  },
  methods: {
    updateStorageState() {
      window.localStorage.setItem(
        "messageList",
        JSON.stringify(this.messageList)
      );
    },
    addMessage() {
      if (this.messageForm.username === "" || this.messageForm.content === "") {
        return;
      }
      this.messageForm.id = this.messageList.length + 1;
      this.messageForm.createTime = moment().format(
        "YYYY 年 M 月 D 日 H:mm:ss"
      );
      this.messageList.unshift({ ...this.messageForm });
      this.messageForm.content = "";
      this.updateStorageState();
    },
    deleteMessage(id: number) {
      for (let i = 0; i < this.messageList.length; i++) {
        if (this.messageList[i].id === id) {
          this.messageList[i].isShow = false;
        }
      }
      this.updateStorageState();
    },
    cleanStorageState() {
      window.localStorage.removeItem("messageList");
      this.$router.go(0);
    },
  },
});
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
}

.deleteButton {
  float: right;
}
</style>
