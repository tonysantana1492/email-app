<template>
  <div
    id="SingleMessageSection"
    class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm"
  >
    <div class="w-full flex">
      <img class="rounded-full mt-8 mx-5 custom-img" :src="email.from.avatar" />
      <div class="w-full my-4 mx-0.5">
        <div class="font-semibold text-sm mt-4 mb-4">
          <div class="w-full flex justify-between items-center">
            <div>{{ email.from.email }}</div>
            <div class="mr-5 text-xs font-normal">
              {{ formatDate(email.date) }}
            </div>
          </div>
          <span class="text-xs text-gray-500 font-normal">to me</span>
        </div>
        <div>{{ email.body }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { formatDate } from "@/utils";

let email = ref({});

onMounted(async () => {
  email.value = {
    id: 1,
    from: {
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    subject: "Meeting Tomorrow",
    date: "2024-07-19T10:30:00Z",
    body: "Hey John,\n\nJust a reminder about our meeting tomorrow at 10:00 AM. Please be on time.\n\nBest regards,\nJane",
  };
});
</script>

<style setup>
#SingleMessageSection {
  .custom-img {
    width: 40px;
    height: 40px;
  }
}
</style>
