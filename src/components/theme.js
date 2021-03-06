const colors = {
  // light: {
  //   grays: [
  //     "rgb(230,228,225)",
  //     "rgb(208,207,204)",
  //     "rgb(143,142,141)",
  //     "rgb(78,78,77)",
  //     "rgb(35,35,35)"
  //   ],
  //   green: "#067979",
  //   greenDark: "#005454",
  //   greenFaded: "rgba(6,121,121,0.1)",
  //   greenFadedDark: "rgba(6,121,121,0.5)",
  //   orange: "#CC3D29",
  //   orangeDark: "#801000",
  //   orangeFaded: "rgba(204,61,41,0.1)",
  //   yellow: "#f9bc60",
  //   white: "#fffffe",
  //   background: "#fff",
  //   text: "rgb(78,78,77)",
  //   textMuted: "rgba(78,78,77, 0.8)",
  //   headlines: "rgb(35,35,35)",
  //   linkColor: "rgb(6,121,121)",
  //   linkUnderlineColor: "rgba(6,121,121,0.33)",
  //   codeBackground: "rgb(35,35,35)",
  //   codeText: "rgb(230,228,225)",
  //   modalBackground: "#fff"
  // },
  dark: {
    grays: [
      "rgb(51,51,51)",
      "rgb(78,78,78)",
      "rgb(143,142,141)",
      "rgb(166,165,163)",
      "rgb(204,202,200)"
    ],
    background: "rgb(27,25,24)",
    text: "rgb(220,220,220)",
    textMuted: "rgba(220,220,220, 0.75)",
    headlines: "rgb(220,220,220)",
    linkColor: "rgb(167,165,165)",
  }
};
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
const screenSizes = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
const fonts = {
  sansSerif: "aktiv-grotesk, Helvetica, Arial, sans-serif",
  serif: 'Georgia, Times, "Times New Roman", serif',
  monoSpace: 'Consolas, monaco, monospace',
  headline: 'aktiv-grotesk, sans-serif'
};

const fontSizes = [
  "0.563rem",
  "0.75rem",
  "1rem",
  "1.333rem",
  "1.777rem",
  "2.369rem",
  "3.157rem",
  "4.209rem"
];

const fontWeights = {
  light: "300",
  normal: "400",
  bold: "800",
  black: "800"
};

export const BaseTheme = {
  // light: {
  //   themeName: "light",
  //   colors: colors.light,
  //   fonts: fonts,
  //   fontSizes: fontSizes,
  //   fontWeights: fontWeights,
  //   screenSizes: screenSizes
  // },
  dark: {
    themeName: "dark",
    colors: colors.dark,
    fonts: fonts,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    screenSizes: screenSizes
  }
};
