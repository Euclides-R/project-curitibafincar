import React from 'react';

export default function DefaultLayout({ children }) {
  return (
    <div className="container">
      <section>{children}</section>
    </div>
  );
}