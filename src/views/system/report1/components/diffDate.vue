<template>
    <div class="search_date_box">
        <div class="search_condition_date">
            <div v-for="(item, index) in dateType" :key="item.value"
                :class="{ 'date_types': true, 'is_active': activeIndex === index }" @click="selectDateType(index,item)">{{
                    item.label }}</div>
        </div>
        <el-date-picker v-model="value3" type="date" size="small" placeholder="选择日期" v-if="selectType==='date'"></el-date-picker>
        <el-date-picker v-model="value3" type="month" size="small" placeholder="选择月" v-if="selectType==='month'"></el-date-picker>
        <el-date-picker v-model="value3" type="year" size="small" placeholder="选择年" v-if="selectType==='year'"></el-date-picker>
        <!-- todo -->
        <halfyear-picker v-model="value3"  ref="halfyearRef" v-if="selectType==='halfyear'" @change="selectHandler"/>
        <el-quarter-picker v-model="value3" size="small" v-if="selectType==='season'"></el-quarter-picker>
    </div>
</template>

<script>
import elQuarterPicker from './quarterPicker.vue'
import halfyearPicker from './halfyearPicker.vue'
export default {
  name: 'diffdateselect',
  components: {
    elQuarterPicker,
    halfyearPicker
  },
  data () {
    return {
      dateType: [{
        value: 'date', // day
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
      activeIndex: 0,
      selectType: 'date'
    }
  },
  created () {
    console.log(this)
  },
  methods: {
    selectDateType (index, { value }) {
      this.activeIndex = index
      this.selectType = value,
      this.value3 = ''
    },
    selectHandler () {
      console.log(this.value3)
    }
  }
}

</script>

<style lang="scss" scoped>
.search_date_box {
    display: flex;
}

.search_condition_date {
    display: flex;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    height: 32px;
    line-height: 32px;
    width: 300px;
    margin-right: 10px;

    .date_types {
        flex: 1;
        text-align: center;
        border-right: 1px solid #DCDFE6;
        // height: 24px;

        cursor: pointer;

        &:last-child {
            border-right: none;
        }
    }

    .is_active {
        color: white;
        background-color: #0074f1;
        border-radius: 4px;
        border: none;
    }
}
</style>
