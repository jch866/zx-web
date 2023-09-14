
<template>
  <div class="search_box">
    <div class="search_condition_date">
      <div v-for="(item,index) in dateType" :key="item.value"
      :class="{'date_types':true,'is_active':activeIndex===index}"
      @click="selectDateType(index)">{{ item.label }}</div>
    </div>
    <el-date-picker v-model="value3" type="year" size="small" placeholder="选择年">
    </el-date-picker>
    <div>
      <span>维度</span><el-cascader :options="options" :props="props" size="small" clearable></el-cascader>
    </div>
    <div>
      <el-button size="small" icon="el-icon-star-off">过滤条件</el-button>
    </div>
    <div>
      <el-button size="small">重置</el-button>
      <el-button size="small">查询</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'searchbox',

  data () {
    return {
      dateType: [{
        value: 'day',
        label: '日'
      }, {
        value: 'month',
        label: '月报'
      }, {
        value: 'season',
        label: '季报'
      }, {
        value: 'halfyear',
        label: '半年报'
      }, {
        value: 'year',
        label: '年报'
      }],
      value3: '',
      props: { multiple: true },
      options: [{
        value: 1,
        label: '东南',
        children: [{
          value: 2,
          label: '上海',
          children: [
            { value: 3, label: '普陀' },
            { value: 4, label: '黄埔' },
            { value: 5, label: '徐汇' }
          ]
        }, {
          value: 7,
          label: '江苏',
          children: [
            { value: 8, label: '南京' },
            { value: 9, label: '苏州' },
            { value: 10, label: '无锡' }
          ]
        }, {
          value: 12,
          label: '浙江',
          children: [
            { value: 13, label: '杭州' },
            { value: 14, label: '宁波' },
            { value: 15, label: '嘉兴' }
          ]
        }]
      }, {
        value: 17,
        label: '西北',
        children: [{
          value: 18,
          label: '陕西',
          children: [
            { value: 19, label: '西安' },
            { value: 20, label: '延安' }
          ]
        }, {
          value: 21,
          label: '新疆维吾尔族自治区',
          children: [
            { value: 22, label: '乌鲁木齐' },
            { value: 23, label: '克拉玛依' }
          ]
        }]
      }],
      activeIndex: 0
    }
  },
  created () {
    console.log(this)
  },
  methods: {

    selectDateType (index) {
      this.activeIndex = index
    }

  }
}

</script>

<style lang="scss">
.search_box {
  display: flex;
  justify-content: space-between;
}

.search_condition_date {
  display: flex;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  height: 36px;
  // padding: 5px 0;
  width: 300px;
  .date_types{
    flex: 1;
    text-align: center;
    border-right: 1px solid #DCDFE6;
    // height: 24px;
    line-height: 36px;
    cursor: pointer;
    &:last-child{
      border-right:none;
    }
  }
  .is_active{
    color: white;
    background-color: #0074f1;
    border-radius: 4px;
    border: none;
  }
}
</style>
