import { mapState } from 'vuex'
import menuMixin from '../mixin/menu'
import { createMenu } from '../libs/util.menu'
import BScroll from 'better-scroll'
import menuSearch from '../menu-search'
export default {
  name: 'd2-layout-header-aside-menu-side',
  mixins: [menuMixin],
  render (h) {
    console.log('render')
    return (
      <div class="d2-layout-header-aside-menu-side">
        <menuSearch />
        {/* 菜单列表 */}
        {this.asideType === 1 ? (
          <el-menu
            collapse={this.asideCollapse}
            collapseTransition={false}
            uniqueOpened={true}
            defaultActive={this.$route.fullPath}
            ref="menu"
            onSelect={this.handleMenuSelect}
          >
            {this.aside.map((menu) => createMenu.call(this, h, menu))}
          </el-menu>
        ) : null}
        {this.asideType === 1 &&
        this.aside.length === 0 &&
        !this.asideCollapse ? (
            <div
              class="d2-layout-header-aside-menu-empty"
              flex="dir:top main:center cross:center"
            >
              <d2-icon name="inbox"></d2-icon>
              <span>没有侧栏菜单</span>
            </div>
          ) : null}
        {/* 收藏列表 */}
        {this.asideType === 2 ? (
          this.collectList.length > 0 ? (
            <div class="d2-layout-header-aside-menu-collect">
              <ul>
                {this.collectList.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => this.handleMenuSelect(item.path)}
                    title={item.name}
                  >
                    {this.renderIcon(item)} { !this.asideCollapse && item.name}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div class="filter_empty_pannel">
              <p>无收藏内容</p>
              <d2-icon name="inbox" style="font-size: 40px;"></d2-icon>
            </div>
          )
        ) : null}
        {/* 搜索列表 DOM直接写在menuSearch中 */}
        {this.asideType === 3 && null}
      </div>
    )
  },
  data () {
    return {
      asideHeight: 300,
      BS: null
    }
  },
  computed: {
    ...mapState('d2admin/menu', [
      'aside',
      'asideCollapse',
      'asideTransition',
      'collectList',
      'asideType'
    ])
  },
  watch: {
    // 折叠和展开菜单的时候销毁 better scroll
    asideCollapse (val) {
      this.scrollDestroy()
      setTimeout(() => {
        this.scrollInit()
      }, 500)
    }
  },
  mounted () {
    this.scrollInit()
  },
  beforeDestroy () {
    this.scrollDestroy()
  },
  methods: {
    scrollInit () {
      this.BS = new BScroll(this.$el, {
        mouseWheel: true,
        click: true
        // 如果你愿意可以打开显示滚动条
        // scrollbar: {
        //   fade: true,
        //   interactive: false
        // }
      })
    },
    scrollDestroy () {
      // https://github.com/d2-projects/d2-admin/issues/75
      try {
        this.BS.destroy()
      } catch (e) {
        delete this.BS
        this.BS = null
      }
    },
    renderIcon (item) {
      if (item.icon) {
        return <i slot="title" class={`fa fa-${item.icon}`} />
      }
      if (item.iconSvg) {
        return <d2-icon-svg slot="title" name={item.iconSvg} />
      }
      return <i slot="title" class="fa fa-folder-o" />
    }
  }
}
