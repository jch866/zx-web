
<template>
  <div class="main_box">
    <div class="table_wrap_h3">
      <span class="t_w_h3">产品规模日报</span>
      <!-- <el-button type="primary" size="small" icon="el-icon-share">导出</el-button> -->
    </div>
    <div class="table_wrap">
      <div style="display: flex; justify-content: space-between;">
        <div>
          <el-date-picker v-model="value" type="date" size="small" placeholder="选择日期"
            :key="Math.random()"></el-date-picker>
          <el-button size="small" @click="resetHandler" style="margin-left: 10px;">重置</el-button>
          <el-button size="small" @click="searchHandler">查询</el-button>
        </div>
        <el-button type="primary" size="small" icon="el-icon-share">导出</el-button>
      </div>
      <!-- <search-box @searchFn="searchFn" @resetFn="resetFn" /> -->
      <div class="describe_title mb10">
        <div class="d_title">
          <p class="d_title_header">产品规模日报-概述</p>
        </div>
        <div class="d_items">
          <div class="d_items_type">
            <p class="d_items_header">单位: 亿元</p>
          </div>
        </div>
      </div>
      <!-- <div class="table_wrap_title">
        <span class="t_w_t1">资产规模数据</span>
        <span class="t_w_t2"><el-button size="small" icon="el-icon-setting" slot="reference">列表设置</el-button></span>
      </div> -->
      <!-- :header-row-style="{color:'#333'}"  show-summary :sum-text="'合计'"-->
      <el-table :data="tableData.slice(0, 7)" style="width: 100%" header-row-class-name="table_header" :border="true"
        :span-method="arraySpanMethod" :header-cell-style="handerMethod" :cell-style="cellStyleHandle">

        <el-table-column prop="name1" label="产品数量" width="120">
        </el-table-column>
        <el-table-column prop="name2" label="较上月末" width="120">
        </el-table-column>
        <el-table-column prop="name3" label="较年初" width="120">
        </el-table-column>
        <el-table-column prop="zip" label="产品数量" width="120" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="zip" label="09-28" width="120">
        </el-table-column>
        <el-table-column prop="zip" label="较上月末" width="120">
        </el-table-column>
        <el-table-column prop="zip" label="较年初" width="120">
        </el-table-column>
      </el-table>
      <!-- 分隔 -->
      <setDetail @setTable="setTableShow"/>
      <Component :is="this.comMap[this.activeIndex]" />
    </div>
  </div>
</template>
<!-- getSpan: function getSpan(row, column, rowIndex, columnIndex) {
  var rowspan = 1;
  var colspan = 1;
  var fn = this.table.spanMethod;
  if (typeof fn === 'function') {
    var result = fn({
      row: row,
      column: column,
      rowIndex: rowIndex,
      columnIndex: columnIndex
    });
    if (Array.isArray(result)) {
      rowspan = result[0];
      colspan = result[1];
    } else if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
      rowspan = result.rowspan;
      colspan = result.colspan;
    }
  }
  return { rowspan: rowspan, colspan: colspan };
}, -->
<script>
import setDetail from './../components/setDetail'
import { data1, data2 } from './data'
import table1 from './table1.vue'
import table2 from './table2.vue'
import table3 from './table3.vue'
export default {
  name: 'report4',
  components: {
    setDetail, table1, table2, table3
  },
  data () {
    return {
      value1: '',
      value: '',
      alldata: [],
      tableData: data1,
      tableData2: data2,
      bg1: 'background:#D7E3FD',
      bg2: 'background:#FFF3D9',
      activeIndex: 0,
      comMap: { 0: 'table1', 1: 'table2', 2: 'table3' }
    }
  },
  created () {

  },
  methods: {
    setTableShow (index) {
      this.activeIndex = index
    },
    handerMethod ({ row, column, rowIndex, columnIndex }) {
      if ((columnIndex === 1) | (columnIndex === 2)) {
        return { display: 'none' }
      }
      // 第二步， 由于1、2列没有了，后续列就会贴上来（后续列往左错位问题）
      if ((rowIndex === 0) & (columnIndex === 0)) {
        // 解决后续列错位问题，就是将隐去的第1、2列的位置再补上，通过第0列来补
        this.$nextTick(() => {
          // 原来第0列只占据一个位置，现在要去占据三个位置。即占据三列，即设置为横向三个单元格
          document.querySelector(`.${column.id}`).setAttribute('colspan', '3')
          // 这里的column.id实际是dom元素的class，故用点.不用井#，可审查dom验证
          // 通过设置原生的colspan属性，让原来的第一列只占据一个单元格的表头占据3个单元格即可
        })
      }
    },

    searchFn () {
      console.log('searchFn')
    },
    resetFn () {
      console.log('resetFn')
    },
    // 表格合并的方法
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const array = [1, 2, 3, 4]
        if (rowIndex === 0) {
          return [5, 1]
        }
        if (array.includes(rowIndex)) {
          return [0, 1]
        }
        // 如果写else会对在columnIndex === 0 情况下的其它行产生影响
      }
      if (columnIndex === 1) {
        if (rowIndex === 0 || rowIndex === 2) {
          return [2, 1]
        }
        if (rowIndex === 1 || rowIndex === 3) {
          return [0, 1]
        }
      }
      if (columnIndex === 1) {
        if (rowIndex === 4) {
          return [1, 2]
        }
      }
      if (columnIndex === 2) {
        if (rowIndex === 4) {
          return [1, 0]
        }
      }
      // 二选一
      // if (columnIndex === 0) {
      //   if (rowIndex === 5) {
      //     return [1, 3]
      //   }
      // }
      // if (columnIndex === 1) {
      //   if (rowIndex === 5) {
      //     return [1, 0]
      //   }
      // }
      // if (columnIndex === 2) {
      //   if (rowIndex === 5) {
      //     return [1, 0]
      //   }
      // }

      // 二选一
      if (rowIndex === 5 || rowIndex === 6) {
        if (columnIndex === 0) {
          return [1, 3]
        }
        if (columnIndex === 1 || columnIndex === 2) {
          return [1, 0]
        }
      }
    },
    // 控制单元格样式的方法
    cellStyleHandle ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 4) {
        if (columnIndex === 1) {
          return this.bg1
        }
        if (columnIndex > 2) {
          return this.bg2
        }
      }
      if (rowIndex === 6) {
        if (columnIndex === 0) {
          return this.bg1
        }
        if (columnIndex > 2) {
          return this.bg2
        }
      }
    },
    getSummaries (param) { },
    resetHandler () { },
    searchHandler () { }

  }
}

</script>

<style lang="scss">
//  .el-table .cell.el-tooltip {
//     white-space: nowrap;
//   }
//   // 不换行
//   .el-table .cell {
//     word-break: keep-all !important;
//     white-space: nowrap !important;
//   }
.mb10 {
  margin-bottom: 10px;
}

.main_box {
  padding: 10px;
  // height: 40px;
  // line-height: 40px;

  h4 {
    font-size: 15px;
    font-weight: bold;
  }
}

.table_wrap {
  background-color: white;
  padding: 15px;

  .table_wrap_title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
    margin-bottom: 5px;

    .t_w_t1 {
      font-size: 16px;
      font-weight: bold;
    }

    .t_w_t2 {
      font-size: 12px;
    }
  }
}

.table_wrap_h3 {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 40px;
  line-height: 40px;
  margin-bottom: 5px;

  .t_w_h3 {
    font-size: 15px;
    font-weight: bold;
  }
}

.table_header {
  color: #333;
}

.describe_title {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  line-height: 26px;
  padding: 15px 0;
  margin-top: 10px;
  background-color: #f4f7fa;

  .d_title_header {
    font-size: 16px;
    font-weight: bold;
  }

  .d_items {
    display: flex;
    align-items: center;

  }

  .d_items_con {}

  .d_items_type {
    padding: 0 20px;
  }

  .d_items_header {
    color: #bdbdbd;
  }

  .d_items_con1 {
    color: #bdbdbd;
  }

}
</style>
