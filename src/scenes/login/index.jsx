import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  IconButton,
  InputAdornment,
  Alert,
  Snackbar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState, createContext } from "react";
import Logo from "../../assets/images/logo.png";
import Anningmang from "../../assets/images/anninhmang.jpg";
import { getUserAccount } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const ToggledContext = createContext(null);
const Login = () => {
  // Theme
  const [theme, colorMode] = useMode();
  //   const [toggled, setToggled] = useState(false);
  //   const values = { toggled, setToggled };
  //================

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await getUserAccount();
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleLogin = () => {
    setUsernameError(false);
    setPasswordError(false);
    setError("");

    if (!username) {
      setUsernameError(true);
      return;
    }
    if (!password) {
      setPasswordError(true);
      return;
    }
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      navigate("/");
    } else {
      setError("Invalid username or password");
      setSnackbarOpen(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Card
            sx={{
              display: "flex",
              width: "90%",
              maxWidth: "900px",
              m: "2rem",
              boxShadow: 3,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: "20px",
                  }}
                >
                  <img
                    src={Logo}
                    alt="logo"
                    style={{
                      width: "50px",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
                <Typography
                  component="div"
                  variant="h2"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Welcome to MP
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{
                    color: "text.secondary",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Sign In to continue
                </Typography>
              </CardContent>

              <Box sx={{ m: "10px", p: "10px" }}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: "20px" }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  error={usernameError}
                  helperText={usernameError ? "Username is required" : ""}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={passwordError}
                  helperText={passwordError ? "Password is required" : ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember me"
                  sx={{ mb: "20px" }}
                />

                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    mb: "20px",
                    backgroundColor: "#3544ff",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#2533cc", // Màu nền khi hover
                      color: "#e0e0e0", // Màu chữ khi hover
                    },
                  }}
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{
                maxWidth: "50%",
                objectFit: "cover",
              }}
              image={Anningmang}
              alt="Live from space album cover"
            />
          </Card>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "right" }} // Vị trí hiển thị
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="error"
              sx={{ width: "100%" }}
            >
              {error}
            </Alert>
          </Snackbar>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Login;
