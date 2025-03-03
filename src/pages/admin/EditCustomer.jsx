import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const EditCustomer = ({ onCustomerAdded }) => {
  const { customerId } = useParams();
  const [formData, setFormData] = useState({
    accountNumber: '',
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    barangay: '',
    town: '',
    landmark: '',
    mobile: '',
    email: '',
    plan: 'Plan A',
    dateInstalled: '',
    installer: '',
    dueDate: '',
    napLocation: '',
    power: '',
    focLength: ''
  });

  useEffect (() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/customers/${customerId}`);
      if (response){
        setFormData(response.data);
      }
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData); // Log form data to ensure it's being captured correctly
    try {
      const response = await axios.put(`http://localhost:3000/api/customers/${customerId}`, formData);
      console.log('Edit Succesful:', response.data);
      alert('Customer Update Succesfully!');
      // Reset the form
      setFormData({
        accountNumber: '',
        firstName: '',
        middleName: '',
        lastName: '',
        address: '',
        barangay: '',
        town: '',
        landmark: '',
        mobile: '',
        email: '',
        plan: 'Plan A',
        dateInstalled: '',
        installer: '',
        dueDate: '',
        napLocation: '',
        power: '',
        focLength: ''
      });
      // Call the callback function to update the customer list
      onCustomerAdded();
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2>Edit Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="accountNumber" className="form-label">Account Number</label>
            <input type="text" className="form-control" id="accountNumber" value={formData.accountNumber} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="middleName" className="form-label">Middle Name</label>
            <input type="text" className="form-control" id="middleName" value={formData.middleName} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="barangay" className="form-label">Barangay</label>
            <input type="text" className="form-control" id="barangay" value={formData.barangay} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="town" className="form-label">Town</label>
            <input type="text" className="form-control" id="town" value={formData.town} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="landmark" className="form-label">Landmark</label>
            <input type="text" className="form-control" id="landmark" value={formData.landmark} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="mobile" className="form-label">Mobile #</label>
            <input type="text" className="form-control" id="mobile" value={formData.mobile} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="plan" className="form-label">Plan</label>
            <select className="form-control" id="plan" value={formData.plan} onChange={handleChange}>
              <option value="Plan A">Plan A</option>
              <option value="Plan B">Plan B</option>
              <option value="Plan C">Plan C</option>
              {/* Add more plan options here */}
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="dateInstalled" className="form-label">Date Installed</label>
            <input type="date" className="form-control" id="dateInstalled" value={formData.dateInstalled} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="installer" className="form-label">Installer</label>
            <input type="text" className="form-control" id="installer" value={formData.installer} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="dueDate" className="form-label">Due Date</label>
            <input type="date" className="form-control" id="dueDate" value={formData.dueDate} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="napLocation" className="form-label">NAP Location</label>
            <input type="text" className="form-control" id="napLocation" value={formData.napLocation} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="power" className="form-label">Power</label>
            <input type="text" className="form-control" id="power" value={formData.power} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="focLength" className="form-label">FOC Length</label>
            <input type="text" className="form-control" id="focLength" value={formData.focLength} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mb-5">Submit</button>
      </form>
    </div>
  );
};

export default EditCustomer;