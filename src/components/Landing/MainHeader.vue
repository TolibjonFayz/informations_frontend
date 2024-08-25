<template>
  <div class="main mycontainer">
    <div class="flex gap-5 items-center justify-between mt-3">
      <a
        href="/"
        class="text-[32px] font-['Montserrat'] flex items-center font-medium ml-40"
      >
        <img src="../../assets/logo.png" alt="Logo" class="w-12" />
        Ma'lumotlar
      </a>
      <div id="div" class="mr-40 flex">
        <el-input
          v-model="search"
          placeholder="Nima haqida malumot izlayapsiz?"
          class="olmaxon"
        />
        <el-button id="qidirish" type="primary" class="font-['Montserrat']">{{
          $t("search")
        }}</el-button>
        <el-button
          id="kategory"
          type="primary"
          class="text-white border-none font-['Montserrat'] ml-5"
          @click="pusher()"
        >
          Kategoriyalar
        </el-button>

        <div id="language-bar" class="navbar-nav">
          <div style="position: relative">
            <a class="navbar-item" @click="isVisible = !isVisible">
              <div class="link">
                <span class="lang">{{ $t(`${$i18n.locale}`) }}</span>
                <Icon class="icon" icon="uiw:down" width="12" />
              </div>
            </a>
            <div
              v-if="isVisible"
              class="languages__action"
              style="position: absolute"
            >
              <div class="languages__action-item" @click="changeLang('uz')">
                <Icon class="icon" icon="cif:uz" width="18" height="18" />
                <span>O'zbek</span>
              </div>
              <div class="languages__action-item" @click="changeLang('ru')">
                <Icon class="icon" icon="cif:ru" width="18" height="18" />
                <span>Русский</span>
              </div>
              <div class="languages__action-item" @click="changeLang('en')">
                <Icon class="icon" icon="cif:us" width="18" height="18" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hidden for phone -->
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
      >
        Qidirish
      </el-button>
    </div>

    <!-- Search -->
    <div
      id="search"
      v-if="isopen"
      class="w-[250px] transition-transform category text-white absolute top-[55px] right-[381px] h-auto rounded p-3"
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
import router from "../../router/index.js";
import { onMounted, ref, watch } from "vue";
import { useBlogStore } from "../../stores/blog";
import i18n from "@/i18n.js";

const store = useBlogStore();

const search = ref("");
const isopen = ref(false);

const isVisible = ref(false);
window?.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest("#language-bar")) {
    isVisible.value = false;
  }
});

const pusher = () => {
  router.push({ name: "category" });
};

const goSinglePage = async (id) => {
  await router.push(`/blog/${id}`);
};

const changeLang = (lang) => {
  i18n.global.locale = lang;
  document.cookie = `lang=${lang}`;
  isVisible.value = false;
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
.navbar-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
.languages {
  position: relative !important;
  &__action {
    z-index: 101;
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    transition: all 0.3s;
    right: 0%;
    top: 25px;
    border-radius: 4px;
    overflow: hidden;

    &-item {
      display: flex;
      gap: 5px;
      color: var(--text-color);
      padding: 5px 10px;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: #f5f5f5;
        color: var(--primary-color);
      }

      & + .languages__action-item {
        border-top: 1px solid #e5e5e5;
      }
    }
  }
}
</style>
