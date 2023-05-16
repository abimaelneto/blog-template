<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
    return {
      posts: [
        {
          title: "Meu Primeiro Post",
          datetime: Date.now(),
          content: "Postar aqui é muito legal",
        },
        {
          title: "Meu Segundo Post",
          datetime: Date.now(),
          content: "Postar aqui não é tão legal",
        },
      ],
      formData: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    handleClick(event) {
      //adicionar o post à lista de posts
      const now = new Date();

      const dataDaPostagem = `${now.getDate()}/${
        now.getMonth() + 1
      }/${now.getFullYear()}`;

      // //método 1
      // this.posts[this.posts.length] = {
      //   title: this.formData.title,
      //   content: this.formData.content,
      // };

      // //método 2
      this.posts.push({
        title: this.formData.title,
        content: this.formData.content,
        datetime: dataDaPostagem,
      });

      this.formData = {
        title: "",
        content: "",
      };
    },

    handleInputChange(event) {
      const { name, value } = event.target;
      this.formData[name] = value;

      // quando estiver executando, fica assim:
      // this.formData['title'] = "Meu titulo mais legal"
    },
  },
};
</script>

<template>
  <div id="lista-posts">
    <div class="post" v-for="post in posts" :key="post.key">
      <h3>{{ post.title }}</h3>
      <h4>{{ post.datetime }}</h4>
      <p>{{ post.content }}</p>
    </div>
  </div>

  <form>
    <input v-model="formData.title" placeholder="Título" />

    <textarea
      name="content"
      :value="formData.content"
      @keyup="handleInputChange"
      placeholder="Escreva seu post aqui..."
      id=""
      cols="30"
      rows="10"
    ></textarea>

    <button type="button" @click="handleClick">Salvar</button>
  </form>

  <input type="text" placeholder="Qual post você deseja editar?" />

  <RouterView />
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background: orange;
}

form > * {
  margin: 1rem;
}

button {
  color: green;
}
</style>
