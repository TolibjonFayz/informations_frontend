<template>
  <div id="blog" class="flex w-[18%] justify-between flex-col gap-3 p-2">
    <img :src="props.image" alt="Blog image" class="rounded" />
    <div>
      <h1 class="font-['Montserrat'] text-[18px] mb-2">{{ props.name }}</h1>
      <a href="#" class="font-['Montserrat'] text-[15px] font-medium"
        >Ko'proq...</a
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
#blog {
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
