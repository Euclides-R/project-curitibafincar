import React from 'react';
import { Button } from '../components';

export default function DefaultLayout({ children, }) {


  return (
    <div className="container">
      <section>{children}</section>
    </div>
  );
}