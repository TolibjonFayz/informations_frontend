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
    <div id="in" class="flex justify-center items-center w-[70%] gap-10">
      <div id="blog" class="flex w-[30%] flex-col gap-5 rounded-xl">
        <img
          src="https://th.bing.com/th/id/OIP.wLrlOoeKg8A1INd9O0zfWwHaFF?rs=1&pid=ImgDetMain"
          alt="squirrel"
          class="rounded-xl"
        />
        <h1 class="ml-5 text-[24px] font-['Montserrat'] font-normal">
          Squirrels
        </h1>
        <h2 class="ml-5 text-[18px] font-['Montserrat']">
          Squirrels are exciting. In the summer, they run around right after the
          sun comes up. In the afternoon, the squirrels go back to their nests.
          They take naps.
        </h2>
        <a href="/" class="mb-5 ml-5 text-[18px] font-medium">Ko'proq...</a>
      </div>

      <div id="blog" class="flex w-[30%] flex-col gap-5 rounded-xl">
        <img
          src="https://th.bing.com/th/id/OIP.wLrlOoeKg8A1INd9O0zfWwHaFF?rs=1&pid=ImgDetMain"
          alt="squirrel"
          class="rounded-xl"
        />
        <h1 class="ml-5 text-[24px] font-['Montserrat'] font-normal">
          Squirrels
        </h1>
        <h2 class="ml-5 text-[18px] font-['Montserrat']">
          Squirrels are exciting. In the summer, they run around right after the
          sun comes up. In the afternoon, the squirrels go back to their nests.
          They take naps.
        </h2>
        <a href="/" class="mb-5 ml-5 text-[18px] font-medium">Ko'proq...</a>
      </div>

      <div id="blog" class="flex w-[30%] flex-col gap-5 rounded-xl">
        <img
          src="https://th.bing.com/th/id/OIP.wLrlOoeKg8A1INd9O0zfWwHaFF?rs=1&pid=ImgDetMain"
          alt="squirrel"
          class="rounded-xl"
        />
        <h1 class="ml-5 text-[24px] font-['Montserrat'] font-normal">
          Squirrels
        </h1>
        <h2 class="ml-5 text-[18px] font-['Montserrat']">
          Squirrels are exciting. In the summer, they run around right after the
          sun comes up. In the afternoon, the squirrels go back to their nests.
          They take naps.
        </h2>
        <a href="/" class="mb-5 ml-5 text-[18px] font-medium">Ko'proq...</a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#blog {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
