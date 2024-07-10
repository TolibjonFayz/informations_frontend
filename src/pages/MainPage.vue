<template>
  <div class="container">
    <MainHeader />
    <Organamiz />
    <Kontent />
    <Yangimavzu />
    <LastBlogs />
    <Footer />
  </div>
</template>

<script setup>
import MainHeader from "../components/Landing/MainHeader.vue";
import Organamiz from "../components/Landing/Organamiz.vue";
import Yangimavzu from "../components/Landing/Yangimavzu.vue";
import Kontent from "../components/Landing/Kontent.vue";
import LastBlogs from "../components/Landing/LastBlogs.vue";
import Footer from "../components/Landing/Footer.vue";
</script>

<style lang="scss" scoped>
.container {
}
</style>
