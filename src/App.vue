<template>
  <header>

    <router-link to="/">
      <h1><span>Vue</span>Movies</h1>
    </router-link>

    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="What are you looking for?" v-model="search" >
      <input type="submit" value="Search">
    </form>

  </header>

  <main>
    <router-view/>
  </main>

</template>

<script>

import { ref, computed } from 'vue'
import env from "@/env.js"
import store from "./store/store"
import { useStore } from "vuex"

export default {
  setup() {
    const search = ref("");
    const myStore = useStore();
    const movies = computed (() => myStore.state.movies)

    const SearchMovies = () => {
      if (search.value != "") {
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
        .then(response => response.json())
        .then(data => {
          store.dispatch("setMovies", data.Search)
          console.log(movies)
          search.value = "";
        })
      }
    }

    return {
      search,
      SearchMovies,
      movies
    }
  }
}

</script>

<style lang="scss">


* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Avenir, Helvetica, arial, sans-serif";

  &::selection {
    background: transparentize(#42B883, 0.5);
  }

  body {
    background-color: #35495E;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a{
    text-decoration: none;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    background-color: #2C3D4E;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  }

  h1 {
    color:#fff;
    font-size: 28px;

    span {
      color: #42B883;
    }
  }
}
</style>
