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
    <RouterView :posts="posts" @create-post="addPost" @edit-post="updatePost" />
  </main>
</template>

<style scoped></style>
