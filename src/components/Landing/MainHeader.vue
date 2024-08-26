<template>
  <div class="mycontainer">
    <div class="flex items-center justify-between mt-3">
      <a href="/" class="logotext text-[32px] flex items-center font-medium">
        <img src="../../assets/logo.png" alt="Logo" class="w-12" />
        Ma'lumotlar
      </a>

      <div id="searchdesktop" class="flex gap-1 relative">
        <el-input
          v-model="search"
          :placeholder="$t('squirrelbee')"
          class="searchinput"
        />
        <el-button id="qidirish" type="primary">{{ $t("search") }}</el-button>

        <!-- Search result -->
        <div
          v-if="isopen"
          class="absolute w-[290px] text-white top-[35px] left-[1%]"
        >
          <el-scrollbar height="300px" class="rounded">
            <p
              v-for="item in store.searched"
              :key="item"
              @click="router.push(`/blog/${item?.id}`)"
              class="pl-2 scrollbar-demo-item bg-[#1E90FF] cursor-pointer hover:bg-[#87CEFA] transition-all"
            >
              {{ item.title }}
            </p>
          </el-scrollbar>
        </div>
      </div>

      <div class="flex gap-5">
        <el-button
          class="categorydesktop"
          type="primary"
          @click="router.push({ name: 'category' })"
        >
          <el-icon class="mr-0.5"><Menu /></el-icon>
          {{ $t("categories") }}
        </el-button>

        <!-- Language changing -->
        <div id="language-bar" class="navbar-nav">
          <div style="position: relative">
            <a @click="isVisible = !isVisible">
              <div class="flex items-center gap-1 cursor-pointer">
                <span class="lang">{{ $t(`${$i18n.locale}`) }}</span>
                <el-icon><ArrowDown /></el-icon>
              </div>
            </a>
            <div
              v-if="isVisible"
              class="languages__action"
              style="position: absolute"
            >
              <div class="languages__action-item" @click="changeLang('uz')">
                <span class="fi fi-uz"></span>
                <span>O'zbek</span>
              </div>
              <div class="languages__action-item" @click="changeLang('ru')">
                <span class="fi fi-ru"></span>
                <span>Русский</span>
              </div>
              <div class="languages__action-item" @click="changeLang('en')">
                <span class="fi fi-us"></span>
                <span>Enlish</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile search -->
    <div id="searchmobile" class="gap-1 hidden">
      <div class="relative flex gap-1">
        <el-input
          v-model="search"
          :placeholder="$t('squirrelbee')"
          class="searchinputmobile"
        />
        <el-button id="qidirishmobile" type="primary">
          {{ $t("search") }}
        </el-button>

        <!-- Search result -->
        <div
          v-if="isopen"
          class="absolute w-[290px] text-white top-[35px] left-[0%] searchresultmobile"
        >
          <el-scrollbar height="300px" class="rounded">
            <p
              v-for="item in store.searched"
              :key="item"
              @click="router.push(`/blog/${item?.id}`)"
              class="pl-2 scrollbar-demo-item bg-[#1E90FF] cursor-pointer hover:bg-[#87CEFA] transition-all"
            >
              {{ item.title }}
            </p>
          </el-scrollbar>
        </div>
      </div>
      <el-button
        class="hidden categorymobile"
        type="primary"
        @click="router.push({ name: 'category' })"
      >
        <el-icon class="mr-0.5 cat-icon"><Menu /></el-icon>
        {{ $t("categories") }}
      </el-button>
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
.searchinput {
  width: 300px;
}

.searchinputmobile {
  width: 200px;
}

.navbar-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
.languages {
  position: relative;
  &__action {
    z-index: 101;
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    transition: all 0.3s;
    right: 0%;
    top: 30px;
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

@media (max-width: 900px) {
  #searchdesktop {
    display: none;
  }

  #searchmobile {
    display: flex;
    justify-content: space-between;
  }

  .categorydesktop {
    display: none;
  }
}

@media (max-width: 500px) {
  .logotext {
    font-size: 24px;
  }

  .categorymobile {
    display: inline;
    font-size: 12px;
  }

  #qidirishmobile {
    font-size: 12px;
  }

  .searchresultmobile {
    width: 200px;
  }
}

@media (max-width: 420px) {
  .cat-icon {
    display: none;
  }

  .searchinputmobile,
  .searchresultmobile {
    width: 170px;
  }
}

@media (max-width: 390px) {
  .searchresultmobile,
  .searchinputmobile,
  .categorymobile,
  #qidirishmobile {
    font-size: 11px;
  }
}
</style>
