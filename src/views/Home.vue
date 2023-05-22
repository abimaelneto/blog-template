<script>
import { RouterLink } from "vue-router";
export default {
  props: {
    posts: Array,
  },
  data() {
    return {
      search: "",
      showModal: false,
      selectedPost: null,
    };
  },
  computed: {
    filteredPosts() {
      // se search estiver vazio, retorne a lista completa de posts
      if (!this.search) return this.posts;

      //se tiver qualquer coisa em search, faz o filtro
      const listaFiltrada = [];

      for (const post of this.posts) {
        if (post.title.includes(this.search)) {
          listaFiltrada.push(post);
        }
      }

      return listaFiltrada;
    },
  },
  methods: {
    getPostId(title) {
      // passa pela lista de posts(não filtrada)
      for (const index in this.posts) {
        //acessa o post na posição index da lista de posts
        const post = this.posts[index];
        //verifica se o título do post atual é igual ao título buscado
        if (post.title === title) return index;
      }
    },
    setupModal(id) {
      // mostrar e esconder o modal
      this.showModal = !this.showModal;

      // selecionar o post e desselecionar o post
      if (id) {
        // salva o post inteiro(com título, conteúdo e data)
        this.selectedPost = this.posts[id];
        return;
      }

      this.selectedPost = null;
    },
    deletePost() {
      const id = this.getPostId(this.selectedPost.title);
      this.$emit("delete-post", id);

      //feche o modal e desselecione o post
      this.setupModal();
    },
  },
};
</script>

<template>
  <input v-model="search" placeholder="Procure pelo título do post..." />
  <div id="lista-posts">
    <div class="post" v-for="post in filteredPosts" :key="post.key">
      <h3>
        {{ post.title }}
        <RouterLink :to="`/edit/${getPostId(post.title)}`">
          <span class="material-symbols-rounded">edit</span>
        </RouterLink>
        <span
          class="material-symbols-rounded"
          @click="setupModal(getPostId(post.title))"
          >delete</span
        >
      </h3>
      <h4>{{ post.datetime }}</h4>
      <p>{{ post.content }}</p>
    </div>
  </div>

  <div class="modal" v-show="showModal">
    <div class="modal-content">
      <h3>Deletar Post</h3>
      <p>Tem certeza que quer deletar o post '{{ selectedPost?.title }}' ?</p>

      <div class="modal-actions">
        <button class="bg-error" @click="setupModal">Cancelar</button>
        <button class="bg-success" @click="deletePost">Confirmar</button>
      </div>
    </div>
  </div>
</template>
