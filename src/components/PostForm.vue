<script>
export default {
  props: {
    post: Object,
    id: String,
  },
  data() {
    return {
      formData: {
        title: this.post?.title || "",
        content: this.post?.content || "",
      },
      isEditing: Boolean(this.post),
    };
  },
  methods: {
    handleCreatePost(event) {
      if (!this.formData.title) {
        alert("preencha o título do post");
        return;
      }

      //adicionar o post à lista de posts
      const now = new Date();

      const dataDaPostagem = `${now.getDate()}/${
        now.getMonth() + 1
      }/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

      // //método 1
      // this.posts[this.posts.length] = {
      //   title: this.formData.title,
      //   content: this.formData.content,
      // };

      const postData = {
        title: this.formData.title,
        content: this.formData.content,
        datetime: dataDaPostagem,
      };

      if (this.isEditing) {
        this.$emit("edit-post", postData, this.id);
      } else {
        this.$emit("create-post", postData);
      }

      // this.formData = {
      //   title: "",
      //   content: "",
      // };

      this.$router.push("/");
    },
  },
};
</script>

<template>
  {{ id }}
  <form>
    <input v-model="formData.title" placeholder="Título" />

    <textarea
      v-model="formData.content"
      placeholder="Escreva seu post aqui..."
      cols="30"
      rows="10"
    ></textarea>

    <button type="button" @click="handleCreatePost">Salvar</button>
  </form>
</template>
