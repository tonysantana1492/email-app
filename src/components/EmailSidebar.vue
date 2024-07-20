<template>
  <aside class="w-[260px]">
    <div
      class="flex items-center justify-center bg-sky-200 w-36 h-8 mt-2 rounded-2xl ml-2 p-7 cursor-pointer"
    >
      <PencilOutlineIcon :size="25" class="mr-4" />
      <span class="text-sm">Compose</span>
    </div>

    <div class="my-5"></div>

    <div
      class="flex w-[250px] justify-between items-center px-6 py-1.5 bg-blue-100 rounded-r-full"
    >
      <div class="flex items-center">
        <InboxIcon :size="17" />
        <p class="text-sm pl-4 font-semibold">Inbox</p>
      </div>
      <p class="text-xs font-semibold">3034</p>
    </div>

    <div class="flex w-[250px] justify-between px-6 py-1.5">
      <div class="flex items-center">
        <StarOutlineIcon :size="17" />
        <div class="text-sm pl-4">Starred</div>
      </div>
    </div>

    <div class="flex w-[250px] justify-between px-6 py-1.5">
      <div class="flex items-center">
        <ClockOutlineIcon :size="17" />
        <div class="text-sm pl-4">Snoozed</div>
      </div>
    </div>

    <div class="flex w-[250px] justify-between px-6 py-1.5">
      <div class="flex items-center">
        <SendOutlineIcon :size="17" />
        <div class="text-sm pl-4">Sent</div>
      </div>
    </div>

    <div class="flex w-[250px] justify-between px-6 py-1.5">
      <div class="flex items-center">
        <FileOutlineIcon :size="17" />
        <div class="text-sm pl-4">Drafts</div>
      </div>
    </div>
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
