import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";
import { borderSizes } from "./borders";
import { fontSizes, fontWeights, fontFamily } from "./fonts";
import {
  PCMaxWidth,
  heightWithoutAppBar,
  tabletWidth,
  PCPadding,
  MobilePadding,
  ScreenPaddingY,
} from "./app-dimensions";

const theme = createTheme({
  palette: {
    colors,
    background: {
      default: colors.bg.primary,
    },
  },
  shape: {
    borderRadius: borderSizes,
  },
  dimensions: {
    PCMaxWidth,
    heightWithoutAppBar,
    tabletWidth,
    PCPadding,
    MobilePadding,
    ScreenPaddingY,
  },
  mixins: {
    toolbar: {
      minHeight: 76,
      maxHeight: 80,
    },
  },
  fonts: {
    fontFamily,
    fontSizes,
    fontWeights,
  },
  typography: {
    fontFamily: fontFamily.inter,
    screenLabel: {
      fontSize: fontSizes.size25,
      fontWeight: fontWeights.bold,
    },
    body1: { fontSize: fontSizes.size15 },
    body2: { fontSize: fontSizes.size13 },
  },
});

export default theme;
