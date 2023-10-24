
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
      <div class="table_wrap_title">
        <span class="t_w_t1">资产规模数据</span>
        <span class="t_w_t2">
          <listingSet :filterData="filterData" @showChange="showChange" />
        </span>
      </div>
      <!-- :header-row-style="{color:'#333'}" -->
      <el-table :data="tableData" style="width: 100%" header-row-class-name="table_header" :span-method="arraySpanMethod"
        :border="true" show-summary :sum-text="'资产合计'" :summary-method="getSummaries" ref="multipleTable">
        <!-- <template v-for="(item,index) in tableCol">
          if(!item.prop&&item.children.length>0){

          }
          <el-table-column prop="name1" label="资产一分类" width="100" :show-overflow-tooltip="true">
        </el-table-column>
        </template> -->
        <el-table-column prop="name1" v-if="showobj.n1" label="资产一分类" width="100" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="name2" v-if="showobj.n2" label="资产二分类" width="100" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column label="资产规模数据(万元)" v-if="showobj.n3">
          <el-table-column prop="zip" label="期初存量" width="120" v-if="showobj.n4">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="120" v-if="showobj.n5">
          </el-table-column>
          <el-table-column prop="zip" label="投放到期" width="120" v-if="showobj.n6">
          </el-table-column>
          <el-table-column prop="zip" label="净投放" width="120" v-if="showobj.n7">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="120" v-if="showobj.n8">
          </el-table-column>
          <el-table-column prop="zip" label="期间均值" width="120" v-if="showobj.n9">
          </el-table-column>
        </el-table-column>
        <el-table-column label="加权平均期限(年)" v-if="showobj.n10">
          <el-table-column prop="zip" label="期初存量" width="120" v-if="showobj.n11">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="120" v-if="showobj.n12">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="120" v-if="showobj.n13">
          </el-table-column>
        </el-table-column>
        <!-- <el-table-column label="加权平均收益率">
          <el-table-column prop="zip" label="期初存量" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="120">
          </el-table-column>
        </el-table-column> -->
        <!-- <el-table-column label="加权平均收益率(期限)">
          <el-table-column prop="zip" label="期初存量" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="新增投放" width="120">
          </el-table-column>
          <el-table-column prop="zip" label="期未存量" width="120">
          </el-table-column>
        </el-table-column> -->
      </el-table>
      <!-- 分隔 -->
      <div class="table_wrap_title">
        <span class="t_w_t1">产品规模数据</span>
      </div>
      <el-table :data="tableData" style="width: 100%" header-row-class-name="table_header" :span-method="arraySpanMethod"
        :border="true">
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
    </div>
  </div>
</template>

<script>
import searchBox from './../components/searchBox'
import listingSet from './../components/listingSet'
import {filterData,tableData} from './data'
export default {
  name: 'report2',
  components: {
    searchBox, listingSet
  },
  data() {

    return {
      alldata: [],
      tableData,
      filterData,
      showobj: {
        n1: true,
        n2: true,
        n3: true,
        n4: true,
        n5: true,
        n6: true,
        n7: true,
        n8: true,
        n9: true,
        n10: true,
        n11: true,
        n12: true,
        n13: true,
      },
      // showMap: {
      //   1: "n1",
      //   2: "n2",
      //   3: "n3",
      //   4: "n4",
      //   5: "n5",
      //   6: "n6",
      //   7: "n7",
      //   8: "n8",
      //   9: "n9",
      //   10: "n10",
      //   11: "n11",
      //   12: "n12",
      //   13: "n13",
      // },
    }
  },
  created() {

  },
  methods: {
    //传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点
    showChange({data, checked, indeterminate}) {
      if(indeterminate){return}
      // const key = this.showMap[data.id];
      // this.showobj[key] = checked;
      this.showobj[data.showProps] = checked;
      this.$nextTick(() => {
        this.$refs.multipleTable.doLayout();
      });
    },
    renderHeader(h, { column, $index }) {
      return h("span", [
        h(
          "el-tooltip",
          {
            attrs: {
              class: "item",
              effect: "dark",
              content: column.label,
              placement: "top",
            },
          },
          [h("span", column.label)]
        ),
      ]);
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
</style>
