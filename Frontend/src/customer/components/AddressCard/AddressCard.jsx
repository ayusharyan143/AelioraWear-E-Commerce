import React from 'react';
import { Button } from '@mui/material';

const AddressCard = ({ address, onDeliverHere }) => {
  // Check if the URL contains 'step=3'
  const shouldHideButton1 = window.location.href.includes("step=3");
  const shouldHideButton2 = window.location.href.includes("/account/order/");

  return (
    <div className='border rounded-md p-4 mb-4'>
      <div className='flex justify-center mb-2'>
        <h2 className='text-lg font-bold'>Delivery Address</h2>
      </div>
      <div className='mb-2'>
        <p className='font-semibold'>Name:</p>
        <p>{address?.firstName} {address?.lastName}</p>
      </div>
      <div className='mb-2'>
        <p className='font-semibold'>Address:</p>
        <p>{address?.streetAddress}, {address?.city}, {address?.state}, {address?.zipCode}</p>
      </div>
      <div className='mb-2'>
        <p className='font-semibold'>Phone:</p>
        <p>{address?.mobile}</p>
      </div>
      {(!shouldHideButton1 && !shouldHideButton2) && (
        <Button 
          sx={{ mt: 2, bgcolor: "RGB(154 85 253)" }} 
          size='large' 
          variant='contained'
          onClick={() => onDeliverHere(address)}
        >
          Deliver Here
        </Button>
      )}
    </div>
  );
};

export default AddressCard;
