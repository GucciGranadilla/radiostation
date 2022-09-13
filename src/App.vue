<template>
<nav>
<button>
    <span class="span1"></span>
    <span class="span1"></span>
    <span class="span1"></span>
</button>
<div id="menu">
    <button>
    <h1>Back</h1>
</button>
    <a><router-link :to="{name: 'home'}">Home</router-link></a>
    <a><router-link :to="{name: 'about'}">About</router-link></a>
    <a><router-link :to="{name: 'live'}">Live</router-link></a>
</div>
</nav>
<main class="page">
<Suspense>
<template #default>
<router-view v-slot="{ Component, route }">
    <transition :enter-active-class="route.meta.enterClass"
                :leave-active-class="route.meta.leaveClass"
                name="fade" mode="out-in">
        <component :is="Component" />
    </transition>
</router-view>
</template>
<template #fallback>
    <div class="fallback">LOADING...</div>
</template>
</Suspense>
</main>
<footer>
    <div>
    <a><router-link :to="{name: 'home'}">Home</router-link></a>
<a><router-link :to="{name: 'about'}">About</router-link></a>
</div>
<div>
<p>Copyright &copy; Kevin Davis</p>
</div>
</footer>
</template>


<script setup>
import { RouterView, RouterLink } from "vue-router";
// import FeaturedMovie from "@/views/Home.vue"
</script>


