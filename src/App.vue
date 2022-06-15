<template>
  <header>
    <div>

    <router-link to="/" @click="resetMovies">
      <h1><span>Vue</span>Movies</h1>
    </router-link>

    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="What are you looking for?" v-model="search" >
      <input type="submit" value="Search">
    </form>
    </div>

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
        fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
        .then(response => response.json())
        .then(data => {
          store.dispatch("setMovies", data.Search)
          console.log(movies)
          search.value = "";
        })
      }
    }

    const resetMovies = () => {
      store.dispatch("resetMovies")
    }

    return {
      search,
      SearchMovies,
      movies,
      resetMovies,
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
    background-color: #141414;
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
    width: 100vw;
    padding: 10px 16px;
    background-color: #141414;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
  }

  header div {
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .search-box {
    display: flex;
    justify-content: center;
    padding: 16px;
    align-items: center;
    max-width: 400px;
    width: 100%;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 70%;
        color: #141414;
        background-color: white;
        font-size: 16px;
        padding: 10px 16px;
        border-radius: 8px 0px 0px 8px;
        transition: 0.4s;

        &::placeholder {
          color: #141414;
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"] {
        width: 30%;
        max-width: 900px;
        background-color: #42B883;
        padding: 10px;
        border-radius: 0px 8px 8px 0px;
        color: white;
        font-size: 16px;
        text-transform: uppercase;
        transition: 0.4s;

        &:active {
          background-color: #3B8070;
        }
      }
    }
  }

  h1 {
    color:#fff;
    font-size: 28px;

    span {
      color: #42B883;
    }
  }
}

@media screen {
  @media (min-width: 768px) {
    * header div {
      justify-content: space-between;
    }
  }
}

</style>
