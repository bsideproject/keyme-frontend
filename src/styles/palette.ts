const colorsMains = [
  "#4284E8",
  "#EE8235",
  "#F14567",
  "#51E660",
  "#36E2E3",
  "#BE67E6",
  "#F4B026",
  "#DE2F95",
  "#604EDB",
  "#707070",
];
const colorSubs = [
  "#F2FAFE",
  "#FEF6F2",
  "#FFF0F2",
  "#F1FEF3",
  "#EDFEFE",
  "#FEF4FF",
  "#FEF9F1",
  "#FEF2FD",
  "#F6F3FF",
  "#F0F0F0",
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
