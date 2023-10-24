export const filterData = [
  {
    id: 1,
    label: "资产一分类",
    showProps: "n1",
    disabled: true,
  },
  {
    id: 2,
    label: "资产二分类",
    showProps: "n2",
    disabled: true,
  },
  {
    id: 3,
    label: "资产规模数量(万元)",
    showProps: "n3",
    children: [
      {
        id: 4,
        label: "期初存量",
        showProps: "n4",
      },
      {
        id: 5,
        label: "新增投放",
        showProps: "n5",
      },
      {
        id: 6,
        label: "投放到期",
        showProps: "n6",
      },
      {
        id: 7,
        label: "净投放",
        showProps: "n7",
      },
      {
        id: 8,
        label: "期未存量",
        showProps: "n8",
      },
      {
        id: 9,
        label: "期间均值",
        showProps: "n9",
      },
    ],
  },
  {
    id: 10,
    label: "加权平均期限(年)",
    showProps: "n10",
    children: [
      {
        id: 11,
        label: "期初存量",
        showProps: "n11",
      },
      {
        id: 12,
        label: "新增投放",
        showProps: "n12",
      },
      {
        id: 13,
        label: "期未存量",
        showProps: "n13",
      },
    ],
  },
];

export const tableData = [
  {
    name1: "货币市场工具类资产",
    name2: "信用债",
    name3: "长三角",
    name4: "货币市场⼯具类资产",
    name5: "活期存款类",
    zip: "1,999.00",
  },
  {
    name1: "上海分行",
    name2: "信用债",
    name3: "长三角",
    name4: "货币市场⼯具类资产",
    name5: "定期存款类(含⼤额存单)",
    zip: "1,999.00",
  },
  {
    name1: "债权类资产",
    name2: "信用债",
    name3: "长三角",
    name4: "债权类资产",
    name5: "信⽤债",
    zip: "1,999.00",
  },
  {
    name1: "上海分行",
    name2: "资产⽀持证券",
    name3: "长三角",
    name4: "债权类资产",
    name5: "资产⽀持证券",
    zip: "1,999.00",
  },
  {
    name1: "项目类资产",
    name2: "企业债权性资产",
    name3: "长三角",
    name4: "项⽬类资产",
    name5: "企业债权性资产",
    zip: "1,999.00",
  },
  {
    name1: "上海分行",
    name2: "资产市场债权性资产",
    name3: "长三角",
    // name4: '项⽬类资产2',
    name5: "资产市场债权性资产",
    zip: "1,999.00",
  },
  {
    name1: "上海分行",
    name2: "资产市场投资性资产",
    name3: "长三角",
    // name4: '项⽬类资产3',
    name5: "资产市场投资性资产",
    zip: "1,999.00",
  },
  {
    name1: "上海分行",
    name2: "股权类资产",
    name3: "长三角",
    // name4: '项⽬类资产4',
    name5: "股权类资产",
    zip: "1,999.00",
  },
  {
    name1: "上海分行",
    name2: "同业债权性资产",
    name3: "长三角",
    // name4: '项⽬类资产5',
    name5: "同业债权性资产",
    zip: "1,999.00",
  },
  {
    name1: "上海分行",
    name2: "资产⽀持证券类⾮标资产",
    name3: "长三角",
    // name4: '项⽬类资产6',
    name5: "资产⽀持证券类⾮标资产",
    zip: "1,999.00",
  },
  {
    name1: "上海分行",
    name2: "公募REITS",
    name3: "长三角",
    // name4: '项⽬类资产7',
    name5: "公募REITS",
    zip: "1,999.00",
  },
];

// 暂时没用上
export const tableCol = [
  {
    id: 1,
    label: "资产一分类",
    prop: "name1",
    isShow: true,
  },
  {
    id: 2,
    label: "资产二分类",
    prop: "name2",
    isShow: true,
  },
  {
    id: 3,
    label: "资产规模数量(万元)",
    isShow: true,
    children: [
      {
        id: 4,
        label: "期初存量",
        prop: "zip",
        isShow: true,
      },
      {
        id: 5,
        label: "新增投放",
        prop: "zip",
        isShow: true,
      },
      {
        id: 6,
        label: "投放到期",
        prop: "zip",
        isShow: true,
      },
      {
        id: 7,
        label: "净投放",
        prop: "zip",
        isShow: true,
      },
      {
        id: 8,
        label: "期未存量",
        prop: "zip",
        isShow: true,
      },
      {
        id: 9,
        label: "期间均值",
        prop: "zip",
        isShow: true,
      },
    ],
  },
  {
    id: 10,
    label: "加权平均期限(年)",
    isShow: true,
    children: [
      {
        id: 11,
        label: "期初存量",
        prop: "zip",
        isShow: true,
      },
      {
        id: 12,
        label: "新增投放",
        prop: "zip",
        isShow: true,
      },
      {
        id: 13,
        label: "期未存量",
        prop: "zip",
        isShow: true,
      },
    ],
  },
];
