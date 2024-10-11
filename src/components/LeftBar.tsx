import React from "react";
import Box from "@mui/material/Box";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import IcecreamIcon from "@mui/icons-material/Icecream";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import LiquorIcon from "@mui/icons-material/Liquor";

import CustomIconButton from "../helperComponent/CustomIconBox";
const LeftBar: React.FC = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      p={2}
      style={{
        width: "60px",
        background: "#1a1a1a",
        borderRadius: " 0 30px 30px 0",
      }}
    >
      <CustomIconButton icon={<FastfoodIcon />} iconSize={30} />
      <CustomIconButton icon={<IcecreamIcon />} iconSize={30} />
      <CustomIconButton icon={<RamenDiningIcon />} iconSize={30} />
      <CustomIconButton icon={<LiquorIcon />} iconSize={30} />
    </Box>
  );
};

export default LeftBar;
