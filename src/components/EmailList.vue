<template>
  <div class="flex w-full h-screen pl-2 pb-20">
    <el-table
      class="w-full rounded-lg"
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
          <span class="font-bold text-gray-900">{{ row.subject }} </span><span class="text-small text-gray-500">- {{ row.body }}</span>
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
      class="text-left"
      :title="currentRow.name"
      :visible.sync="dialogFormVisible"
    >
      <div class="flex justify-start items-center">
        <user-component></user-component>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import UserComponent from "./UserComponent.vue";
import users from "../assets/data.json";

export default {
  components: {
    UserComponent,
  },
  data() {
    return {
      records: users,
      dialogFormVisible: false,
      currentRow: {
        id: undefined,
        importance: 1,
        remark: "",
        timestamp: new Date(),
        title: "",
        type: "",
        status: "published",
      },
    };
  },
  methods: {
    formatter(row) {
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
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      console.log(val.name);
      this.currentRow = val;
      this.dialogFormVisible = true;
    },
  },
};
</script>
