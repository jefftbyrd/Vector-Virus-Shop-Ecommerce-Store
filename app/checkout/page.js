import { notFound } from 'next/navigation';
import React from 'react';
// import { getVirusesInsecure } from '../../database/viruses';
// import { getCookie } from '../../util/cookies';
// import { parseJson } from '../../util/json';
// import RemoveFromCart from './cartActions';
import AddCustomerInfo from './AddCustomerInfo';

export const metadata = {
  title: 'Checkout',
  description: 'Generated by create next app',
};

export default function CheckoutPage() {
  return (
    <>
      <h1>Checkout</h1>
      <AddCustomerInfo />
    </>
  );
}
