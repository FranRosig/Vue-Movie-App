<template>
    <div class="carousel">
        <div class="carousel-inner">
            <carousel-item 
            v-for="(movie, index) in selectionMovies" 
            :key="index" 
            :movie="movie"
            :currentSlide="currentSlide"
            :index="index">
            </carousel-item>
        </div>
    </div>
</template>

<script>
    import CarouselItem from "./CarouselItem.vue"

    export default {
        props: ["selectionMovies"],
        components: { CarouselItem },
        data: () => ({
            currentSlide: 0,
            slideInterval: null
        }),
        methods: {
            setCurrentSlide(index) {
                this.currentSlide = index
            }
        },
        mounted() {
            this.slideInterval = setInterval(() => {
                const index = this.currentSlide < this.selectionMovies.length - 1 ? this.currentSlide + 1 : 0;
                this.setCurrentSlide(index)
            }, 3000)
        },
        beforeUnmount(){
            clearInterval(this.slideInterval)
        }
    }
</script>

<style scoped>

    .carousel {
        display: flex;
        justify-content:flex-start;
    }

    .carousel-inner {
        position: relative;
        width: 300px;
        height: 400px;
        overflow: hidden;
    }

</style>