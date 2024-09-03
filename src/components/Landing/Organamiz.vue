<template>
  <div id="main" class="mycontainer">
    <div class="left">
      <h1 class="left-title">
        {{ $t("organamiztitle1") }}
        <br />
        <br />
        {{ $t("organamiztitle2") }}
      </h1>

      <h2 class="left-smalltitle">
        {{ $t("organamiztitle3") }}
      </h2>
      <el-button class="left-btn" type="primary" @click="pushers()">
        {{ $t("startsearching") }}
      </el-button>
    </div>
    <div class="right">
      <img class="right-image" src="../../assets/firstimg1.jpg" alt="Library" />
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
#main {
  display: flex;
  margin-top: 50px;
  gap: 50px;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  &-title {
    font-size: 24px;
    font-weight: 500;
  }

  &-btn {
    width: 200px;
  }
}

.right {
  display: flex;
  align-items: center;
  width: 100%;

  &-image {
    border-radius: 5px;
  }
}

@media (max-width: 1000px) {
  .left {
    align-items: center;
    text-align: center;
    margin: 0 5px;
  }
  .right {
    display: none;
  }
}

@media (max-width: 500px) {
  .left {
    &-title {
      font-size: 20px;
    }
  }
}
</style>
