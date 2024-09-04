import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../customer/State/Admin/Order/Action';
import { Avatar, AvatarGroup,  Card, CardHeader,  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrderTableView = () => {

  const dispatch = useDispatch();
  const { adminOrder } = useSelector(store => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    
  }, [adminOrder.orders]);


 
  


  return (
    <div className='p-10'>
      <Card className="mt-2 bg-[#1b1b1b]">
        <CardHeader title="Recent Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item) => (
                <TableRow
                  key={item?._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="">
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar key={orderItem.product?._id} src={orderItem.product?.imageUrl} />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {item.orderItems.map((orderItem) => (
                      <p key={orderItem.product?._id}>{orderItem.product?.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">{item?._id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full ${item.orderStatus === 'CONFIRMED'
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

                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTableView;
