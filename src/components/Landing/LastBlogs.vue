<template>
  <div id="main" class="flex flex-col items-center mt-20 mb-10 ml-10 mr-10">
    <h1 id="oxirgi" class="text-[52px] font-medium font-['Montserrat']">
      Oxirgi bloglar
    </h1>
    <h5
      id="more"
      class="text-[24px] font-['Montserrat'] text-center mb-10 w-[90%]"
    >
      Haqiqiy hayot voqealarini aks ettiruvchi qiziqarli maqolalar to'plami.
      Ilm-fan, tarix va tabiat bizning dunyomizni qanday shakllantirishini bilib
      oling.
    </h5>
    <div
      v-loading="loading"
      id="in"
      class="flex justify-center items-center w-[70%] gap-10"
    >
      <div
        v-for="(item, index) in result"
        :key="index"
        id="blog"
        class="flex w-[30%] flex-col gap-5 rounded-xl"
      >
        <img :src="item.picture[0].img_url" alt="squirrel" class="rounded-xl" />
        <h1 class="ml-5 text-[24px] font-['Montserrat'] font-normal">
          {{ item.title }}
        </h1>
        <h2 class="ml-5 text-[18px] font-['Montserrat']">
          {{ item.body.slice(0, 150) }}
        </h2>
        <h1
          @click="goSinglePage(item.id)"
          class="mb-5 ml-5 text-[18px] font-medium cursor-pointer"
        >
          Ko'proq...
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useBlogStore } from "../../stores/blog";
import router from "../../router/index.js";

const loading = ref("false");
const goSinglePage = async (id) => {
  await router.push(`/blog/${id}`);
};

const store = useBlogStore();

function getLatestRecords(data) {
  let counter = 0;
  const latestRecords = [];

  for (let i = data?.length - 1; i >= 0; i--) {
    latestRecords.push(data[i]);
    counter++;
    if (counter === 3) {
      break;
    }
  }
  return latestRecords;
}

const result = ref("");
onMounted(async () => {
  loading.value = true;
  const res = await store.getBlogs();
  result.value = getLatestRecords(res);
  loading.value = false;
});
</script>

<style lang="scss" scoped>
#blog {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
#blog:hover {
  transform: scale(1.05);
  transition: ease-in-out 0.3s;
}
@media screen and (max-width: 800px) {
  #main {
    margin-left: 0px;
    margin-right: 0px;
  }
  #oxirgi {
    font-size: 35px;
  }
  #more {
    font-size: 18px;
  }
  #in {
    width: 90%;
  }
}

@media screen and (max-width: 700px) {
  #in {
    flex-direction: column;
  }
  #blog {
    width: 70%;
  }
}
</style>
