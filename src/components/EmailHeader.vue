<template>
  <header class="flex items-center p-2 flex-1">
    <div class="min-w-[250px] flex justify-start items-center">
      <IconComponent
        iconString="menu"
        iconColor="#636363"
        text="Main menu"
        hoverColor="hover:bg-gray-200"
        class="mr-2"
      />
      <img width="107" src="/img/GmailLogo.png" alt="" />
    </div>
    <div class="flex flex-1 justify-between items-center">
      <div
        class="max-w-[700px] w-full bg-[#e1eaf7] flex items-center p-1 px-2 rounded-full"
      >
        <IconComponent
          iconString="magnify"
          iconColor="#636363"
          text="Search"
          hoverColor="hover:bg-gray-300"
        />
        <input
          placeholder="Search mail"
          class="w-full h-10 bg-[transparent] border-transparent border-none focus:ring-0 outline-none placeholder-gray-500"
          type="text"
        />
        <IconComponent
          iconString="tune"
          iconColor="#636363"
          text="Show search options"
          hoverColor="hover:bg-gray-300"
        />
      </div>

      <div class="flex justify-content items-center pr-1">
        <IconComponent
          iconString="cog"
          iconColor="#636363"
          text="Settings"
          hoverColor="hover:bg-gray-200"
        />
        <IconComponent
          iconString="apps"
          iconColor="#636363"
          text="Google apps"
          hoverColor="hover:bg-gray-200"
        />

        <UserComponent />
      </div>
    </div>
  </header>
</template>

<script setup>
import IconComponent from "./IconComponent.vue";
import UserComponent from "./UserComponent.vue";
</script>
