import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCustomer from './AddCustomer'; // Import the AddCustomer component
import './Customers.css'; // Import the CSS file
import { Link } from 'react-router';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('firstName');
  
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleFilterChange = (e) => setFilter(e.target.value);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        await axios.delete(`http://localhost:3000/api/customers/${id}`);
        fetchCustomers();
      } catch (error) {
        console.error('Error deleting customer:', error);
      }
    }
  };

 

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  

  const filteredCustomers = customers.filter((customer) =>
    customer[filter]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2>Customers</h2>
        <div>
          <div className="mb-3 d-flex">
            <select className="form-select me-2" value={filter} onChange={handleFilterChange}>
              <option value="firstName">First Name</option>
              <option value="middleName">Middle Name</option>
              <option value="lastName">Last Name</option>
              <option value="email">Email</option>
              <option value="accountNumber">Account Number</option>
            </select>
            <input type="text" className="form-control" placeholder={`Search by ${filter}`} value={searchTerm} onChange={handleSearchChange} />
          </div>
          <table className="table table-striped table-dark customers-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Account Number</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Barangay</th>
                <th>Town</th>
                <th>Landmark</th>
                <th>Mobile #</th>
                <th>Email</th>
                <th>Plan</th>
                <th>Date Installed</th>
                <th>Installer</th>
                <th>Due Date</th>
                <th>NAP Location</th>
                <th>Power</th>
                <th>FOC Length</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, index) => (
                <tr key={customer._id}>
                  <td>{index + 1}</td>
                  <td>{customer.accountNumber}</td>
                  <td>{customer.firstName}</td>
                  <td>{customer.middleName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.address}</td>
                  <td>{customer.barangay}</td>
                  <td>{customer.town}</td>
                  <td>{customer.landmark}</td>
                  <td>{customer.mobile}</td>
                  <td>{customer.email}</td>
                  <td>{customer.plan}</td>
                  <td>{customer.dateInstalled ? new Date(customer.dateInstalled).toLocaleDateString() : 'N/A'}</td>
                  <td>{customer.installer}</td>
                  <td>{customer.dueDate ? new Date(customer.dueDate).toLocaleDateString() : 'N/A'}</td>
                  <td>{customer.napLocation}</td>
                  <td>{customer.power}</td>
                  <td>{customer.focLength}</td>
                  <td>
                    <Link to={`/admin/customers/${customer._id}/edit`} className="btn btn-info">View</Link>
                    <button className="btn btn-danger ms-2" onClick={() => handleDelete(customer._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Customers;