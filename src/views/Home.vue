<template>
<div class="content">
  <section class="hero reveal">
  <div  class="hero-img mb_parallax_container"  id="mb_parallax_one"></div>
  <h1 class="reveal__content">Yuu-gen</h1>
  <!-- <h1>MARRØN</h1> -->
  <p class="reveal__content">There is no strife, no prejudice, no national conflict in outer space as yet. Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain? Why, 35 years ago, fly the Atlantic? Why does Rice play Texas?
We choose to go to the moon.</p>
  <p class="reveal__content">We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
</section>
<section class="main-2h">
  <h2>Featured Events:</h2>
<div class="tabset">
  <!-- Tab 1 -->
  <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked>
  <label for="tab1">Märzen x Vault</label>
  <!-- Tab 2 -->
  <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier">
  <label for="tab2">Rauchbier</label>
  <!-- Tab 3 -->
  <input type="radio" name="tabset" id="tab3" aria-controls="dunkles">
  <label for="tab3">Dunkles Bock</label>
  
  <div class="tab-panels">
    <section id="marzen" class="tab-panel">
      <div class="tab-img-wrp">
      <div class="tab-img"><h1>Hello</h1></div>
      <div class="tab-img-2"><h1>Hello</h1></div>
    </div>
      <h2>6A. Märzen</h2>
      <p><strong><span class="highlight">Overall Impression:</span></strong> An elegant, malty German amber lager with a clean, rich, toasty and bready malt flavor, restrained bitterness, and a dry finish that encourages another drink. The overall malt impression is soft, elegant, and complex, with a rich aftertaste that is never cloying or heavy.</p>
  </section>
    <section id="rauchbier" class="tab-panel">
      <h2>6B. Rauchbier</h2>
      <div class="tab-img"></div>
      <p><strong>Overall Impression:</strong>  An elegant, malty German amber lager with a balanced, complementary beechwood smoke character. Toasty-rich malt in aroma and flavor, restrained bitterness, low to high smoke flavor, clean fermentation profile, and an attenuated finish are characteristic.</p>
    </section>
    <section id="dunkles" class="tab-panel">
      <h2>6C. Dunkles Bock</h2>
      <p><strong>Overall Impression:</strong> A dark, strong, malty German lager beer that emphasizes the malty-rich and somewhat toasty qualities of continental malts without being sweet in the finish.</p>
      <div class="tab-img"></div>
    </section>
  </div>
</div>
</section>
<section class="marq-container">
  <span class="sliding">
    <span>Berlin</span>
    <span>  //  </span>
    <span>Stuttgart</span>
    <span>  //  </span>
    <span>Cape Town</span>
    <span>  //  </span>
    <span>Seo</span>
  </span>
</section>

<section class="main-2-o">
  <h2>Our Team:</h2>
  <Slider></Slider>

</section>

</div>
</template>



<script setup>
const getMovie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800));

}

await getMovie();


</script>



 <script>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  // import HelloWorld from './components/HelloWorld.vue'
  import Slider from '@/components/Slider.vue'
  export default {
    components: {
      Slider
    }
  }
  
  </script>