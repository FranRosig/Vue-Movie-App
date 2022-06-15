<template>
  <div class="movie-detail">
    <img :src="movie.Poster" class="featured-image">
    <div>
      <h2>{{movie.Title}}</h2>
      <p>{{movie.Year}}</p>
      <p>{{movie.Plot}}</p>
    </div>
  </div>
</template>

<script>
import {ref, onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';
import env from '@/env.js'

export default {
    setup() {
        const movie = ref({});
        const route = useRoute();

        onBeforeMount(()=>{
            fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
            .then(response => response.json())
            .then(data => {
                movie.value = data;
            })
        });

        return {
            movie
        }
    }
}
</script>

<style lang="scss">

.movie-detail {
    padding: 16px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;

    h2 {
        color: white;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 16px;
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .featured-image {
        text-align: center;
        display: block;
        max-width: 300px;
        margin-bottom: 16px;
    }

    p {
        color: white;
        font-size: 18px;
        line-height: 1.4;
        text-align: center;
        margin-bottom: 16px;
    }
}
</style>