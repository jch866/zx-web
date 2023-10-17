
<template>
    <el-table :data="tableData2" style="width: 100%" header-row-class-name="table_header" :border="true"
        :span-method="arraySpanMethod2" :header-cell-style="handerMethod2" :cell-style="cellStyleHandle2">
        <el-table-column prop="name1" label="期限结构" width="200" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="name2" label="类型" width="120" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="zip" label="09-28" width="120">
        </el-table-column>
        <el-table-column prop="zip" label="较上月末" width="120">
        </el-table-column>
        <el-table-column prop="zip" label="较年初" width="120">
        </el-table-column>
    </el-table>
</template>

<script>
import { data3 } from './data'
export default {
  name: 'table3',
  components: {

  },
  data () {
    return {
      tableData2: data3,
      bg1: 'background:#D7E3FD',
      bg2: 'background:#FFF3D9'
    }
  },
  created () {

  },
  methods: {
    arraySpanMethod2 ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return [9, 1]
        }
        if (rowIndex > 0 && rowIndex < 9) {
          return [0, 1]
        }
        if (rowIndex === 9) {
          return [9, 1]
        }
        if (rowIndex > 9 && rowIndex < 18) {
          return [0, 1]
        }
        if (rowIndex === 18) {
          return [9, 1]
        }
        if (rowIndex > 18 && rowIndex < 27) {
          return [0, 1]
        }
      }

      if (rowIndex > 26 && rowIndex < 36) {
        if (columnIndex === 0) {
          return [1, 0]
        }
        if (columnIndex === 1) {
          return [1, 2]
        }
      }
    },
    handerMethod2 ({ row, column, rowIndex, columnIndex }) {
      if ((columnIndex === 1)) {
        return { display: 'none' }
      }
      if ((rowIndex === 0) & (columnIndex === 0)) {
        this.$nextTick(() => {
          document.querySelector(`.${column.id}`).setAttribute('colspan', '2')
        })
      }
    },
    cellStyleHandle2 ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 8 || rowIndex === 17 || rowIndex === 26) {
        if (columnIndex === 1) {
          return this.bg1
        }
        if (columnIndex > 1) {
          return this.bg2
        }
      }
      if (rowIndex > 26 && rowIndex < 36) {
        if (columnIndex > 1) {
          return this.bg2
        }
        if (columnIndex === 1) {
          return this.bg1
        }
      }
    }

  }
}

</script>

<style lang="scss"></style>
