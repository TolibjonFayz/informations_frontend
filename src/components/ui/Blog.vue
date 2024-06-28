<template>
  <div id="blog" class="flex w-[18%] justify-between flex-col gap-3 p-2">
    <img :src="props.image" alt="Blog image" class="rounded" loading="lazy" />
    <div>
      <h1 class="font-['Montserrat'] text-[18px] mb-2">{{ props.name }}</h1>
      <a
        @click="goSinglePage(props.id)"
        class="font-['Montserrat'] text-[15px] font-medium cursor-pointer hover:text-[#999]"
        >Ko'proq...</a
      >
    </div>
  </div>
</template>

<script setup>
import router from "../../router/index.js";

const goSinglePage = async (id) => {
  await router.push(`/blog/${id}`);
};
const props = defineProps({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  id: {
    type: Number,
  },
});
</script>

<style lang="scss" scoped>
#blog {
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

#blog:hover {
  transform: scale(1.05);
  transition: ease-in-out 0.3s;
}
@media screen and (max-width: 860px) {
  #blog {
    width: 30%;
  }
}

@media screen and (max-width: 520px) {
  #blog {
    width: 45%;
  }
}
</style>
