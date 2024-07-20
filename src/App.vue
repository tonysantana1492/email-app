<template>
  <main
    id="app"
    class="bg-gray-50 w-full h-screen bg-[transparent] overflow-hidden flex flex-col text-[#2c3e50] bg-[#f0f2f5]"
  >
    <email-header />
    <div class="flex w-full justify-between">
      <email-sidebar />
      <email-list />
      <email-rightbar />
    </div>
  </main>
</template>

<script setup>
import EmailHeader from "./components/EmailHeader.vue";
import EmailSidebar from "./components/EmailSidebar.vue";
import EmailRightbar from "./components/EmailRightbar.vue";
import EmailList from "./components/EmailList.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
}
</style>
