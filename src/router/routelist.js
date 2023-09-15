const list = [
  {
    id: 10,
    parent: 9,
    icon: "desktop",
    sort: 0,
    path: "/config",
    name: "系统配置",
    title: "系统配置",
    is_link: false,
    is_catalog: false,
    web_path: "/config",
    component: "system/config/index",
    component_name: "config",
    cache: false,
    visible: true,
    menuPermission: ["Retrieve", "Update", "Search", "Create", "Delete"],
  },
  {
    id: 2,
    parent: 1,
    icon: "navicon",
    sort: 1,
    path: "/menu",
    name: "报表管理",
    title: "报表管理",
    is_link: false,
    is_catalog: false,
    web_path: "/menu",
    component: "system/menu",
    component_name: "menu",
    cache: false,
    visible: true,
    collect: true,
    menuPermission: ["Retrieve", "Update", "Search", "Create", "Delete"],
  },
  {
    id: 19,
    parent: 1,
    icon: "file-code-o",
    sort: 1,
    path: "/report1",
    name: "表外资产负债表",
    title: "表外资产负债表",
    is_link: false,
    is_catalog: false,
    web_path: "/report1",
    component: "system/report1/index",
    component_name: "report1",
    cache: false,
    visible: true,
    menuPermission: ["Retrieve", "Search"],
  },
  {
    id: 15,
    parent: 14,
    icon: "file-text",
    sort: 1,
    path: "/loginLog",
    name: "登录日志",
    title: "登录日志",
    is_link: false,
    is_catalog: false,
    web_path: "/loginLog",
    component: "system/log/loginLog/index",
    component_name: "loginLog",
    cache: false,
    visible: false,
    collect: true,
    menuPermission: ["Retrieve", "Search"],
  },
  {
    id: 11,
    parent: 9,
    icon: "book",
    sort: 1,
    path: "/dictionary",
    name: "公司管理",
    title: "公司管理",
    is_link: false,
    is_catalog: false,
    web_path: "/dictionary",
    component: "system/dictionary/index",
    component_name: "dictionary",
    cache: false,
    visible: true,
    menuPermission: ["Retrieve", "Update", "Search", "Create", "Delete"],
  },
  {
    id: 1,
    parent: null,
    icon: "cog",
    sort: 1,
    path: "",
    name: "系统管理",
    title: "系统管理",
    is_link: false,
    is_catalog: true,
    web_path: "",
    component: "",
    component_name: "",
    cache: false,
    visible: true,
    menuPermission: [],
  },
  {
    id: 9,
    parent: null,
    icon: "cogs",
    sort: 2,
    path: "",
    name: "常规配置",
    title: "常规配置",
    is_link: false,
    is_catalog: true,
    web_path: "",
    component: "",
    component_name: "",
    cache: false,
    visible: false,
    menuPermission: [],
  },
  {
    id: 3,
    parent: 1,
    icon: "dot-circle-o",
    sort: 2,
    path: "/menuButton",
    name: "菜单按钮",
    title: "菜单按钮",
    is_link: false,
    is_catalog: false,
    web_path: "/menuButton",
    component: "system/menuButton/index",
    component_name: "menuButton",
    cache: false,
    visible: false,
    menuPermission: ["Update", "Search", "Create", "Delete"],
  },
  {
    id: 12,
    parent: 9,
    icon: "map",
    sort: 2,
    path: "/areas",
    name: "地区管理",
    title: "地区管理",
    is_link: false,
    is_catalog: false,
    web_path: "/areas",
    component: "system/areas/index",
    component_name: "areas",
    cache: false,
    visible: true,
    menuPermission: ["Retrieve", "Update", "Search", "Create", "Delete"],
  },
  {
    id: 16,
    parent: 14,
    icon: "file-code-o",
    sort: 2,
    path: "/operationLog",
    name: "操作日志",
    title: "操作日志",
    is_link: false,
    is_catalog: false,
    web_path: "/operationLog",
    component: "system/log/operationLog/index",
    component_name: "operationLog",
    cache: false,
    visible: true,
    menuPermission: ["Retrieve", "Search"],
  },
  {
    id: 4,
    parent: 1,
    icon: "bank",
    sort: 3,
    path: "/dept",
    name: "部门管理",
    title: "部门管理",
    is_link: false,
    is_catalog: false,
    web_path: "/dept",
    component: "system/dept/index",
    component_name: "dept",
    cache: false,
    visible: true,
    menuPermission: ["Retrieve", "Update", "Search", "Create", "Delete"],
  },
  {
    id: 13,
    parent: 9,
    icon: "file-text-o",
    sort: 3,
    path: "/file",
    name: "附件管理",
    title: "附件管理",
    is_link: false,
    is_catalog: false,
    web_path: "/file",
    component: "system/fileList/index",
    component_name: "file",
    cache: false,
    visible: true,
    menuPermission: ["Retrieve", "Update", "Search", "Delete"],
  },
  {
    id: 14,
    parent: null,
    icon: "book",
    sort: 3,
    path: "",
    name: "日志管理",
    title: "日志管理",
    is_link: false,
    is_catalog: true,
    web_path: "",
    component: "",
    component_name: "",
    cache: false,
    visible: true,
    menuPermission: [],
  },
  {
    id: 5,
    parent: 1,
    icon: "address-book",
    sort: 4,
    path: "/role",
    name: "角色管理",
    title: "角色管理",
    is_link: false,
    is_catalog: false,
    web_path: "/role",
    component: "system/role/index",
    component_name: "role",
    cache: false,
    visible: false,
    menuPermission: [
      "Retrieve",
      "Update",
      "Search",
      "Create",
      "Delete",
      "Save",
    ],
  },
  {
    id: 17,
    parent: 14,
    icon: "bug",
    sort: 4,
    path: "/frontendLog",
    name: "前端错误日志",
    title: "前端错误日志",
    is_link: false,
    is_catalog: false,
    web_path: "/frontendLog",
    component: "system/log/frontendLog/index",
    component_name: "frontendLog",
    cache: false,
    visible: false,
    menuPermission: [],
  },
  {
    id: 18,
    parent: null,
    icon: "external-link",
    sort: 4,
    path: "https://django-vue-admin.com",
    name: "DVAdmin官网",
    title: "DVAdmin官网",
    is_link: true,
    is_catalog: false,
    web_path: "https://django-vue-admin.com",
    component: "",
    component_name: "",
    cache: false,
    visible: false,
    menuPermission: [],
  },
  {
    id: 19,
    parent: 1,
    icon: "users",
    sort: 4,
    path: "/third",
    name: "第三方登录管理",
    title: "第三方登录管理",
    is_link: false,
    is_catalog: false,
    web_path: "/third",
    component: "plugins/dvadmin-third-web/src/thirdUsers/index",
    component_name: "thirdUsers",
    cache: false,
    visible: false,
    menuPermission: ["Retrieve", "Update", "Search", "Delete"],
  },
  {
    id: 6,
    parent: 1,
    icon: "users",
    sort: 6,
    path: "/user",
    name: "用户管理",
    title: "用户管理",
    is_link: false,
    is_catalog: false,
    web_path: "/user",
    component: "system/user/index",
    component_name: "user",
    cache: false,
    visible: false,
    menuPermission: [
      "ResetPassword",
      "DefaultPassword",
      "Retrieve",
      "Update",
      "Search",
      "Create",
      "Export",
      "Import",
      "Delete",
    ],
  },
  {
    id: 7,
    parent: 1,
    icon: "bullhorn",
    sort: 7,
    path: "/messageCenter",
    name: "消息中心",
    title: "消息中心",
    is_link: false,
    is_catalog: false,
    web_path: "/messageCenter",
    component: "system/messageCenter/index",
    component_name: "messageCenter",
    cache: false,
    visible: false,
    menuPermission: ["Retrieve", "Update", "Search", "Create", "Delete"],
  },
  {
    id: 8,
    parent: 1,
    icon: "compass",
    sort: 8,
    path: "/apiWhiteList",
    name: "接口白名单",
    title: "接口白名单",
    is_link: false,
    is_catalog: false,
    web_path: "/apiWhiteList",
    component: "system/whiteList/index",
    component_name: "whiteList",
    cache: false,
    visible: false,
    menuPermission: ["Retrieve", "Update", "Search", "Create", "Delete"],
  },
];

export default list;
