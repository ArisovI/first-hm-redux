import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { State } from "../../store/firstTodoReducer";
import ProductItem from "../../components/ProductItem";
import CartItem from "../../components/CartItem";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Shop() {
  const [value, setValue] = React.useState(0);
  const products = useSelector((state: State) => state.shop);
  const cart = useSelector((state: State) => state.cart);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Products" {...a11yProps(0)} />
          <Tab label="Cart: 1" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ul className="products">
          {products.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul className="carts">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      </TabPanel>
    </Box>
  );
}
