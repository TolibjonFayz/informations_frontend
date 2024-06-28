<template>
  <div
    id="main"
    class="flex justify-between items-center p-16 bg-[#F0F0F0] mb-20"
  >
    <div id="first" class="flex flex-col gap-5">
      <h1 class="text-[20px] font-['Montserrat'] text-[#030303]">
        // O'quvchi fikri...
      </h1>
      <h2 class="text-[35px] font-['Montserrat'] font-medium">
        “Bizning ushbu "Ma'lumotlar" saytdagi maqolalarni o'qishimizdagi har
        daqiqamiz arzirli bo'ldi. Kontent yaxshi o'rganilgan va qiziqarli
        bo'lib, bizni oxirigacha bog'lab turadi.
      </h2>
      <h3 class="font-['Montserrat'] text-[18px]">Eshmatov Falonchi</h3>
    </div>
    <img
      src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
      alt="User image"
      class="w-[30%] h-[30%]"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@media screen and (max-width: 700px) {
  #main {
    flex-direction: column;
    gap: 20px;
  }
  #first {
    h1 {
      font-size: 16px;
    }
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 500px) {
  #main {
    padding: 20px;
  }
  #first {
    h1 {
      font-size: 12px;
    }
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 12px;
    }
  }
}
</style>
