<template>
<div>
    <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
        <slide>
        Slide 1 Content
        </slide>
        <slide>
        Slide 2 Content
        </slide>
    </carousel>
</div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';

        export default {

        components: {
            Carousel,
            Slide
        }

};
</script>