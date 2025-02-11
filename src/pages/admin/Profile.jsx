import React, { useState } from 'react';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('name');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const customers = [
    // Add customer data here
  ];

  const filteredCustomers = customers.filter((customer) =>
    customer[filter].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2>Customers</h2>
      <div className="mb-3 d-flex">
        <select
          className="form-select me-2"
          value={filter}
          onChange={handleFilterChange}
          style={{ maxWidth: '300px', height: '38px', backgroundColor: '#222831', color: '#EEEEEE', border: '1px solid #EEEEEE' }}
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="accountNumber">Account Number</option>
        </select>
        <input
          type="text"
          className="form-control"
          style={{ maxWidth: '300px', height: '38px', backgroundColor: '#222831', color: '#EEEEEE', border: '1px solid #EEEEEE' }}
          placeholder={`Search by ${filter}`}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
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
          {filteredCustomers.map((customer, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{customer.accountNumber}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.currentBillAmount}</td>
              <td>{customer.dueDate}</td>
              <td>{customer.paymentMethods}</td>
              <td>{customer.lastPaymentDate}</td>
              <td>{customer.paymentConfirmationNumber}</td>
              <td>{customer.internetSpeed}</td>
              <td>{customer.dataLimit}</td>
              <td>{customer.packageDetails}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;