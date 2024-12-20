/* eslint-disable react/prop-types */
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { tokens } from "../../../theme";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  DashboardOutlined,
  DonutLargeOutlined,
  HelpOutlineOutlined,
  MapOutlined,
  MenuOutlined,
  PeopleAltOutlined,
  PersonOutlined,
  ReceiptOutlined,
  TimelineOutlined,
  WavesOutlined,
} from "@mui/icons-material";
import logo from "../../../assets/images/logo.png";
import Item from "./Item";
import { ToggledContext } from "../../../App";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { toggled, setToggled } = useContext(ToggledContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Sidebar
      backgroundColor={colors.primary[600]}
      rootStyles={{
        border: 0,
        height: "100vh",
      }}
      collapsed={collapsed}
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="md"
    >
      <Menu
        menuItemStyles={{
          button: { ":hover": { background: "transparent" } },
        }}
      >
        <MenuItem
          rootStyles={{
            margin: "10px 0 20px 0",
            color: colors.gray[100],
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                alignItems="center"
                gap="10px"
                sx={{ transition: ".3s ease" }}
              >
                <img
                  style={{ width: "30px", height: "30px", borderRadius: "8px" }}
                  src={logo}
                  alt="Argon"
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  textTransform="capitalize"
                  color="#157bf8"
                >
                  MP
                </Typography>
              </Box>
            )}
            <IconButton onClick={() => setCollapsed(!collapsed)}>
              <MenuOutlined />
            </IconButton>
          </Box>
        </MenuItem>
      </Menu>

      <Box mb={5} px={collapsed ? undefined : "5%"}>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: colors.gray[300],
                background: "rgba(134, 141, 251, 0.1)",
                transition: ".4s ease",
                borderRadius: "15px",
              },
            },
          }}
        >
          <Item
            title="Dashboard"
            path="/"
            colors={colors}
            icon={<DashboardOutlined />}
          />
        </Menu>
        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "10px 0 5px 10px" }}
        >
          {!collapsed ? "Manage accounts" : " "}
        </Typography>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: colors.gray[300],
                background: "rgba(134, 141, 251, 0.1)",
                transition: ".4s ease",
                borderRadius: "15px",
              },
            },
          }}
        >
          <Item
            title="Accounts"
            path="/team"
            colors={colors}
            icon={<PeopleAltOutlined />}
          />
          <Item
            title="Contacts Information"
            path="/contacts"
            colors={colors}
            icon={<ContactsOutlined />}
          />
          {/* <Item
            title="Invoices Balances"
            path="/invoices"
            colors={colors}
            icon={<ReceiptOutlined />}
          /> */}
        </Menu>
        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "10px 0 5px 10px" }}
        >
          {!collapsed ? "Digitals footprints" : " "}
        </Typography>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: colors.gray[300],
                background: "rgba(134, 141, 251, 0.1)",
                transition: ".4s ease",
                borderRadius: "15px",
              },
            },
          }}
        >
          <Item
            title="Data"
            path="/form"
            colors={colors}
            icon={<PersonOutlined />}
          />
          <Item
            title="Graphs"
            path="/calendar"
            colors={colors}
            icon={<CalendarTodayOutlined />}
          />
          <Item
            title="FAQ Page"
            path="/login"
            colors={colors}
            icon={<HelpOutlineOutlined />}
          />
        </Menu>
        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "10px 0 5px 10px" }}
        >
          {!collapsed ? "Map" : " "}
        </Typography>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: colors.gray[300],
                background: "rgba(134, 141, 251, 0.1)",
                transition: ".4s ease",
                borderRadius: "15px",
              },
            },
          }}
        >
          <Item
            title="Cyber attack map"
            path="/bar"
            colors={colors}
            icon={<BarChartOutlined />}
          />
          {/* <Item
            title="Pie Chart"
            path="/pie"
            colors={colors}
            icon={<DonutLargeOutlined />}
          />
          <Item
            title="Line Chart"
            path="/line"
            colors={colors}
            icon={<TimelineOutlined />}
          />
          <Item
            title="Geography Chart"
            path="/geography"
            colors={colors}
            icon={<MapOutlined />}
          />
          <Item
            title="Stream Chart"
            path="/stream"
            colors={colors}
            icon={<WavesOutlined />}
          /> */}
        </Menu>
      </Box>
    </Sidebar>
  );
};

export default SideBar;
