import React from "react";
import {
  ThemeProvider,
  Button,
  Typography,
  Select,
  Link,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  TextField
} from "@material-ui/core";
import theme from "./theme";
import {
  ErrorOutline,
  HelpOutline,
  Lock,
  Save,
  ArrowBack
} from "@material-ui/icons";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width={1}
        bgcolor="#F5F5F5"
      >
        <Box
          display="flex"
          borderRadius={10}
          boxShadow="24"
          height={500}
          width={800}
          bgcolor="#fff"
          overflow="hidden"
        >
          <Box
            width="50%"
            height="100%"
            bgcolor="#3165D4"
            zIndex="tooltip"
            textAlign="left"
          >
            <Box padding="45px">
              <Button
                variant="text"
                size="large"
                startIcon={<ArrowBack />}
                style={{
                  color: "#fff"
                }}
              >
                Back to start
              </Button>
              <Typography
                variant="h2"
                style={{
                  color: "#fff",
                  paddingTop: "50px"
                }}
              >
                Local profile explained:
              </Typography>
              <Box display="flex" alignItems="center" marginTop="32px">
                <Lock
                  fontSize="large"
                  style={{
                    color: "#fff"
                  }}
                ></Lock>
                <Typography
                  variant="body1"
                  style={{
                    color: "#fff",
                    opacity: "0.83",
                    marginLeft: "24px"
                  }}
                >
                  Encrypt your lite mode coins, locally, on this computer only.
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" marginTop="32px">
                <Save
                  fontSize="large"
                  style={{
                    color: "#fff"
                  }}
                ></Save>
                <Typography
                  variant="body1"
                  style={{
                    color: "#fff",
                    opacity: "0.83",
                    marginLeft: "24px"
                  }}
                >
                  Saves all Verus Desktop settings under your profile.
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                style={{
                  maxWidth: "270px",
                  marginTop: "110px"
                }}
              >
                <ErrorOutline
                  style={{
                    color: "#fff",
                    opacity: "0.83"
                  }}
                ></ErrorOutline>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "#fff",
                    opacity: "0.83",
                    marginLeft: "12px"
                  }}
                >
                  Always keep a secure backup of your seed, private keys and
                  wallet.dat file.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            width="50%"
            height="100%"
            bgcolor="#fff"
            zIndex="tooltip"
            textAlign="left"
          >
            <Box padding="45px">
              <Typography
                variant="h2"
                style={{
                  color: "#272727",
                  paddingTop: "95px"
                }}
              >
                Choose a name for your profile
              </Typography>
              <FormControl
                class={{
                  width: "100%"
                }}
              >
                <TextField
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    marginBottom: "26px"
                  }}
                ></TextField>
              </FormControl>
              <Button
                variant="contained"
                size="large"
                color="primary"
                style={{
                  width: "100%"
                }}
              >
                Next step
              </Button>

              <Box
                display="flex"
                alignItems="center"
                style={{
                  maxWidth: "270px",
                  marginTop: "110px"
                }}
              >
                <HelpOutline
                  style={{
                    color: "#000",
                    opacity: "0.83"
                  }}
                ></HelpOutline>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "#000",
                    opacity: "0.83",
                    marginLeft: "12px",
                    maxWidth: "250px"
                  }}
                >
                  Need help? Go to{" "}
                  <Link href="#" underline="always" color="inherit">
                    support Wiki
                  </Link>{" "}
                  or interact with our community on{" "}
                  <Link href="#" underline="always" color="inherit">
                    Discord
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
