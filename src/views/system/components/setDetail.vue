<template>
  <div class="types_box">
    <div class="types_list">
      <ul>
        <li v-for="(item, index) in listType" :key="index" :class="{ 'active': index === activeIndex }"
          @click="onTypesHandle(index)">{{ item }}</li>
      </ul>
    </div>
    <div class="types_btn" v-if="activeIndex === 0">
      <el-button type="primary" size="small" @click="dialogVisible = true">设置明细</el-button>
    </div>
    <el-dialog title="设置细项" :visible.sync="dialogVisible" width="70%">

      <el-table :data="tableData" style="width: 100%" header-row-class-name="table_header" :border="true">
        <el-table-column prop="zip1" label="细项名称" min-width="140" align="left">
        </el-table-column>
        <el-table-column prop="zip2" label="细项筛选规则" min-width="140" align="left">
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
      <div class="add_detail"><span @click="addDetailHandle"><i class="el-icon-plus"></i> 添加细项规则</span></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="small">提 交</el-button>
      </span>
    </el-dialog>
    <el-dialog title="添加细项规则" :visible.sync="dialogAdd" width="70%">
      <!-- :rules="rules" -->
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="细项名细" prop="name">
          <el-input v-model="ruleForm.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="细项说明" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="维度规则" prop="region">

          <el-table :data="tableDataAdd" style="width: 100%" header-row-class-name="table_header" :border="true">
            <el-table-column prop="zip1" label="规则字段" min-width="140" align="left">
              <template slot-scope="scope">
                <el-select v-model="scope.row.zip1" placeholder="" size="small">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="zip2" label="判断条件" min-width="140" align="left">
              <template slot-scope="scope">
                <el-select v-model="scope.row.zip2" placeholder="" size="small">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="zip3" label="规则值" min-width="60" align="left">
              <template slot-scope="scope">
                <el-select v-model="scope.row.zip3" placeholder="" size="small">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="100" align="left">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="delItem(scope.$index)" v-if="scope.$index!==0">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
      <div class="add_detail"><span @click="addItem"><i class="el-icon-plus"></i> 添加规则</span></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="clearFormHandle" size="small" type="text">清 空</el-button>
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
      dialogAdd: false,
      tableData: [
        { zip1: '其中:1年及以上固收稳利(低波)', zip2: '其中:1年及以上固收稳利(权益0.5%)', zip3: '-' },
        { zip1: '其中:1年及以上固收稳利(权益0.5%)', zip2: '其中:1年及以上固收稳利(权益0.5%)', zip3: '-' },
        { zip1: '其中:1年及以上固收稳利(低波)', zip2: '其中:1年及以上固收稳利(权益0.5%)', zip3: '-' },
        { zip1: '其中:1年及以上固收稳利(权益0.5%)', zip2: '其中:1年及以上固收稳利(权益0.5%)', zip3: '-' }
      ],
      tableDataAdd: [
        { zip1: '赛道', zip2: '等于', zip3: '固收' },
        { zip1: 'shanghai', zip2: '等于', zip3: '固收' },
        { zip1: '赛道2', zip2: '等于', zip3: '固收' },
        { zip1: '赛道3', zip2: '等于', zip3: '固收' }
      ],
      ruleForm: {
        name: '',
        desc: ''
      }
    }
  },
  methods: {
    onTypesHandle (index) {
      this.activeIndex = index
      this.$emit('setTable', index)
    },
    editRow (index, data) {
      console.log(index)
      console.log(data)
    },
    deleteRow (index, data) {

    },
    addDetailHandle () {
      this.dialogVisible = false
      this.dialogAdd = true
    },
    clearFormHandle () {
      console.log('clear')
      this.ruleForm = {
        name: '',
        desc: ''
      }
    },
    addItem () {
      this.tableDataAdd = [...this.tableDataAdd, { zip1: '', zip2: '', zip3: '' }]
    },
    delItem (index) {
      console.log(index)
      this.tableDataAdd.splice(index, 1)
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
  margin: 10px 0;

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
