
<template>
  <div class="main_box">
    <div class="table_wrap_h3">
      <span class="t_w_h3">分⾏表外资产负债表</span><el-button type="primary" size="small" icon="el-icon-share">导出</el-button>
    </div>
    <div class="table_wrap">
      <search-box @searchFn="searchFn" @resetFn="resetFn"/>
      <div class="table_wrap_title">
        <span class="t_w_t1">资产规模数据</span><span class="t_w_t2">编制单位：⻓三⻆/上海分⾏ 报表类型：⽉报 统计⽇期：2023/04/17 － 2023/05/20</span>
      </div>
      <!-- :header-row-style="{color:'#333'}" -->
      <el-table :data="tableData" style="width: 100%" header-row-class-name="table_header" :span-method="arraySpanMethod">
        <el-table-column prop="name1" label="分行名称" width="150">
        </el-table-column>
        <el-table-column prop="name2" label="分行梯队" width="150">
        </el-table-column>
        <el-table-column prop="name3" label="分行大区" width="150">
        </el-table-column>
        <el-table-column prop="name4" label="公司六⼤赛道" width="150">
        </el-table-column>
        <el-table-column prop="name5" label="三分类" width="150">
        </el-table-column>
        <el-table-column label="资产规模数据(万元)">
          <el-table-column prop="zip" label="期初存量" width="150">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="150">
          </el-table-column>
          <el-table-column prop="zip" label="投放到期" width="150">
          </el-table-column>
          <el-table-column prop="zip" label="净投放" width="150">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="150">
          </el-table-column>
        </el-table-column>

      </el-table>
      <!-- 分隔 -->
      <div class="table_wrap_title">
        <span class="t_w_t1">产品规模数据</span>
      </div>
      <el-table :data="tableData" style="width: 100%" header-row-class-name="table_header" :span-method="arraySpanMethod">
        <el-table-column prop="name1" label="分行名称" width="150">
        </el-table-column>
        <el-table-column prop="name2" label="分行梯队" width="150">
        </el-table-column>
        <el-table-column prop="name3" label="分行大区" width="150">
        </el-table-column>
        <el-table-column prop="name4" label="公司六⼤赛道" width="150">
        </el-table-column>
        <el-table-column prop="name5" label="三分类" width="150">
        </el-table-column>
        <el-table-column label="资产规模数据(万元)">
          <el-table-column prop="zip" label="期初存量" width="150">
          </el-table-column>
          <el-table-column prop="zip" label="认/申购" width="150">
          </el-table-column>
          <el-table-column prop="zip" label="赎回/到期" width="150">
          </el-table-column>
          <el-table-column prop="zip" label="净认/申购" width="150">
          </el-table-column>
          <el-table-column prop="zip" label="期末存量" width="150">
          </el-table-column>
          <el-table-column prop="zip" label="期间均值" width="150">
          </el-table-column>
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script>
import searchBox from './components/searchBox'
export default {
  name: 'report1',
  components: {
    searchBox
  },
  data () {
    return {
      alldata: [],
      tableData: [{
        name1: '上海分行',
        name2: '梯队名称',
        name3: '长三角',
        name4: '货币市场⼯具类资产',
        name5: '活期存款类',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '梯队名称',
        name3: '长三角',
        name4: '货币市场⼯具类资产',
        name5: '定期存款类(含⼤额存单)',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '梯队名称',
        name3: '长三角',
        name4: '债权类资产',
        name5: '信⽤债',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '梯队名称',
        name3: '长三角',
        name4: '债权类资产',
        name5: '资产⽀持证券',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '梯队名称',
        name3: '长三角',
        name4: '项⽬类资产',
        name5: '企业债权性资产',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '梯队名称',
        name3: '长三角',
        // name4: '项⽬类资产2',
        name5: '资产市场债权性资产',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '梯队名称',
        name3: '长三角',
        // name4: '项⽬类资产3',
        name5: '资产市场投资性资产',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '梯队名称',
        name3: '长三角',
        // name4: '项⽬类资产4',
        name5: '股权类资产',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '梯队名称',
        name3: '长三角',
        // name4: '项⽬类资产5',
        name5: '同业债权性资产',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '梯队名称',
        name3: '长三角',
        // name4: '项⽬类资产6',
        name5: '资产⽀持证券类⾮标资产',
        zip: '1,999.00'
      }, {
        name1: '上海分行',
        name2: '梯队名称',
        name3: '长三角',
        // name4: '项⽬类资产7',
        name5: '公募REITS',
        zip: '1,999.00'
      }]
    }
  },
  created () {

  },
  methods: {
    searchFn(){
      console.log('searchFn')
    },
    resetFn(){
      console.log('resetFn')
    },
    // 表格合并的方法
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      const len = this.tableData.length
      let _row = 0
      let _col = 0
      // 前三列
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2) {
        if (rowIndex % len === 0) {
          _row = len
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

      if (columnIndex === 3) {
        if (rowIndex === 0 || rowIndex === 1) {
          if (rowIndex === 0) {
            _row = 2
            _col = 1
          } else {
            _row = 0
            _col = 0
          }
          return {
            rowspan: _row,
            colspan: _col
          }
        }
        if (rowIndex === 2 || rowIndex === 3) {
          if (rowIndex === 2) {
            _row = 2
            _col = 1
          } else {
            _row = 0
            _col = 0
          }
          return {
            rowspan: _row,
            colspan: _col
          }
        }
        if (rowIndex > 3) {
          if (rowIndex === 4) {
            _row = len - 4
            _col = 1
          } else {
            _row = 0
            _col = 0
          }
          return {
            rowspan: _row,
            colspan: _col
          }
        }
      }
    }
  }
}

</script>

<style lang="scss">
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
</style>
