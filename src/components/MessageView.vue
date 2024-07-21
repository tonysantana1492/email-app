<template>
  <div class="w-full flex rounded-lg bg-white flex-col">
    <div class="border-b">
      <div class="flex items-center justify-between px-1.5 py-0.5">
        <div class="flex">
          <button @click="onBack" class="ml-3">
            <IconComponent
              iconString="back"
              :iconSize="19"
              iconColor="#636363"
              text="Back to inbox"
              hoverColor="hover:bg-gray-100"
            />
          </button>

          <IconComponent
            iconString="trash"
            :iconSize="19"
            iconColor="#636363"
            text="Delete"
            hoverColor="hover:bg-gray-100"
            class="ml-3"
          />
        </div>
        <div class="text-xs text-gray-500">1-50 of 153</div>
      </div>
    </div>

    <div class="w-full flex">
      <img
        class="rounded-full mt-8 mx-5 custom-img w-[40px] h-[40px]"
        :src="email?.from?.avatar"
      />
      <div class="w-full my-4 mx-0.5">
        <div class="font-semibold text-sm mt-4 mb-4">
          <div class="w-full flex justify-between items-center">
            <div>{{ email?.from?.email }}</div>
            <div class="mr-5 text-xs font-normal">
              {{ formatDate(email?.date) }}
            </div>
          </div>
          <span class="text-xs text-gray-500 font-normal">to me</span>
        </div>
        <div>{{ email?.body }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from "vue";
import { formatDate } from "@/utils";
import IconComponent from "./IconComponent.vue";
import users from "@/assets/data.json";
import router from "@/router";

let email = ref({});

const props = defineProps({
  id: String,
});

onMounted(() => {
  const userFound = users.find((email) => email.id == props.id);

  if (!userFound) {
    return router.replace("/");
  }

  email.value = {
    id: userFound.id,
    from: userFound.from,
    subject: userFound.subject,
    date: userFound.date,
    body: userFound.body,
  };
});

const onBack = () => {
  router.go(-1);
};
</script>
