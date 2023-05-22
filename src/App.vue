<script>
import { RouterLink, RouterView } from "vue-router";
import "@/assets/base.css";
export default {
  data() {
    return {
      posts: [
        {
          title: "Meu primeiro Post",
          datetime: "18/5/2023",
          content: "Conteúdo magnífico, estupendo e supimpa.",
        },
        {
          title: "Meu Segundo Post",
          datetime: "18/5/2023",
          content: "Conteúdo magnífico, estupendo e supimpa.",
        },
        {
          title: "Meu Terceiro Post",
          datetime: "1/5/2023",
          content: "Olá, sou um exemplo!",
        },
      ],
    };
  },
  methods: {
    addPost(newPost) {
      //adicionar o novo post à lista de posts
      this.posts.push(newPost);
    },
    updatePost(updatedPost, id) {
      this.posts[id] = updatedPost;
    },
    removePost(id) {
      //como remover um post do array this.posts
      const minhaNovaLista = [];

      for (const index in this.posts) {
        if (index == id) {
          continue;
        }
        const post = this.posts[index];
        minhaNovaLista.push(post);
      }
      this.posts = minhaNovaLista;
    },
  },
};
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/create">Novo Post</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView
      :posts="posts"
      @create-post="addPost"
      @edit-post="updatePost"
      @delete-post="removePost"
    />
  </main>
</template>

<style scoped></style>
