<!--
 * @创建文件时间: 2021-06-08 10:40:32
 * @Auther: 猿小天
 * @最后修改人: 猿小天
 * @最后修改时间: 2021-06-09 10:37:37
 * 联系Qq:1638245306
 * @文件介绍: 操作日志
-->
<template>
  <d2-container :class="{ 'page-compact': crud.pageOptions.compact }">
    <d2-crud-x
      ref="d2Crud"
      v-bind="_crudProps"
      v-on="_crudListeners"
      crud.options.tableType="vxe-table"
    >
      <div slot="header">
        <crud-search
          ref="search"
          :options="crud.searchOptions"
          @submit="handleSearch"
        />
        <!-- <el-button-group>
          <el-button size="small" type="primary" @click="addRow"
            ><i class="el-icon-plus" /> 新增</el-button
          >
        </el-button-group> -->
        <crud-toolbar
          :search.sync="crud.searchOptions.show"
          :compact.sync="crud.pageOptions.compact"
          :columns="crud.columns"
          @refresh="doRefresh()"
          @columns-filter-changed="handleColumnsFilterChanged"
        />
      </div>
    </d2-crud-x>
  </d2-container>
</template>

<script>
import * as api from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'

export default {
  name: 'operationLog',

  mixins: [d2CrudPlus.crud],
  data () {
    return {}
  },
  mounted () {
    // todo
    // console.log(this.crud)
  },
  methods: {
    getCrudOptions () {
      return crudOptions(this)
    },
    pageRequest (query) {
      return api.GetList(query)
    },
    addRequest (row) {
      return api.AddObj(row)
    },
    updateRequest (row) {
      return api.UpdateObj(row)
    },
    delRequest (row) {
      return api.DelObj(row.id)
    }
  }
}
</script>

<style lang="scss">
.yxtInput {
  .el-form-item__label {
    color: #49a1ff;
  }
}
</style>
