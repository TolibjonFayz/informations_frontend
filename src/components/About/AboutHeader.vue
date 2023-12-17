<template>
  <div id="main" class="flex flex-col ml-20 mt-5 gap-5">
    <a href="/" class="font-['Montserrat'] text-[32px] font-medium"
      >Ma'lumotlar</a
    >
    <h1 class="font-['Montserrat'] text-[#8a8a8a] text-[20px] mt-10">
      <i class="fa-solid fa-globe mr-2"></i>Toshkent, Uzbekistan
    </h1>
    <h2 class="font-['Montserrat'] text-[18px]">
      Bizning saytimizda siz tabiat, fan, tarix va filmlar kabi turli
      mavzulardagi maqolalarimiz haqida ko'proq ma'lumot olishingiz mumkin.
      O'rganing va zavqlaning!
    </h2>
  </div>
  <div class="flex justify-center">
    <img src="../../assets/mainlogo.png" alt="Main logo" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@media screen and (max-width: 550px) {
#main{
  margin-left: 30px;
}
}
</style>
