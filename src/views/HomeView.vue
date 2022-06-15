<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt3896198">
        <img src="https://images8.alphacoders.com/617/617965.jpg" 
        alt=""
        class="featured-img">
        <div class="detail">
          <h3>Guardians of the Galaxy Vol. 2</h3>
          <p>The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.</p>
        </div>
      </router-link>
    </div>

    <div class="movies-list" v-if="movies">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
        <div class="product-image">
          <img :src="movie.Poster" alt="Movie Poster" />
          <div class="type">{{movie.Type}}</div>
        </div>
        <div class="detail">
          <p class="year">{{movie.Year}}</p>
          <h3>{{movie.Title}}</h3>
        </div>
        </router-link>
      </div>
    </div>

    <div v-else >
      <h3 class="selection-h3">Nuestra selección para ti...</h3>
      <div class="lowerSection">
        <my-carousel :selectionMovies="selectionMovies"></my-carousel>
        <div class="asd">
          <img src="https://hipertextual.com/wp-content/uploads/2019/05/hipertextual-avengers-endgame-actriz-que-tuvo-que-regrabar-todas-sus-escenas-2019426659.jpg" alt="">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {computed} from "vue"
import {useStore} from "vuex"
import selection from "../selection"
import MyCarousel from "../Carousel/MyCarousel.vue"

  export default {
    components: { MyCarousel },
    setup() {
      const myStore = useStore();
      const movies = computed (() => myStore.state.movies)
      const selectionMovies = selection

      return {
        movies,
        selectionMovies
      }
    }

  }
</script>

<style lang="scss">

.lowerSection {
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  gap: 15px;
}

.asd {
  background-color: red;
  width: auto;
  height: 100%;

}

.asd img {
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
}

.selection-h3 {
  color: white;
  padding: 15px;
}

.home{

  max-width: 1300px;
  width: 100%;

  .feature-card {
    position: relative;

    .featured-img {
      display: block;
      width: 100%;
      height: 400px;
      object-fit: cover;
      object-position: top;

      position: relative;
      z-index:0
    }

    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index:1;

      h3{
        color: white;
        margin-bottom: 16px;
      }

      p {
        color:white;
        font-family: "Avenir, Helvetica, arial, sans-serif";
      }
    }
  }

  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    align-items: center;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 100%;
        color: white;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #f3f3f3;
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #42B883;
        padding: 16px;
        border-radius: 8px;
        color: white;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;

        &:active {
          background-color: #3B8070;
        }
      }
    }
  }

  .movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;

    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;

      .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;
        
        .product-image {
          position: relative;
          display: block;

          img {
            display: block;
            width: 100%;
            height: 275px;
            object-fit: cover;
          }

          .type {
            position: absolute;
            padding: 8px 16px;
            background-color: #42B883;
            color: white;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }

        .detail {
          background-color: #496583;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;

          .year {
            color: #AAA;
            font-size: 14px;
          }

          h3 {
            color: white;
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
  }
}
  
</style>
