<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data(){
    return {
      posts: [
        {
          title:'Meu Primeiro Post',
          datetime: Date.now(),
          content: 'Postar aqui é muito legal',

        },
           {
          title:'Meu Segundo Post',
          datetime: Date.now(),
          content: 'Postar aqui não é tão legal',
            
        }
      ]
    }
  },
  methods: {
    handleClick(event){
      event.stopPropagation()
      // document.querySelector("form").submit()
    }
  }
}



// for(const algumacoisa in posts) {
//   //indice
// }

// for(const algumacoisa of posts) {
//   //valor
// }

</script>

<template>
  
  <div id="lista-posts" >
    <div class="post" v-for="post in posts" :key="post.key">
        <h3>{{ post.title }}</h3>
        <h4>{{ post.datetime}} </h4>
        <p>{{ post.content}}</p>
    </div>
  </div>



  <form action="">
    <input name="title">
    <textarea name="content" id="" cols="30" rows="10"></textarea>

    <button @click="handleClick">Criar2 </button>
  </form>

  <RouterView />
</template>

<style scoped>

form {
  display: flex;
  flex-direction: column;
}

form > * {
  margin: 1rem;
}

</style>
