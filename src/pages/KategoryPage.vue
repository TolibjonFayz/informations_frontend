<template>
  <CategoryHeader />
  <BoshMenuGa />
  <Top5Blog />
  <ForYou />
  <Footer />
</template>

<script setup>
import CategoryHeader from "../components/Category/CategoryHeader.vue";
import BoshMenuGa from "../components/Category/BoshMenuGa.vue";
import Top5Blog from "../components/Category/Top5Blog.vue";
import ForYou from "../components/Category/ForYou.vue";
import Footer from "../components/Landing/Footer.vue";

import router from "../router/index.js";
window.onbeforeunload = function () {
  console.log("hahaha");
  router.push({ name: "category" });
  console.log("hahahaahhahaha");
};
</script>

<style lang="scss" scoped></style>
