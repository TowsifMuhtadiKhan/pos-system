import React from "react";
import { IconButton, IconButtonProps, SxProps, Theme } from "@mui/material";

interface CustomIconButtonProps extends IconButtonProps {
  icon: React.ReactElement;
  iconSize?: number;
  sx?: SxProps<Theme>;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  icon,
  iconSize = 24,
  sx,
  ...props
}) => {
  return (
    <IconButton
      {...props}
      sx={{
        color: "#f87713",
        "&:hover": {
          borderRadius: "50px",
          paddingLeft: 0, // Remove padding from the left
          paddingRight: 0, // Remove padding from the right
          backgroundColor: "#ff7706",
          color: "#ffffff",
        },
        ...sx,
      }}
    >
      {React.cloneElement(icon, {
        style: { fontSize: iconSize, color: "#dcdcdc" },
        ...icon.props,
      })}
    </IconButton>
  );
};

export default CustomIconButton;
