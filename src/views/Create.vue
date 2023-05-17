<script>
export default {
  data() {
    return {
      formData: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    handleClick(event) {
      if (!this.formData.title) {
        alert("preencha o título do post");
        return;
      }

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

      const newPost = {
        title: this.formData.title,
        content: this.formData.content,
        datetime: dataDaPostagem,
      };

      //emitir o evento create-post
      this.$emit("create-post", newPost);

      this.formData = {
        title: "",
        content: "",
      };

      this.$router.push("/");
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
</template>
