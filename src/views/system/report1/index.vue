
<template>
  <div class="main_box">
    <div class="table_wrap_h3">
      <span class="t_w_h3">分⾏表外资产负债表</span><el-button type="primary" size="small" icon="el-icon-share">导出</el-button>
    </div>
    <div class="table_wrap">
      <search-box />
      <div class="table_wrap_title">
        <span class="t_w_t1">资产规模数据</span><span class="t_w_t2">编织单位：⻓三⻆/上海分⾏ 报表类型：⽉报 统计⽇期：2023/04/17 － 2023/05/20</span>
      </div>
      <!-- :header-row-style="{color:'#333'}" -->
      <el-table :data="tableData" style="width: 100%" header-row-class-name="table_header" :span-method="arraySpanMethod">
        <el-table-column prop="date" label="分行名称" width="150">
        </el-table-column>
        <el-table-column prop="city" label="分行梯队" width="150">
        </el-table-column>
        <el-table-column prop="province" label="分行大区" width="150">
        </el-table-column>
        <el-table-column prop="zip" label="资产一分类" width="150">
        </el-table-column>
        <el-table-column prop="zip" label="资产二分类" width="150">
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
      <el-table :data="tableData" style="width: 100%" header-row-class-name="table_header">
        <el-table-column prop="date" label="分行名称" width="150">
        </el-table-column>
        <el-table-column prop="city" label="分行梯队" width="150">
        </el-table-column>
        <el-table-column prop="province" label="分行大区" width="150">
        </el-table-column>
        <el-table-column prop="name" label="公司六⼤赛道" width="150">
        </el-table-column>
        <el-table-column prop="zip" label="三分类" width="150">
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
import list from './data'
import searchBox from './components/searchBox.vue'
export default {
  name: 'report1',
  components: {
    searchBox
  },
  data() {
    return {
      alldata: [],
      list,
      tableData: [{
        date: '2023-05-088',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        zip: 200333
      }, {
        date: ' ',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        zip: 200333
      }, {
        date: '',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        zip: 200333
      }, {
        date: '2023-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        zip: 200333
      }, {
        date: '2023-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        zip: 200333
      }, {
        date: '2023-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        zip: 200333
      }, {
        date: '2023-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        zip: 200333
      }]
    }
  },
  created() {
    // 二次处理数据
    // this.alldata = this.handleTableArr(this.list)
    // console.log(this.alldata)
  },
  methods: {
    // 解析数据
    // handleTableArr (data) {
    //   const arr = []
    //   for (let i = 0; i < data.length; i++) {
    //     const category_info = data[i]
    //     const activityPointsDOS = category_info.activityPointsDOS
    //     let count = 0
    //     for (let j = 0; j < activityPointsDOS.length; j++) {
    //       const activityTwo_info = activityPointsDOS[j]
    //       const activityTwo_activityPointsDOS = activityPointsDOS[j].activityPointsDOS
    //       for (let k = 0; k < activityTwo_activityPointsDOS.length; k++) {
    //         count++
    //         const info = {
    //           // 确定每天数据的 合并行的数量
    //           //  big_num: i === 0 ? activityPointsDOS.length : 0,
    //           span_num: k === 0 ? activityTwo_activityPointsDOS.length : 0,
    //           value: activityTwo_activityPointsDOS[k].value,
    //           message: activityTwo_activityPointsDOS[k].message,
    //           activityName: activityTwo_info.activityName,
    //           category: category_info.category
    //         }
    //         arr.push(info)
    //       }
    //     }
    //     arr[arr.length - count].count = count
    //   }
    //   return arr
    // },
    // 表格合并的方法
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 3 === 0) {
          return [3, 1];
        } else {
          return [0, 0];
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
