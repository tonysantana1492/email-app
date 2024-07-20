<template>
  <div class="m-4">
    <div class="w-6 h-6 flex justify-center mb-7">
      <img class="object-center" src="img/GoogleCalendar.png" alt="" />
    </div>

    <div class="w-6 h-6 flex justify-center mb-7">
      <img class="object-center" src="img/GoogleKeep.png" alt="" />
    </div>

    <div class="w-6 h-6 flex justify-center mb-7">
      <img class="object-center" src="img/GoogleTasks.png" alt="" />
    </div>

    <div class="w-6 h-6 flex justify-center mb-7">
      <img class="object-center" src="img/GoogleContacts.png" alt="" />
    </div>

    <div class="w-6 flex mb-7 border border-gray-300" />

    <div class="w-6 h-6 flex justify-center mb-7">
      <PlusIcon />
    </div>
  </div>
</template>

<script setup>
import PlusIcon from "vue-material-design-icons/Plus.vue";
</script>
