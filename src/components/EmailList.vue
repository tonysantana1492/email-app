<template>
  <el-table
    class="w-[100px]"
    :data="records"
    highlight-current-row
    height="100%"
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
      :formatter="formatShortDate"
    ></el-table-column>
  </el-table>
</template>

<script setup>
import users from "../assets/data.json";
import router from "../router";
import { formatShortDate } from "@/utils";

const records = users;

const handleCurrentChange = (val) => {
  router.push("/message/" + val.id);
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

.cell {
  cursor: pointer;
}
</style>
