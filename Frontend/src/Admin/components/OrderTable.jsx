import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../customer/State/Admin/Order/Action';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrderTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const { orders } = useSelector(store => store.adminOrder); // Assuming 'adminOrder' contains 'orders'

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const handleClick = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };

  const refreshOrders = () => {
    dispatch(getOrders());
  };

  const handleShipedOrder = () => {
    if (selectedOrderId) {
      dispatch(shipOrder(selectedOrderId)).then(refreshOrders);
      handleClose();
    }
  };

  const handleConfirmedOrder = () => {
    if (selectedOrderId) {
      dispatch(confirmOrder(selectedOrderId)).then(refreshOrders);
      handleClose();
    }
  };

  const handleDeliverdOrder = () => {
    if (selectedOrderId) {
      dispatch(deliveredOrder(selectedOrderId)).then(refreshOrders);
      handleClose();
    }
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId)).then(refreshOrders);
  };

  return (
    <div className='p-10'>
      <Card className="mt-2 bg-[#1b1b1b]">
        <CardHeader title="All Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders?.map((item) => (
                <TableRow
                  key={item?._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar key={orderItem.product?._id} src={orderItem.product?.imageUrl} />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left">
                    {item.orderItems.map((orderItem) => (
                      <p key={orderItem.product?._id}>{orderItem.product?.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">{item?._id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full ${
                        item.orderStatus === 'CONFIRMED'
                          ? 'bg-[#28a745]'
                          : item.orderStatus === 'SHIPPED'
                          ? 'bg-[#007bff]'
                          : item.orderStatus === 'PLACED'
                          ? 'bg-[#ffc107]'
                          : item.orderStatus === 'PENDING'
                          ? 'bg-[#dc3545]'
                          : 'bg-[#6c757d]'
                      }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      id={`basic-button-${item?._id}`}
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={(event) => handleClick(event, item?._id)}
                    >
                      Status
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl && selectedOrderId === item?._id)}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': `basic-button-${item?._id}`,
                      }}
                    >
                      <MenuItem onClick={handleConfirmedOrder}>Confirmed Order</MenuItem>
                      <MenuItem onClick={handleShipedOrder}>Shipped Order</MenuItem>
                      <MenuItem onClick={handleDeliverdOrder}>Delivered Order</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button onClick={() => handleDeleteOrder(item?._id)} variant="outlined">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTable;
