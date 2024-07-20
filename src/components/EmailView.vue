<template>
  <div class="bg-gray-50 w-full h-full bg-[transparent] overflow-hidden">
    <email-header />
    <div class="flex w-full justify-between">
      <email-sidebar />
      <email-list />
      <email-rightbar />
    </div>
  </div>
</template>

<script setup>
import EmailHeader from "./EmailHeader.vue";
import EmailSidebar from "./EmailSidebar.vue";
import EmailRightbar from "./EmailRightbar.vue";
import EmailList from "./EmailList.vue";
</script>
