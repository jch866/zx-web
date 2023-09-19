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
    <div v-if="!asideCollapse && showSearchInput" class="menu-search-input-wrap">
      <input type="text" v-model="searchVal" class="search_newinput" @input="filterHandler">
      <i class="el-icon-search newinput_s_icon"></i>
      <i class="el-icon-circle-close newinput_c_icon" @click="clearHandler"></i>
      <!-- <el-input placeholder="搜索" v-model="searchVal" prefix-icon="el-icon-search" clearable
            @clear="clearHandler"
            @input="filterHandler"></el-input>
            -->
      <div v-if='filterList.length > 0' class="filter_pannel">
        <ul>
          <li v-for="(item, index) in filterList" :key="index">
            <!-- {{ item.name }} -->
            <router-link :to="item.path">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <div v-else class="filter_empty_pannel">
        <p>无搜索内容</p>
        <d2-icon name="inbox" style="font-size: 40px;"></d2-icon>
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
    // ...mapState('d2admin', {
    //   aside: (state) => state.menu.aside,
    //   asideCollapse: (state) => state.menu.asideCollapse,
    //   asideTransition: (state) => state.menu.asideTransition
    // }),
    ...mapState('d2admin/menu', [
      'aside',
      'asideCollapse',
      'asideTransition',
      // 'collectList',
      'asideType'
    ]),

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
    asideCollapse (v) {
      if (v) {
        this.clearHandler()
      }
    }
  },
  mounted () {

  },
  methods: {
    filterHandler (e) {
      const val = this.searchVal.trim()
      if (!val) {
        this.filterList = []
        return
      };
      const list = this.allMenu.filter(item => {
        console.log(item.name.includes(val))
        return item.name.includes(val)
      })
      // console.log(list);
      this.filterList = list
    },
    // show(name) {
    //   const reg = new RegExp(this.searchVal, "ig"); //全局替换
    //   return name.replace(reg, (i) => `<span style='color:#0076D6'>${i}</span>`)
    // },
    selectActive (type) {
      this.isActive = type
      this.$store.commit('d2admin/menu/asideTypeSet', type)
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
        this.$store.commit('d2admin/menu/collectListSet', this.collectList)
      } else {
        this.$store.commit('d2admin/menu/collectListSet', [])
      }
    },
    menuSearchHandler () {
      this.showSearchInput = true
      this.$store.commit('d2admin/menu/asideTypeSet', 3)
    },
    clearHandler () {
      this.showSearchInput = false
      this.searchVal = ''
      this.filterList = []
      this.$store.commit('d2admin/menu/asideTypeSet', this.isActive)
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
  position: relative;

  .search_newinput {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 16px;
    background: transparent;
    color: white;
    padding-left: 24px;
  }

  .newinput_s_icon {
    color: white;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-7px);
  }

  .newinput_c_icon {
    color: white;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-7px);
    cursor: pointer;
  }
}

.filter_pannel {
  color: white;
  font-size: 14px;
  ul {
    list-style: none;

    li {
      line-height: 36px;
      height: 36px;
      padding-left: 20px;

      a {
        color: white;
      }
    }
  }
}

// .filter_empty_pannel {
//   text-align: center;
//   padding-top: 50px;
//   color: white;
// }

:deep {
  .el-input__inner {
    background-color: transparent !important;
    border: none;
    color: white;
  }
}
</style>
