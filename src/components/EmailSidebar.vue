<template>
  <aside class="w-[260px]">
    <div
      class="flex items-center justify-center bg-sky-200 w-36 h-8 mt-2 rounded-2xl ml-2 p-7 cursor-pointer hover:shadow-md"
    >
      <PencilOutlineIcon :size="25" class="mr-2" />
      <span class="text-sm font-bold">Compose</span>
    </div>

    <div class="my-5"></div>

    <button
      class="flex w-[250px] justify-between items-center px-6 py-1.5 bg-blue-100 rounded-r-full"
    >
      <div class="flex items-center">
        <InboxIcon :size="17" />
        <p class="text-sm pl-4 font-bold">Inbox</p>
      </div>
      <p class="text-xs font-bold">3034</p>
    </button>

    <button
      class="flex w-[250px] justify-start px-6 py-1.5 hover:bg-gray-200 hover:rounded-r-full"
    >
      <StarOutlineIcon :size="17" />
      <div class="text-sm pl-4">Starred</div>
    </button>

    <button class="flex w-[250px] justify-start px-6 py-1.5 hover:bg-gray-200 hover:rounded-r-full">
        <ClockOutlineIcon :size="17" />
        <div class="text-sm pl-4">Snoozed</div>
    </button>

    <button class="flex w-[250px] justify-start px-6 py-1.5 hover:bg-gray-200 hover:rounded-r-full">
        <SendOutlineIcon :size="17" />
        <div class="text-sm pl-4">Sent</div>
    </button>

    <button class="flex w-[250px] justify-start px-6 py-1.5 hover:bg-gray-200 hover:rounded-r-full">
        <FileOutlineIcon :size="17" />
        <div class="text-sm pl-4">Drafts</div>
    </button>
  </aside>
</template>

<script setup>
import PencilOutlineIcon from "vue-material-design-icons/PencilOutline.vue";
import InboxIcon from "vue-material-design-icons/Inbox.vue";
import StarOutlineIcon from "vue-material-design-icons/StarOutline.vue";
import ClockOutlineIcon from "vue-material-design-icons/ClockOutline.vue";
import SendOutlineIcon from "vue-material-design-icons/SendOutline.vue";
import FileOutlineIcon from "vue-material-design-icons/FileOutline.vue";
</script>
