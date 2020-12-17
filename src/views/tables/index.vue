<template>
  <div class="app-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="code" label="助贷码" width="150">
      </el-table-column>
      <el-table-column prop="specialTime" label="特殊时间" width="550">
        <template slot-scope="scope">
          <div v-if="scope.row.edit" class="app-comp-special">
            <el-date-picker
              size="mini"
              v-model="specialTime"
              type="datetimerange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
            <el-button
              type="primary"
              size="mini"
              @click="add(scope.row, scope.$index)"
              >添加</el-button
            >
          </div>
          <div>
            <div v-for="item in scope.row.specialTime" :key="item.id">
              {{ item.startTime }}至{{ item.endTime }}
              <el-button
                v-if="scope.row.edit"
                type="primary"
                size="mini"
                @click="delSpecialTime(scope.$index, item.id)"
                >删除</el-button
              >
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="productId" label="产品ID"> </el-table-column>
      <el-table-column prop="type" label="类型变量">
        <template slot-scope="scope">
          <el-select
            v-if="scope.row.edit"
            v-model="scope.row.type.value"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <div v-else>{{ filterType(scope.row.type.value) }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="startTime" label="进件开始时间">
        <template slot-scope="scope">
          <el-time-select
            v-if="scope.row.edit"
            v-model="scope.row.startTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
            placeholder="选择时间"
          >
          </el-time-select>
          <div v-else>{{ scope.row.startTime }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="endTime" label="进件结束时间">
        <template slot-scope="scope">
          <el-time-select
            v-if="scope.row.edit"
            v-model="scope.row.endTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
            placeholder="选择时间"
          >
          </el-time-select>
          <div v-else>{{ scope.row.endTime }}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(scope.row, scope.$index)"
            >确定
          </el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="onEditData(scope.row, scope.$index)"
          >
            编辑
          </el-button>
          <el-button slot="reference" size="small" type="danger"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      specialTime: [],
      tableData: [
        {
          code: "助代码",
          specialTime: [],
          productId: "产品id",
          type: {
            value: "",
            label: "",
          },
          startTime: "",
          endTime: "",
          edit: false,
        },
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
    };
  },
  computed: {
    filterType(value) {
      return (value) => {
        const options = this.options.filter((item) => item.value === value);
        if (options.length) {
          return options[0].label;
        } else {
          return "";
        }
      };
    },
  },
  methods: {
    onEditData(row, index) {
      this.tableData[index].edit = true;
    },
    confirmEdit(row, index) {
      this.tableData[index].edit = false;
    },
    add(row, index) {
      if (this.specialTime.length) {
        this.tableData[index].specialTime.push({
          id: new Date().getTime(),
          startTime: this.specialTime[0],
          endTime: this.specialTime[1],
        });
      }
    },
    delSpecialTime(index, id) {
      this.tableData[index].specialTime = this.tableData[
        index
      ].specialTime.filter((item) => item.id !== id);
    },
  },
};
</script>

<style>
</style>