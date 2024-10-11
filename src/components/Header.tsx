import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
const Header: React.FC = () => {
  return (
    <header style={{ height: "80px", background: "white" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ height: "100%" }}
        px={2}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {" "}
          <RestaurantMenuIcon
            sx={{ marginRight: 1, color: "#ff7706" }}
            fontSize="large"
          />
          <Typography fontSize={"24px"} fontWeight={700}>
            Restaurant POS System
          </Typography>
        </Box>
        <Box>
          <AccountCircleIcon fontSize="large" />
        </Box>
      </Box>
    </header>
  );
};

export default Header;
