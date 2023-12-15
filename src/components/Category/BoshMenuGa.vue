<template>
  <div id="main" class="flex flex-col mt-10 ml-10">
    <h1 class="text-[16px]">
      <i class="fa-solid fa-chevron-left mr-1"></i>Bosh menu
    </h1>
    <h2 class="text-[20px] mt-3 font-['Montserrat'] font-medium">
      Kategoriyalar
    </h2>
    <div id="div" class="flex w-full flex-wrap justify-between mt-3 pr-5">
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../ui/Button.vue";
</script>

<style lang="scss" scoped>
#main {
  h1 {
    color: #737373;
  }
}

@media screen and (max-width: 500px) {
#main{
  margin-left: 20px;
}
#div{
  margin-left: -15px;
}
}
</style>
