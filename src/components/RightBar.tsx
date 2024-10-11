import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, Divider, Typography } from "@mui/material";

const RightBar: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dateString = currentDateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const timeString = currentDateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  return (
    <Box
      style={{
        width: "500px",
        background: "white",
        boxShadow: "-8px 0 10px -6px rgba(0, 0, 0, 0.3)",
        position: "relative", // Ensures that the absolute positioning is relative to this box
        borderRadius: " 30px 0px 0px 0",
      }}
      p={2}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        borderColor={"1px solid #ff7706"}
      >
        <Box bgcolor={"#ff7706"} p={1} borderRadius={"10px"} color={"white"}>
          {timeString}
        </Box>
        <Box bgcolor={"#ff7706"} p={1} borderRadius={"10px"} color={"white"}>
          {dateString}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        border={"1px solid #e3e3e3"}
        mt={2}
        p={"15px"}
        borderRadius={"14px"}
      >
        <Box>
          <Typography fontSize={"20px"} fontWeight={700}>
            Current Order
          </Typography>
        </Box>
        <Box>
          <Typography fontSize={"14px"} fontWeight={400}>
            Current Cashier : Roert Smith
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 1, // Anchors the box to the bottom
          width: "90%",
          background: "#f7f7f7",
          borderRadius: "10px",
          border: "1px solid #dcdcdc",
          padding: "10px",
          height: "200px",
        }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>Item</Box>
          <Box>% Item</Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>Sub Total</Box>
          <Box>% Item</Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>Discount</Box>
          <Box>% Item</Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>Tax</Box>
          <Box>% Item</Box>
        </Box>
        <Divider sx={{ py: 1 }} />
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>Total</Box>
          <Box>% Item</Box>
        </Box>

        <Button
          sx={{
            width: "100%", // Makes the button full width
            backgroundColor: "#ff7706", // Sets the background color to a specific shade of orange
            color: "white", // Sets the text color to white
            "&:hover": {
              backgroundColor: "#e06600", // Darker shade on hover for better user interaction
            },
            marginTop: "20px",
          }}
        >
          Proceed To Pay
        </Button>
      </Box>
    </Box>
  );
};

export default RightBar;
