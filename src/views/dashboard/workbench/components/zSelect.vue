<template>
    <el-select v-model="value" placeholder="请选择" size="mini" style="width: 90px;margin-left: 20px;">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
</template>

<script >
export default {
    data() {
        return {
            options: [{
                value: '1',
                label: '近一月'
            }, {
                value: '2',
                label: '近一周'
            }, {
                value: '3',
                label: '近一日'
            }],
            value: '1'
        }
    }
}
</script>

<style lang="scss" scoped>

:deep {

    .el-input__inner {
        border-radius: 16px;
    }

}
</style>