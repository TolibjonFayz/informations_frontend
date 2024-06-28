<template>
  <div
    id="blog"
    class="flex justify-between p-5 rounded-xl"
    v-for="(item, index) in props.data"
    :key="index"
  >
    <div class="flex gap-5">
      <img
        :src="item.picture[0].img_url"
        alt="blog img"
        class="w-[20%] rounded"
      />
      <div id="ichki" class="flex flex-col gap-2">
        <h1 class="text-[20px] font-['Montserrat']">Nomi: {{ item.title }}</h1>
        <h2 class="text-[14px] font-['Montserrat']">
          Manba: {{ item.source }}
        </h2>
        <h2 class="text-[14px] font-['Montserrat']">
          Chop etilgan sana: {{ formatDate(item.createdAt) }}
        </h2>
        <h3 class="text-[14px] font-['Montserrat']">
          Kategoriya: {{ item.category.name }}
        </h3>
        <h4 class="text-[14px] font-['Montserrat']">
          <i class="fa-solid fa-eye"></i> {{ item.views }}
        </h4>
      </div>
    </div>
    <div id="ichki-ikki" class="flex flex-col justify-end gap-2">
      <h4 class="text-[16px] font-['Montserrat'] font-medium">
        O'qish vaqti: <b>3 minut</b>
      </h4>
      <el-button
        @click="goSinglePage(item.id)"
        id="qidirish"
        type="primary"
        class="font-['Montserrat']"
        >O'qish...</el-button
      >
    </div>
  </div>
</template>

<script setup>
import router from "../../router/index.js";
const props = defineProps({
  data: {
    type: Object,
  },
});

const goSinglePage = async (id) => {
  await router.push(`/blog/${id}`);
};

function formatDate(dateString) {
  const dateObj = new Date(dateString);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
</script>

<style lang="scss" scoped>
#blog {
  box-shadow: 2px 2px 2px 2px rgb(212, 212, 212);
}

@media screen and (max-width: 600px) {
  #blog {
    flex-direction: column;
    img {
      width: 30%;
    }
  }
}

@media screen and (max-width: 500px) {
  #blog {
    img {
      width: 40%;
    }
  }
  #ichki {
    h1 {
      font-size: 16px;
    }
    h2 {
      font-size: 12px;
    }
    h3 {
      font-size: 12px;
    }
  }
  #ichki-ikki {
    h4 {
      font-size: 12px;
    }
  }
}
</style>
