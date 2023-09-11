<template>
    <div>
        <div class="menu-search-more" v-if="asideCollapse">
            <el-button icon="el-icon-more" circle size="small" class="more-btn"></el-button>
        </div>
        <div class="menu-search-wrap" v-if="!asideCollapse && !showSearchInput">
            <div class="menu-search-list-collect">
                <div :class="{ 'menu-search-list': true, 'active': isActive === 1 }" @click="selectActive(1)">
                    <i class="el-icon-s-operation"></i>
                </div>
                <div :class="{ 'menu-search-collect': true, 'active': isActive === 2 }" @click="selectActive(2)">
                    <i class="el-icon-star-off"></i>
                </div>
            </div>
            <div class="menu-search-searchbtn" @click="menuSearchHandler">
                <i class="el-icon-search"></i>
            </div>
        </div>
        <div v-if="showSearchInput" class="menu-search-input-wrap">
            <el-input placeholder="搜索" v-model="searchVal" prefix-icon="el-icon-search" clearable @clear="clearHandler"
                @input="filterHandler"></el-input>
            <div v-if='filterList.length > 0'>
                <ul>
                    <li v-for="(item, index) in filterList" :key="index">{{ item.name }}</li>
                </ul>
            </div>
            <div v-else>
                <d2-icon name="inbox"></d2-icon>
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
      isActive: 1,
      showSearchInput: false,
      searchVal: '',
      // allMenu:[],
      collectList: [],
      filterList: []
    }
  },
  computed: {
    ...mapState('d2admin', {
      aside: (state) => state.menu.aside,
      asideCollapse: (state) => state.menu.asideCollapse,
      asideTransition: (state) => state.menu.asideTransition
    }),
    allMenu () {
      let list = []
      this.aside.forEach(item => {
        if (item.children && item.children.length > 0) {
          list = [...list, ...item.children]
        }
      })
      return list
    }
    // filterAside() {
    //     console.log('search!!!!');
    //     if(!this.searchVal) return;
    //     let list = this.allMenu.filter(item => item.name.includes(this.searchVal));
    //     console.log(list)
    //     return list;
    // }
  },
  watch: {

  },
  mounted () {

  },
  methods: {
    filterHandler (val) {
      console.log(val)
      val = val.trim()
      if (!val) {
        this.filterList = []
        return
      };
      const list = this.allMenu.filter(item => {
        console.log(item.name.includes(val))
        return item.name.includes(val)
      })
      console.log(list)
      this.filterList = list
    },
    selectActive (type) {
      this.isActive = type
      const aside = [...this.aside]
      let list = []
      if (type === 2) {
        aside.forEach(item => {
          if (item.children && item.children.length > 0) {
            list = [...list, ...item.children]
          }
        })
        this.collectList = list.filter(i => i.collect)
        // console.log(this.collectList)
        this.$store.commit('d2admin/menu/collectListSet', { list: this.collectList, type })
      } else {
        this.$store.commit('d2admin/menu/collectListSet', { list: [], type })
      }
    },
    menuSearchHandler () {
      this.showSearchInput = true
    },
    clearHandler () {
      this.showSearchInput = false
    }
  }
}
</script>
<style lang='scss' scoped>
.menu-search-more {
    text-align: center;
    margin-bottom: 5px;

    .more-btn {
        opacity: 0.5;
    }
}

.menu-search-wrap {
    color: white;
    display: flex;
    text-align: center;
    height: 40px;
    padding: 0 8px;

    // pointer-events: none;
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

}

.menu-search-input-wrap {
    margin: 10px;
    border-radius: 16px;
    height: 36px;
    background: rgba(255, 255, 255, 0.10);

}

:deep {
    .el-input__inner {
        background-color: transparent !important;
        border: none;
        color: white;
    }
}
</style>
