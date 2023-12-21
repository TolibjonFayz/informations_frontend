<template>
  <div class="exe pb-5">
    <div class="flex gap-5 items-center justify-between mt-3">
      <a
        href="/"
        id="main"
        class="text-[32px] font-['Montserrat'] font-medium ml-40"
      >
        Ma'lumotlar
      </a>
      <div id="div" class="mr-40 flex">
        <el-input
          v-model="search"
          placeholder="Nima haqida malumot izlayapsiz?"
          class="olmaxon"
        />
        <el-button id="qidirish" type="primary" class="font-['Montserrat']"
          >Qidirish</el-button
        >
      </div>
    </div>
    <div class="hidden justify-between items-center ml-5 mr-5 mt-2">
      <el-input
        v-model="search"
        placeholder="Nima haqida malumot izlayapsiz?"
        class="w-60"
      />
      <el-button
        id="qidirish2"
        type="primary"
        class="text-black font-['Montserrat']"
        >Qidirish</el-button
      >
    </div>

    <!-- Search -->
    <div
      id="search"
      v-if="isopen"
      class="w-[250px] scroll-m-1 transition-transform category text-white absolute top-[55px] right-[245px] h-auto rounded p-3"
    >
      <el-scrollbar height="400px" class="">
        <p
          v-for="item in store.searched"
          :key="item"
          @click="goSinglePage(item.id)"
          class="scrollbar-demo-item bg-[#1E90FF] cursor-pointer hover:bg-[#87CEFA] transition-all"
        >
          {{ item.title }}
        </p>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useBlogStore } from "../../stores/blog";
import router from "../../router/index.js";

const store = useBlogStore();
const search = ref("");
const isopen = ref(false);

const goSinglePage = async (id) => {
  await router.push(`/blog/${id}`);
};

onMounted(() => {
  watch(search, (value) => {
    const payload = {
      text: search.value,
    };
    if (value != "") {
      isopen.value = true;
      store.searchBlogs(payload);
    } else {
      isopen.value = false;
    }
  });
});
</script>

<style lang="scss" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
}
.olmaxon {
  width: 250px;
}
#qidirish2 {
  padding: 8px 12px;
  font-size: 12px;
}
#qidirish {
  border: none;
}
#kategory {
  border: none;
}
.exe {
  box-shadow: 1px 2px 3px 0.5px rgb(212, 212, 212);
}
@media screen and (max-width: 1000px) {
  #main {
    font-size: 24px;
    margin-left: 20px;
  }
  #div {
    margin-right: 20px;
  }
  #kategory {
    padding: 8px 12px;
    font-size: 12px;
  }
  #qidirish {
    padding: 8px 12px;
    font-size: 12px;
  }
  #search {
    right: 90px;
  }
}

@media screen and (max-width: 600px) {
  #qidirish {
    display: none;
  }
  .olmaxon {
    display: none;
  }
  .hidden {
    display: flex;
  }
  #search {
    top: 90px;
    right: 220px;
  }
}

@media screen and (max-width: 500px) {
  #search {
    right: 150px;
  }
}

@media screen and (max-width: 435px) {
  #search {
    right: 110px;
    a {
      font-size: 13px;
      padding: 5px;
    }
  }
}

@media screen and (max-width: 400px) {
  #search {
    padding: 5px;
    width: 220px;
    right: 100px;
  }
}

@media screen and (max-width: 360px) {
  #search {
    width: 200px;
    right: 100px;
  }
}

@media screen and (max-width: 340px) {
  #search {
    width: 180px;
    right: 100px;
  }
}

@media screen and (max-width: 320px) {
  #search {
    width: 150px;
    right: 100px;
  }
}

@media screen and (max-width: 290px) {
  #search {
    width: 140px;
    right: 100px;
  }
}
</style>
