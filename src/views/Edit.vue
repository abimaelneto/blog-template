<script>
import PostForm from "@/components/PostForm.vue";

export default {
  props: {
    posts: Array,
  },
  data() {
    //acessa o parâmetro id uma única vez
    const id = this.$route.params.id;

    return {
      //expondo a variável id para ser acessível no template
      id: id,
      post: this.posts[id],
    };
  },
  components: {
    PostForm,
  },
};
</script>

<template>
  <PostForm :post="post" :id="id" />
</template>
