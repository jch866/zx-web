<template>
    <div class="listing_set">
        <el-popover placement="bottom" title="自定义展示列" width="240" trigger="click" 
        :visible-arrow="false" ref="popoverlisting">
            <div class="div_line">
                <i class="el-icon-close close_new" @click="closePopHandler"></i>
            </div>
            <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]"
                :props="defaultProps">
            </el-tree>
            <el-button size="small" icon="el-icon-setting" slot="reference">列表设置</el-button>
        </el-popover>
    </div>
</template>
<script>
export default {
    name: 'listingSet',
    components: {

    },
    data() {
        return {
            visible: false,
            data: [{
                id: 1,
                label: '资产分类',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '资产规模数量',
                children: [{
                    id: 5,
                    label: '期初存量'
                }, {
                    id: 6,
                    label: '新增投放'
                }]
            }, {
                id: 3,
                label: '加权平均期限',
                children: []
            }, {
                id: 4,
                label: '加权平均收益率',
                children: []
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }

    },
    created() {
        console.log(this)
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
        closePopHandler(){
            this.$refs[`popoverlisting`].doClose()
        }
    }
}

</script>
    
<style lang="scss" scoped>
.div_line {
    border-top: 1px solid #dddddd;
    margin: 0;
    padding: 0;
    position: relative;
}
.close_new{
    position: absolute;
    width: 15px;
    height: 15px;
    top:-24px;
    right: 7px;
    cursor: pointer;
}

</style>
    