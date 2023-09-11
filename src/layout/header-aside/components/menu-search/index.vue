<template>
    <div>
        <div  class="menu-search-more" v-if="asideCollapse">
            <el-button icon="el-icon-more" circle size="small" class="more-btn"></el-button>
        </div>
        <div class="menu-search-wrap" v-else>
            <div class="menu-search-list-collect">
                <div :class="{'menu-search-list':true, 'active':isActive}" @click="selectActive">
                    <i class="el-icon-s-operation"></i>
                </div>
                <div :class="{'menu-search-collect':true, 'active':!isActive}" @click="selectActive">
                    <i class="el-icon-star-off"></i>
                </div>
            </div>
            <div class="menu-search-searchbtn">
                <i class="el-icon-search"></i>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'menuSearch',
  components: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {
        isActive:true
    }
  },
  computed: {
    ...mapState('d2admin', {
      asideCollapse: (state) => state.menu.asideCollapse,
      asideTransition: (state) => state.menu.asideTransition
    })
  },
  watch: {

  },
  mounted () {

  },
  methods: {
    selectActive(){
        this.isActive = !this.isActive
    }
  }
}
</script>
<style lang='scss' scoped>
.menu-search-more{
    text-align: center;
    margin-bottom: 5px;
    .more-btn{
        opacity: 0.5;
    }
}
.menu-search-wrap {
    color: white;
    display: flex;
    text-align: center;
    height: 40px;
    padding: 0 8px;

    .menu-search-list-collect {
        width: 66%;
        display: flex;
        height: 32px;
        line-height: 32px;
        background: rgba(255, 255, 255, 0.10);
        border-radius: 16px;

        .menu-search-list {
            flex: 1;
            cursor: pointer;
        }

        .menu-search-collect {
            flex: 1;
            cursor: pointer;
        }

        .active {
            background: rgba(255, 255, 255, 0.16);
            border-radius: 16px;
            // width: 70% !important;
        }
    }

    .menu-search-searchbtn {
        flex: 1;
        height: 32px;
        line-height: 32px;
        cursor: pointer;
    }
}</style>
