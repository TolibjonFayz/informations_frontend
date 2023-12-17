<template>
  <div id="main" class="flex justify-around items-center text-center flex-wrap mb-14">
    <h1 class="p-5">
      50+
      <h2>Chop etilgan bloglar</h2>
    </h1>

    <h1 class="p-5">
      1
      <h2>Oylik tajriba</h2>
    </h1>

    <h1 class="p-5">
      500+
      <h2>Barcha vaqt o'qishlar soni</h2>
    </h1>

    <h1 class="p-5">
      3+
      <h2>Mamnun o'quvchilar</h2>
    </h1>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#main {
  h1 {
    font-size: 48px;
    font-family: "Montserrat";
    h2 {
      font-size: 20px;
      color: #393939;
    }
  }
}

@media screen and (max-width: 550px) {
  #main {
    h1 {
      font-size: 35px;
      font-family: "Montserrat";
      h2 {
        font-size: 18px;
        color: #393939;
      }
    }
  }
}
</style>
