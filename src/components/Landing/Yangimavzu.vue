<template>
  <div class="main mt-40 mb-5 flex flex-col items-center text-center gap-10">
    <div class="texts">
      <h1 class="font-['Montserrat'] text-[42px] font-medium">
        Yangi mavzularni kashf qiling
      </h1>
      <h2 class="font-['Montserrat'] text-[20px]">
        Bizning keng qamrovli maqolalar to'plamimiz bilan yangi bilim oling.
      </h2>
    </div>
    <img src="../../assets/yangibook.jpg" alt="Books" class="w-80 rounded" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .texts {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 15px;
    }
  }
}
</style>
