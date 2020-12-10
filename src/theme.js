import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3165D4"
    },
    secondary: {
      main: "#D4313E",
      contrastText: "#fff"
    }
  },
  typography: {
    h1: {
      fontFamily: "Source Sans Pro, sans-serif",
      fontSize: "1.7rem",
      fontWeight: "600",
      lineHeight: "2.2rem"
    },
    h2: {
      fontFamily: "Source Sans Pro, sans-serif",
      fontSize: "1.3rem",
      fontWeight: "600",
      lineHeight: "1.7rem"
    },
    body1: {
      fontFamily: "Source Sans Pro, sans-serif",
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.5rem"
    },
    subtitle1: {
      fontFamily: "Source Sans Pro, sans-serif",
      fontSize: "0.8rem",
      fontWeight: "400",
      lineHeight: "1.2rem"
    }
  }
});

theme.props = {
  MuiButtonBase: {},
  MuiButton: {
    disableElevation: true,
    disableRipple: true,
    disableFocusRipple: true
  },
  MuiInputLabel: {
    shrink: true
  },
  MuiInput: {
    disableUnderline: true
  },
  MuiTooltip: {
    arrow: true
  }
};

theme.overrides = {
  MuiButton: {
    focusVisible: {
      outline: "2px solid #9CBCFF",
      outlineOffset: "-4px"
    },
    root: {
      fontFamily: "Source Sans Pro, sans-serif",
      borderRadius: 7,
      textTransform: "none",
      transition: "all 0.05s",
      fontWeight: 600
    },
    containedPrimary: {
      "&:active": {
        backgroundColor: "#1949AE",
        transform: "translateY(1px)"
      },
      "&:hover": {
        backgroundColor: "#265AC8",
        color: "#FFF"
      }
    },
    textPrimary: {
      color: "#272727",
      "&:active": {
        color: "#000",
        transform: "translateY(1px)"
      },
      "&:hover": {
        color: "#171717",
        backgroundColor: "transparent"
      }
    },
    containedSecondary: {
      color: "#fff",
      "&:active": {
        color: "#fff",
        backgroundColor: "#B71F2B",
        transform: "translateY(1px)"
      },
      "&:hover": {
        backgroundColor: "#C52835",
        color: "#fff"
      }
    },
    containedSizeLarge: {
      fontSize: "1rem",
      paddingTop: "12px",
      paddingBottom: "12px"
    },
    containedSizeSmall: {
      borderRadius: "5px",
      fontSize: "14px",
      padding: "5px 18px 5px 18px"
    },
    textSizeSmall: {
      borderRadius: "5px",
      fontSize: "14px",
      padding: "5px 18px 5px 18px"
    },
    textSizeLarge: {
      fontSize: "1rem",
      fontWeight: "400",
      "&:hover": {
        backgroundColor: "transparent",
        opacity: "0.83"
      }
    }
  },
  MuiInput: {
    root: {
      paddingLeft: "15px",
      color: "#383838",
      fontSize: "1rem",
      top: theme.spacing(1),
      backgroundColor: "#EEEEEE",
      border: "1px solid #9F9F9F",
      borderRadius: 5,
      paddingTop: "12px",
      paddingBottom: "12px",
      "&$focused": {
        border: "1px solid #000",
        backgroundColor: "#fff"
      },
      "&:hover": {
        border: "1px solid #000"
      }
    }
  },
  MuiInputLabel: {
    root: {
      fontSize: "1rem",
      color: "#383838",
      "&$focused": {
        color: "#383838"
      }
    }
  },
  selectMenu: {
    color: "#272727"
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: "#202020",
      padding: theme.spacing(1),
      color: "#fff",
      fontSize: "0.75rem"
    },
    arrow: {
      color: "#202020"
    }
  },
  Typography: {
    MuiTypography: {
      h1: {
        fontSize: "24px",
        color: "#fff"
      }
    }
  },
  MuiLink: {
    underlineAlways: {
      "&:hover": {
        opacity: "0.8"
      }
    }
  }
};

export default theme;
