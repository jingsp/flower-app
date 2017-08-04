<template>
	 <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgList" :style="{backgroundImage: 'url(' + item.src + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
    	props: ['imgList'],
        data () {
        	return {
        	}
        },
        created () {           	
        },
        mounted () {
            var swiper = new Swiper('.swiper-container', {
                loop: true,
                speed: 600,
                autoplay: 4000,
                observer: true,
                observeParents: true,
                onTouchEnd: function () {
                    swiper.startAutoplay()
                }
            });
        }
    }
</script>

<style scoped lang="scss">
	 .swiper-container {
        width: 100%;
        height: 7.5rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
</style>
