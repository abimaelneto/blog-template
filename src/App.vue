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
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/create">Novo Post</RouterLink>

  <RouterView :posts="posts" @create-post="addPost" />
</template>

<style scoped></style>
