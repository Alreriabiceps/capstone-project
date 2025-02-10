import React from 'react';


const Customers = () => {
  return (
    <div className="container mt-5">
      <h2>Customers</h2>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Account Number</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Registered Email</th>
            <th scope="col">Current Bill Amount</th>
            <th scope="col">Due Date</th>
            <th scope="col">Payment Methods</th>
            <th scope="col">Last Payment Date</th>
            <th scope="col">Payment Confirmation Number</th>
            <th scope="col">Internet Speed</th>
            <th scope="col">Data Limit</th>
            <th scope="col">Package Details</th>
          </tr>
        </thead>
        <tbody>
          {/* Add customer rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;