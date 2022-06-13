import { createStore } from "vuex";

export default createStore ({
    state: {
        movies: null
    },

    mutations: {
        SET_MOVIES(state, movies) {
            state.movies = movies
        }
    },

    actions: {
        setMovies({ commit }, movies) {
            commit("SET_MOVIES", movies)
        }
    },

    modules: {

    }
})