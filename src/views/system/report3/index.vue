
<template>
  <div class="main_box">
    <div class="table_wrap_h3">
      <span class="t_w_h3">分⾏表外资产负债表</span>
      <!-- <el-button type="primary" size="small" icon="el-icon-share">导出</el-button> -->
    </div>
    <div class="table_wrap">
      <search-box @searchFn="searchFn" @resetFn="resetFn" />
      <div class="describe_title">
        <div class="d_title">
          <p class="d_title_header">分行表外资产负债表</p>
          <p class="d_items_con1">编制单位：⻓三⻆/上海分⾏ 报表类型：⽉报 统计⽇期: 2023/04/17 - 2023/05/20</p>
        </div>
        <div class="d_items">
          <div class="d_items_type">
            <p class="d_items_header">报表类型</p>
            <p class="d_items_con">月报</p>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="d_items_type">
            <p class="d_items_header">统计日期</p>
            <p class="d_items_con">2023/04/17 - 2023/05/20 </p>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="d_items_type">
            <p class="d_items_header">单位</p>
            <p class="d_items_con">万元</p>
          </div>
        </div>
      </div>
      <div>
        <span>图表类型 </span>
        <el-select v-model="value1" placeholder="销售归属" size="small" class="ml20">
          <el-option label="分行资产规模前十" value="1"></el-option>
          <el-option label="分行产品规模前十" value="2"></el-option>
          <el-option label="分行资产负债对比" value="3"></el-option>
        </el-select>
        <span> 排序方式 </span>
        <el-select v-model="value" placeholder="销售归属" size="small" class="ml20">
          <el-option label="初期存量" value="1"></el-option>
          <el-option label="新增规模" value="2"></el-option>
          <el-option label="到期规模" value="3"></el-option>
          <el-option label="净增规模" value="4"></el-option>
          <el-option label="期末存量" value="5"></el-option>
        </el-select>
      </div>
      <echarts-demo v-if="false" />
      <div style="display: flex;">
        <echarts-demo2 />
        <echarts-demo4 />

      </div>
      <div class="chart-more">
        <div class="chart-more-icon">
          <i class="el-icon-d-arrow-left" style="transform: rotate(-90deg);"></i>
        </div>
      </div>

      <div class="table_wrap_title">
        <span class="t_w_t1">资产规模数据</span>
        <span class="t_w_t2">
          <listingSet />
        </span>
      </div>
      <!-- :header-row-style="{color:'#333'}" -->
      <el-table :data="tableData" style="width: 100%" header-row-class-name="table_header" :span-method="arraySpanMethod"
        :border="true" show-summary :sum-text="'资产合计'" :summary-method="getSummaries">

        <el-table-column prop="name1" label="资产一分类" width="100" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="name2" label="资产二分类" width="100" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column label="资产规模数据(万元)">
          <el-table-column prop="zip" label="期初存量" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="投放到期" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="净投放" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="期间均值" width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column label="加权平均期限(年)">
          <el-table-column prop="zip" label="期初存量" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column label="加权平均收益率">
          <el-table-column prop="zip" label="期初存量" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column label="加权平均收益率(期限)">
          <el-table-column prop="zip" label="期初存量" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="120">
          </el-table-column>
        </el-table-column>
      </el-table>
      <!-- 分隔 -->
      <div class="table_wrap_title">
        <span class="t_w_t1">产品规模数据</span>
      </div>
      <el-table :data="tableData" style="width: 100%" header-row-class-name="table_header" :span-method="arraySpanMethod"
        :border="true">
        <el-table-column prop="name1" label="公司六大赛道" width="100" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="name2" label="三分类" width="100" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column label="产品规模数据(万元)">
          <el-table-column prop="zip" label="期初存量" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="投放到期" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="净投放" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="期间均值" width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column label="加权平均期限(年)">
          <el-table-column prop="zip" label="期初存量" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column label="加权平均收益率">
          <el-table-column prop="zip" label="期初存量" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column label="加权平均收益率(期限)">
          <el-table-column prop="zip" label="期初存量" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="120">
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import searchBox from './../components/searchBox'
import echartsDemo from './../components/echartsDemo.vue'
import echartsDemo2 from './../components/echartsDemo2.vue'
import echartsDemo3 from './../components/echartsDemo3.vue'
import echartsDemo4 from './../components/echartsDemo4.vue'
import listingSet from './../components/listingSet.vue'
export default {
  name: 'report3',
  components: {
    searchBox,
    echartsDemo,
    echartsDemo2,
    echartsDemo3,
    echartsDemo4,
    listingSet
  },
  data() {
    return {
      value1: '',
      value: '',
      alldata: [],
      tableData: [{
        name1: '货币市场工具类资产',
        name2: '信用债',
        name3: '长三角',
        name4: '货币市场⼯具类资产',
        name5: '活期存款类',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '信用债',
        name3: '长三角',
        name4: '货币市场⼯具类资产',
        name5: '定期存款类(含⼤额存单)',
        zip: '1,999.00'
      }, {
        name1: '债权类资产',
        name2: '信用债',
        name3: '长三角',
        name4: '债权类资产',
        name5: '信⽤债',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '资产⽀持证券',
        name3: '长三角',
        name4: '债权类资产',
        name5: '资产⽀持证券',
        zip: '1,999.00'
      }, {
        name1: '项目类资产',
        name2: '企业债权性资产',
        name3: '长三角',
        name4: '项⽬类资产',
        name5: '企业债权性资产',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '资产市场债权性资产',
        name3: '长三角',
        // name4: '项⽬类资产2',
        name5: '资产市场债权性资产',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '资产市场投资性资产',
        name3: '长三角',
        // name4: '项⽬类资产3',
        name5: '资产市场投资性资产',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '股权类资产',
        name3: '长三角',
        // name4: '项⽬类资产4',
        name5: '股权类资产',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '同业债权性资产',
        name3: '长三角',
        // name4: '项⽬类资产5',
        name5: '同业债权性资产',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '资产⽀持证券类⾮标资产',
        name3: '长三角',
        // name4: '项⽬类资产6',
        name5: '资产⽀持证券类⾮标资产',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '公募REITS',
        name3: '长三角',
        // name4: '项⽬类资产7',
        name5: '公募REITS',
        zip: '1,999.00'
      }]
    }
  },
  created() {

  },
  methods: {
    handerMethod({ row, column, rowIndex, columnIndex }) {

    },
    searchFn() {
      console.log('searchFn')
    },
    resetFn() {
      console.log('resetFn')
    },
    // 表格合并的方法
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      const len = this.tableData.length
      let _row = 0
      let _col = 0
      if (columnIndex === 0) {
        if (rowIndex < 4) {
          if (rowIndex % 2 === 0) {
            _row = 2
            _col = 1
          } else {
            _row = 0
            _col = 1
          }
          return {
            rowspan: _row,
            colspan: _col
          }
        } else {
          if (rowIndex === 4) {
            _row = len - 4
            _col = 1
          } else {
            _row = 0
            _col = 1
          }
          return {
            rowspan: _row,
            colspan: _col
          }
        }
      }
    },
    getSummaries(param) { }
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

.chart-more {
  border-top: 1px solid #dbdfe6;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  .chart-more-icon {
    border: 1px solid #dbdfe6;
    border-top: none;
    border-radius: 0 0 5px 5px;
    width: 63px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    cursor: pointer;
    background-color: #f8f8f8;
  }
}
</style>
