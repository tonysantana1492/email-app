<template>
  <main id="app">
    <email-view></email-view>
  </main>
</template>

<script setup>
import EmailView from "./components/EmailView.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  height: 100vh;
}
</style>
