<template>
  <div class="listing_set">
    <el-popover placement="bottom" title="自定义展示列" width="240" trigger="click" :visible-arrow="false" ref="popoverlisting">
      <div class="div_line">
        <i class="el-icon-close close_new" @click="closePopHandler"></i>
      </div>
      <div style="margin:0 10px">
        <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[]" :default-checked-keys="[1,2,3,10]"
          :props="defaultProps" draggable @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter"
          @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd"
          @node-drop="handleDrop" @check-change="handleCheckChange">
        </el-tree>
      </div>
      <el-button size="small" icon="el-icon-setting" slot="reference">列表设置</el-button>
    </el-popover>
  </div>
</template>
<script>
export default {
  name: 'listingSet',
  components: {
  },
  props:['filterData'],
  data() {
    return {
      visible: false,
      data: this.filterData,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created() {
    console.log(this.filterData)
  },
  methods: {
    handleDragStart(node, ev) {
      console.log('drag start', node)
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label)
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label)
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label)
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType)
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode && dropNode.label, dropType)
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
      this.$emit('showChange',{data, checked, indeterminate})
    },
    handleChange(value) {
      console.log(value)
    },
    closePopHandler() {
      this.$refs.popoverlisting.doClose()
    }
  }
}

</script>

<style lang="scss" scoped>
:deep {
  .el-tree-node__content {
    height: 32px;
    line-height: 32px
  }

  .el-tree-node__content::before {
    content: '';
    width: 5px;
    height: 10px;
    border-left: 2px dotted #606266;
    border-right: 2px dotted #606266;
    position: absolute;
    margin-left: -6px;
  }

}

.div_line {
  border-top: 1px solid #dddddd;
  margin: 0;
  padding: 0;
  position: relative;
}

.close_new {
  position: absolute;
  width: 15px;
  height: 15px;
  top: -24px;
  right: 7px;
  cursor: pointer;
}
</style>
