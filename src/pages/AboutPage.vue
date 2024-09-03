<template>
  <Header />
  <Counts />
  <Fikr />
  <a
    href="/"
    class="flex justify-center items-center text-[16px] cursor-pointer font-['Montserrat'] text-[#737373] mb-10"
  >
    <i class="fa-solid fa-chevron-left mr-1"></i>Bosh menu
  </a>
  <Footer />
</template>

<script setup>
import Header from "../components/Landing/Header.vue";
import Counts from "../components/About/Counts.vue";
import Fikr from "../components/About/Fikr.vue";
import Footer from "../components/Landing/Footer.vue";
</script>

<style lang="scss" scoped></style>
