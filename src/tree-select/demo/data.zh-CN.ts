const zhejiang = [
  {
    text: '杭州',
    id: 1
  },
  {
    text: '温州',
    id: 2
  }
];

const jiangsu = [
  {
    text: '南京',
    id: 3
  },
  {
    text: '无锡',
    id: 4
  }
];

const fujian = [
  {
    text: '泉州',
    id: 9
  },
  {
    text: '厦门',
    id: 10
  }
];

export const zhCNData = [
  {
    text: '浙江',
    children: zhejiang
  },
  {
    text: '江苏',
    children: jiangsu
  },
  {
    text: '福建',
    disabled: true,
    children: fujian
  }
];
