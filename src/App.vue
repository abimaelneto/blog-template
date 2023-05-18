<script>
import { RouterLink, RouterView } from "vue-router";
import "@/assets/base.css";
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    addPost(newPost) {
      //adicionar o novo post à lista de posts
      this.posts.push(newPost);
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
    <RouterView :posts="posts" @create-post="addPost" />
  </main>
</template>

<style scoped></style>
