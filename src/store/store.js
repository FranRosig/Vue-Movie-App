import { createStore } from "vuex";

export default createStore ({
    state: {
        movies: null
    },

    mutations: {
        SET_MOVIES(state, movies) {
            state.movies = movies
        },
        RESET_MOVIES(state) {
            state.movies = null
        }
    },

    actions: {
        setMovies({ commit }, movies) {
            commit("SET_MOVIES", movies)
        },
        resetMovies({ commit }) {
            commit("RESET_MOVIES")
        }
    },

    modules: {

    }
})