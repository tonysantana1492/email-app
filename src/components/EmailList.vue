<template>
  <div class="flex w-full h-screen pl-2 pb-20">
    <el-table
      class="w-full"
      :data="records"
      ref="singleTable"
      highlight-current-row
      @current-change="handleCurrentChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="" width="180">
        <template slot-scope="{ row }">
          <span class="font-bold text-gray-900">{{ row.from.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="">
        <template slot-scope="{ row }">
          <div class="truncate">
            <span class="font-bold text-gray-900">{{ row.subject }} </span
            ><span class="text-small text-gray-500">- {{ row.body }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label=""
        width="70"
        :formatter="formatter"
      ></el-table-column>
    </el-table>

    <el-dialog
      class="text-left w-full text-xl font-light"
      :title="currentRow.subject"
      :visible.sync="dialogFormVisible"
    >
      <message-view></message-view>
    </el-dialog>
  </div>
</template>

<script setup>
import MessageView from "./MessageView.vue";
import users from "../assets/data.json";
import router from '../router';

const records = users;
let dialogFormVisible = false;
let currentRow = {};

const formatter = (row) => {
  const inputDate = row.date;
  const parts = inputDate.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  const date = new Date(year, month - 1, day);

  const monthName = date.toLocaleString("en-US", { month: "short" });

  const formattedDay = ("0" + day).slice(-2);

  const formattedDate = monthName + " " + formattedDay;

  return formattedDate;
};

const handleCurrentChange = (val) => {
  currentRow = val;
  dialogFormVisible = true;
  router.push('/message/' + val.id)
};
</script>

<style>
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.el-dialog__body {
  padding: 0px 10px;
}
</style>
