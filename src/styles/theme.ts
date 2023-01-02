interface Theme {
  primary: string;
  secondary: string;
  bgColor: string;
  textColor: string;
}

interface ThemeGroup {
  light: Theme;
  dark: Theme;
}

export const light: Theme = {
  primary: "#335BF0",
  bgColor: "#fff",
  textColor: "#000",
  secondary: "green",
};

export const dark: Theme = {
  primary: "#fff",
  bgColor: "#1e1f21",
  textColor: "#fff",
  secondary: "green",
};

const theme: ThemeGroup = {
  light,
  dark,
};

export default theme;
