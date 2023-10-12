<template>
  <div class="types_box">
    <div class="types_list">
      <ul>
        <li v-for="(item, index) in listType" :key="index" :class="{ 'active': index === activeIndex }"
          @click="onTypesHandle(index)">{{ item }}</li>
      </ul>
    </div>
    <div class="types_btn">
      <el-button type="primary" size="small" @click="dialogVisible = true">设置明细</el-button>
    </div>
    <el-dialog title="设置细项" :visible.sync="dialogVisible" width="70%">

      <el-table :data="tableData" style="width: 100%" header-row-class-name="table_header"
        :border="true"  >
        <el-table-column prop="zip1" label="细项名称" min-width="140" align="left">
        </el-table-column>
        <el-table-column prop="zip2" label="细项筛选规则" min-width="140" align="left" >
        </el-table-column>
        <el-table-column prop="zip3" label="细项说明" min-width="60" align="left">
        </el-table-column>
        <el-table-column label="操作" width="100" align="left">
          <template slot-scope="scope">
            <el-button @click.native.prevent="editRow(scope.$index, scope.row)" type="text" size="small">
              编辑
            </el-button>
            <el-popconfirm title="这是一段内容确定删除吗？">
              <!-- @click.native.prevent="deleteRow(scope.$index, scope.row)"  -->
              <el-button slot="reference" type="text" size="small">
                删除
              </el-button>
            </el-popconfirm>

          </template>
        </el-table-column>
      </el-table>
      <div class="add_detail"><span><i class="el-icon-plus"></i> 添加细项规则</span></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="small">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'setDetail',
  data () {
    return {
      listType: ['按产品类型', '按销售渠道', '按期限结构'],
      activeIndex: 0,
      dialogVisible: false,
      tableData: [
        { zip1: '其中:1年及以上固收稳利(低波)', zip2: '其中:1年及以上固收稳利(权益0.5%)', zip3: '-' },
        { zip1: '其中:1年及以上固收稳利(权益0.5%)', zip2: '其中:1年及以上固收稳利(权益0.5%)', zip3: '-' },
        { zip1: '其中:1年及以上固收稳利(低波)', zip2: '其中:1年及以上固收稳利(权益0.5%)', zip3: '-' },
        { zip1: '其中:1年及以上固收稳利(权益0.5%)', zip2: '其中:1年及以上固收稳利(权益0.5%)', zip3: '-' }
      ]
    }
  },
  methods: {
    onTypesHandle (index) {
      this.activeIndex = index
    },
    editRow (index, data) {
      console.log(index)
      console.log(data)
    },
    deleteRow (index, data) {

    }
  }
}
</script>

<style lang="scss" scoped>
// //全局也有一个设置为居中的cell样式
// .cell{
//   text-align: left;
// }
.types_box {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 10px;

  .types_btn {
    display: flex;
    align-items: center;
  }

  .types_list {

    flex: 1;

    li,
    ul {
      list-style: none;
      line-height: 50px;
    }

    ul {
      display: flex;

      li {
        width: 120px;
        text-align: center;
        margin: 0 10px;
        cursor: pointer;
        padding-bottom: -2px;

        &.active {
          border-bottom: 3px solid #00c1ff;
        }
      }
    }

  }
}

.add_detail {
  background-color: rgb(236, 252, 252);
  text-align: center;
  color: #00c1ff;
  margin-top: 10px;
  padding: 8px;

  span {
    cursor: pointer;
  }
}
</style>
