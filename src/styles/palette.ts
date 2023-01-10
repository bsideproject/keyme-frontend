interface Color {
  main: string;
  sub: string;
}

const colorsMains = [
  "#4284E8",
  "#EE8235",
  "#F14567",
  "#51E660",
  "#36E2E3",
  "#BE67E6",
  "#F5AA11",
  "#E81C93",
  "#4D36EA",
  "#F3F5FB",
];
const colorSubs = [
  "#F2FAFE",
  "#FEF6F2",
  "#FDEFF1",
  "#F1FEF3",
  "#EDFEFE",
  "#FEF4FF",
  "#F2FAFE",
  "#FEF6F2",
  "#FDEFF1",
  "#F1FEF3",
  "#EDFEFE",
  "#FEF4FF",
];

export const basicColor = ["#222222", "#707070", "#DADADA", "#C2C202", "#FFFFFF"];

export const palette = {
  primary: "#335BF0",

  font: {
    black01: "#222",
  },
  todo: {
    blue01: "#36E2E3",
    blue02: "#4284E8",
    purple01: "#BE67E6",
    purple02: "#604EDB",
    yellow01: "#F4B026",
    yellow02: "#EE8235",
    red01: "#EE8235",
    red02: "#DE2F95",
    green01: "#51E660",
    gray01: "#707070",
  },

  colors: colorsMains.map((v, idx) => {
    return {
      main: v,
      sub: colorSubs[idx],
    };
  }),
};

// 기존 컬러
const categoryBackgroundColor = ["#F2FAFE", "#FEF6F2", "#FDEFF1", "#F1FEF3", "#EDFEFE", "#FEF4FF"];
const categoryTextColor = ["#4284E8", "#F08538", "#EE4E6E", "#71E07C", "#4CD2D3", "#CA82EC"];
