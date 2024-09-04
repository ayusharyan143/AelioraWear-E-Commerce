// import { CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText,createTheme, ThemeProvider } from '@mui/material';
// import { Box } from '@mui/system';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
// import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// import GroupsIcon from '@mui/icons-material/Groups';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Dashboard from './components/Dashboard';
// import CreateProductForm from './components/CreateProductForm';
// import ProductsTable from './components/ProductsTable';
// import OrderTable from './components/OrderTable';
// import CustomersTable from './components/CustomersTable';

// // Define the dark theme
// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

// const menu = [
//   { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
//   { name: "Products", path: "/admin/products", icon: <CardGiftcardIcon /> },
//   { name: "Customers", path: "/admin/customers", icon: <GroupsIcon /> },
//   { name: "Orders", path: "/admin/orders", icon: <LocalGroceryStoreIcon /> },
//   { name: "AddProduct", path: "/admin/product/create", icon: <AddShoppingCartIcon /> },
// ];

// const Admin = () => {
//   const navigate = useNavigate();

//   const drawer = (
//     <Box sx={{
//       overflow: "auto",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-between",
//       height: "100%",
//     }}>
//       <List>
//         {menu.map((item) => (
//           <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
//             <ListItemButton>
//               <ListItemIcon>
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText>
//                 {item.name}
//               </ListItemText>
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <List>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <AccountCircleIcon />
//             </ListItemIcon>
//             <ListItemText>
//               Account
//             </ListItemText>
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <div className='flex h-[100vh]'>
//         <div className='shadow-lg shadow-gray-600 w-[15%] h-full fixed top-0'>
//           {drawer}
//         </div>
//         <div className='w-[85%] h-full ml-[15%]'>
//           <Routes>
//             <Route path='/' element={<Dashboard />} />
//             <Route path='/product/create' element={<CreateProductForm />} />
//             <Route path='/products' element={<ProductsTable />} />
//             <Route path='/orders' element={<OrderTable />} />
//             <Route path='/customers' element={<CustomersTable />} />
//           </Routes>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default Admin;


import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import GroupsIcon from '@mui/icons-material/Groups';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from './components/Dashboard';
import CreateProductForm from './components/CreateProductForm';
import ProductsTable from './components/ProductsTable';
import OrderTable from './components/OrderTable';
import CustomersTable from './components/CustomersTable';


const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <CardGiftcardIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <GroupsIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <LocalGroceryStoreIcon /> },
    { name: "AddProduct", path: "/admin/product/create", icon: <AddShoppingCartIcon /> },
    // { name: "", path: " " },
]


const Admin = () => {

    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"))
    const [sideBarVisible, setSideBarVisible] = useState(false)
    const navigate = useNavigate()

    const drawer = (
        <Box sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%"

        }}
        >

            <>
                {/* {isLargeScreen && <Toolbar />} */}
                <List>
                    {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)} >
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>)}

                </List>
            </>



            <List>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Account
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

            </List>

        </Box>
    )


    return (
        <div>
            <div className='flex h-[100vh] ' >
                <CssBaseline />

                <div className=' shadow-lg shadow-gray-600 w-[15%]  h-full fixed top-0'

                >
                    {drawer}
                </div>

                <div className='w-[85%] h-full ml-[15%]'>
                    <Routes>
                        <Route path='/' element={<Dashboard />} ></Route>
                        <Route path='/product/create' element={<CreateProductForm />} ></Route>
                        <Route path='/products' element={<ProductsTable />} ></Route>
                        <Route path='/orders' element={<OrderTable />} ></Route>
                        <Route path='/customers' element={<CustomersTable />} ></Route>
                    </Routes>
                </div>

            </div>
        </div>
    )
}

export default Admin