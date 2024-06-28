<template>
  <div id="main" class="flex mt-28 ml-40 mr-40 mb-10">
    <div id="first" class="flex flex-col w-[60%] gap-5">
      <h1 class="text-[42px] font-['Montserrat'] font-medium">
        Hamma uchun tanlangan kontent
      </h1>
      <h3 class="text-[20px] font-['Montserrat']">
        Siz fan ixlosmandimisiz yoki tarixga qiziqasizmi, bizda sizning
        qiziqishlaringizga mos maqolalar mavjud. Bizning jamoamiz noyob va
        qiziqarli kontentni taqdim etish uchun astoydil ishlaydi.
      </h3>
      <el-button
        @click="pusher()"
        id="kashf"
        type="primary"
        class="font-['Montserrat'] mt-8 w-52"
        >Kashf qilishni boshlang</el-button
      >
    </div>
    <div class="second w-[50%] flex justify-center items-center">
      <img
        id="second"
        src="../../assets/kontent.jpg"
        alt="Library"
        class="w-80 rounded ml-20"
      />
    </div>
  </div>
</template>

<script setup>
import router from "../../router/index.js";
const pusher = () => {
  router.push({ name: "category" });
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1000px) {
  #main {
    margin-left: 50px;
    margin-right: 50px;
  }
}

@media screen and (max-width: 600px) {
  #first {
    h1 {
      font-size: 20px;
    }
    h3 {
      font-size: 12px;
    }
    #kashf {
      width: 150px;
      font-size: 11px;
    }
  }
}
</style>
