<template>
  <div id="main" class="flex px-[160px] mt-20">
    <div id="main-in" class="first w-[50%] flex flex-col justify-between">
      <h1 id="dunyo" class="font-['Montserrat'] text-[52px] font-medium">
        Dunyodagi barcha bilimlarni o'rganamiz!
      </h1>
      <h2 id="boshladik" class="font-['Montserrat'] text-[24px]">
        Boshladikmi 🙂 ?
      </h2>
      <el-button
        id="qidirish"
        type="primary"
        class="text-white px-4 py-2 w-40 mt-10 font-['Montserrat']"
        @click="pushers()"
        >Qidirish</el-button
      >
    </div>
    <div class="second w-[50%] flex justify-center items-center">
      <img
        id="image"
        src="../../assets/firstimg.jpg"
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
const pushers = () => {
  router.push({ name: "search" });
};
</script>

<style lang="scss" scoped>
#qidirish {
  padding: 15px 50px;
}
@media screen and (max-width: 1000px) {
  #main {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media screen and (max-width: 800px) {
  #dunyo {
    font-size: 40px;
  }
  #boshladik {
    font-size: 16px;
  }
  #qidirish {
    font-size: 12px;
  }
}

@media screen and (max-width: 600px) {
  #main-in {
    width: 70%;
  }
  .second {
    width: 30%;
  }
  #dunyo {
    font-size: 30px;
  }
  #boshladik {
    font-size: 14px;
  }
  #qidirish {
    font-size: 12px;
  }
  #image {
    width: 200px;
  }
}
</style>
