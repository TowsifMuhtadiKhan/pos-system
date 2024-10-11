import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Tab,
  Tabs,
  Grid,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type CategoryName = "Fast Food" | "Rice Items" | "Ice Cream" | "Drinks";
interface Item {
  name: string;
  quantity: string;
  price: string;
}
interface Item {
  name: string;
  quantity: string;
  price: string;
}
interface CartItem {
  name: string;
  quantity: number; // Changed to number for internal state handling
  price: string;
}
type CategoryData = Record<CategoryName, Item[]>;

const categoryData: CategoryData = {
  "Fast Food": [
    { name: "Burger", quantity: "1", price: "$5" },
    { name: "Fries", quantity: "2", price: "$3" },
    { name: "Chicken Nuggets", quantity: "6 pieces", price: "$4" },
    { name: "Hot Dog", quantity: "1", price: "$3" },
    { name: "Pizza Slice", quantity: "1 slice", price: "$2" },
  ],
  "Rice Items": [
    { name: "Fried Rice", quantity: "1", price: "$8" },
    { name: "Biryani", quantity: "1", price: "$10" },
    { name: "Rice Bowl", quantity: "1", price: "$7" },
    { name: "Risotto", quantity: "1", price: "$9" },
    { name: "Paella", quantity: "1", price: "$12" },
  ],
  "Ice Cream": [
    { name: "Vanilla", quantity: "1 scoop", price: "$2" },
    { name: "Chocolate", quantity: "2 scoops", price: "$4" },
    { name: "Strawberry", quantity: "1 scoop", price: "$2" },
    { name: "Mint Chocolate", quantity: "2 scoops", price: "$4" },
    { name: "Cookie Dough", quantity: "1 scoop", price: "$3" },
  ],
  Drinks: [
    { name: "Coke", quantity: "1 bottle", price: "$1" },
    { name: "Coffee", quantity: "1 cup", price: "$2" },
    { name: "Green Tea", quantity: "1 cup", price: "$1.50" },
    { name: "Smoothie", quantity: "1 glass", price: "$5" },
    { name: "Water", quantity: "1 bottle", price: "$1" },
  ],
};

const MainComponent = () => {
  const [selectedTab, setSelectedTab] = useState<CategoryName>("Fast Food");
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState<CartItem[]>([]); // Specified type here
  const currentItem = { name: "Burger", price: "$5" }; // Example item

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddItem = () => {
    setItems([...items, { ...currentItem, quantity }]);
    handleClose();
  };

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: CategoryName
  ) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#ff7706", // Set the color of the bottom indicator here
          },
        }}
        sx={{
          ".MuiTab-root": {
            "&.Mui-selected": {
              color: "#ff7706",
            },
          },
        }}
      >
        <Tab label="Fast Food" value="Fast Food" />
        <Tab label="Rice Items" value="Rice Items" />
        <Tab label="Ice Cream" value="Ice Cream" />
        <Tab label="Drinks" value="Drinks" />
      </Tabs>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {categoryData[selectedTab].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography color="textSecondary">
                  Quantity: {item.quantity}
                </Typography>
                <Typography color="#ff7706" fontWeight={500}>
                  Price: {item.price}
                </Typography>

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
                  onClick={handleClickOpen}
                >
                  Add
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "400px",
            maxWidth: "100%",
          },
        }}
      >
        <DialogTitle>Add Quantity</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label="Quantity"
            type="number"
            fullWidth
            variant="standard"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "red",
              color: "white",
              "&:hover": {
                backgroundColor: "darkred",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddItem}
            sx={{
              backgroundColor: "#ff7706",
              color: "white",
              "&:hover": {
                backgroundColor: "#e06600",
              },
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MainComponent;
