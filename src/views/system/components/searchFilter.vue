<template>
  <div class="search_filter">
    <el-popover placement="bottom" title="过滤筛选" width="260" trigger="click" :visible-arrow="false" ref="popover">
      <div class="div_line"></div>
      <el-form ref="form" :model="form" size="mini" label-position="top">
        <el-form-item label="区域分行">
          <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item label="产品期限分类">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="3-6个月" value="shanghai"></el-option>
            <el-option label="6-12个月" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="资产期限分类">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="3-6个月" value="shanghai"></el-option>
            <el-option label="6-12个月" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品分类">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="资产分类">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <div class="div_line"></div>
        <el-form-item>
          <div style="text-align: right;margin-top: 4px;">
            <el-button size="mini" @click="cancel">取消</el-button>
            <el-button type="primary" size="mini" @click="onSubmit">确认</el-button>
          </div>
        </el-form-item>
      </el-form>
      <el-button size="small" slot="reference">
        <d2-icon-svg name='filter' style="width: 10px;height: 10px;" />
        过滤条件</el-button>
    </el-popover>
  </div>
</template>

<script>

export default {
  name: 'searchFilter',
  components: {

  },
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      visible: false,

      value: [],
      options: [{
        value: 'zhinan',
        label: '大湾区',
        children: [{
          value: 'shejiyuanze',
          label: '广州分行'
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }]
    }
  },
  created () {
    console.log(this)
  },
  methods: {
    cancel () {
      this.$refs.popover.doClose()
    },
    handleChange (value) {
      console.log(value)
    },
    onSubmit () {
      console.log('submit')
    }
  }
}

</script>

<style lang="scss" scoped>
.search_filter {
  margin-left: 10px;
}

.div_line {
  border-top: 1px solid #dddddd;
  margin: 0;
  padding: 0;
}

:deep {
  .el-form-item {
    margin-bottom: 3px;
  }

  .el-form-item__label {
    padding-bottom: 0px;
  }

  .el-select,
  .el-cascader {
    width: 100%;
  }
}
</style>
