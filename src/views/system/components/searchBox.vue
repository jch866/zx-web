
<template>
  <div class="search_box">
    <diff-date />
    <div class="search_dimension">
      <div class="search_dimension_name">维度:</div>
      <treeselect v-model="value" :multiple="true" :options="options" class="search_trees" placeholder="请选择展示维度" />
    </div>
    <!-- <search-filter /> -->
    <el-select v-model="value1" placeholder="销售归属" size="small" v-if="showMore" class="ml20">
      <el-option label="3-6个月" value="shanghai"></el-option>
      <el-option label="6-12个月" value="beijing"></el-option>
    </el-select>
   <div style="min-width: 300px;display: flex;">
    <el-select v-model="value2" placeholder="产品分类" size="small" :class="{'mt20':showMore}" v-if="showMore">
      <el-option label="3-6个月" value="shanghai"></el-option>
      <el-option label="6-12个月" value="beijing"></el-option>
    </el-select>
    <el-select v-model="value3" placeholder="资产分类" size="small" :class="{'mt20':showMore,'ml20':true}" v-if="showMore">
      <el-option label="3-6个月" value="shanghai"></el-option>
      <el-option label="6-12个月" value="beijing"></el-option>
    </el-select>
    <el-select v-model="value4" placeholder="资产期限分类" size="small" :class="{'mt20':showMore,'ml20':true}" v-if="showMore">
      <el-option label="3-6个月" value="shanghai"></el-option>
      <el-option label="6-12个月" value="beijing"></el-option>
    </el-select>
    <div class="search_btngroup"  :class="{'mt20':showMore,'ml20':true}">
      <el-button size="small" @click="resetHandler">重置</el-button>
      <el-button size="small" @click="searchHandler">查询</el-button>
    </div>
    <div style="display: flex;"  :class="{'mt20':showMore}">
      <div class="search_divider"></div>
      <el-button size="small" type="text" @click="searchMore">展开<i
          class="el-icon-arrow-down el-icon--right"></i></el-button>
      <el-button type="primary" size="small" icon="el-icon-share">导出</el-button>
    </div>
   </div>
  </div>
</template>

<script>
import diffDate from './diffDate'
import searchFilter from './searchFilter'
import listingSet from './listingSet.vue'
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  name: 'searchbox',
  components: {
    diffDate, Treeselect, searchFilter, listingSet
  },
  data () {
    return {
      value: null,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      showMore: false,
      props: { multiple: true },
      // options1: [{
      //   value: 1,
      //   label: '东南',
      //   children: [{
      //     value: 2,
      //     label: '上海',
      //     children: [
      //       { value: 3, label: '普陀' },
      //       { value: 4, label: '黄埔' },
      //       { value: 5, label: '徐汇' }
      //     ]
      //   }, {
      //     value: 7,
      //     label: '江苏',
      //     children: [
      //       { value: 8, label: '南京' },
      //       { value: 9, label: '苏州' },
      //       { value: 10, label: '无锡' }
      //     ]
      //   }, {
      //     value: 12,
      //     label: '浙江',
      //     children: [
      //       { value: 13, label: '杭州' },
      //       { value: 14, label: '宁波' },
      //       { value: 15, label: '嘉兴' }
      //     ]
      //   }]
      // }, {
      //   value: 17,
      //   label: '西北',
      //   children: [{
      //     value: 18,
      //     label: '陕西',
      //     children: [
      //       { value: 19, label: '西安' },
      //       { value: 20, label: '延安' }
      //     ]
      //   }, {
      //     value: 21,
      //     label: '新疆维吾尔族自治区',
      //     children: [
      //       { value: 22, label: '乌鲁木齐' },
      //       { value: 23, label: '克拉玛依' }
      //     ]
      //   }]
      // }],
      options: [{
        id: 'a1',
        label: '产品分类',
        children: [{
          id: 'aa2',
          label: '公司六⼤赛道'
        }, {
          id: 'ab3',
          label: '三分类'
        }, {
          id: 'ab4',
          label: '监管四分类'
        }]
      }, {
        id: 'b5',
        label: '资产分类',
        children: [{
          id: 'aa6',
          label: '资产一分类'
        }, {
          id: 'ab7',
          label: '资产二分类'
        }, {
          id: 'ab8',
          label: '资产三分类'
        }]
      }, {
        id: 'c9',
        label: '区域分类'
      }]
      // normalizer (node) {
      //   return {
      //     id: node.value,
      //     label: node.label,
      //     children: node.children
      //   }
      // }
    }
  },
  created () {
    console.log(this)
  },
  methods: {
    searchMore () {
      this.showMore = !this.showMore
    },
    selectDateType (index) {
      this.activeIndex = index
    },
    resetHandler () {
      this.$emit('resetFn')
    },
    searchHandler () {
      this.$emit('searchFn')
    }

  }
}

</script>

<style lang="scss">
.search_box {
  display: flex;
  // justify-content: space-between;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.search_dimension {
  width: 260px;
  // background-color: red;
  display: flex !important;
  margin-left: 10px;

  .search_dimension_name {
    width: 50px;
    line-height: 32px;
  }

  .vue-treeselect__control {
    height: 32px;
  }

  .vue-treeselect__placeholder {
    line-height: 32px;
    font-size: 14px;
  }

  .search_trees {
    flex: 1;
    // height: 32px;
  }

}

.search_filter {
  margin-left: 10px;
}

.search_btngroup {
  margin-left: 5px;
  width: 140px;
}

.search_divider {
  width: 1px;
  height: 30px;
  border-left: 1px solid #DCDFE6;
  margin-right: 10px;
}

.mt20 {
  margin-top: 20px;
}
.ml20 {
  margin-left: 20px;
}

// :deep {
//   .vue-treeselect {
//     width: 198px;
//     height: 28px;
//     line-height: 28px;
//     margin-top: 7px;
//     font-size: 12px;
//   }

//   .vue-treeselect__control {
//     height: 28px;
//   }

//   .vue-treeselect__placeholder,
//   .vue-treeselect__single-value {
//     line-height: 28px;
//   }
// }</style>
