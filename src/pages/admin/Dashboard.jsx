import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import './Dashboard.css'; // Import the custom CSS file

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [billingPreview, setBillingPreview] = useState([]);
  const [smsReminderPreview, setSmsReminderPreview] = useState([]);
  const [deadlinesPreview, setDeadlinesPreview] = useState([]);

  useEffect(() => {
    fetchCustomers();
    fetchBillingPreview();
    fetchSmsReminderPreview();
    fetchDeadlinesPreview();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const fetchBillingPreview = async () => {
    // Fetch billing preview data from your API
    // Example:
    // const response = await axios.get('http://localhost:3000/api/billing-preview');
    // setBillingPreview(response.data);
  };

  const fetchSmsReminderPreview = async () => {
    // Fetch SMS reminder preview data from your API
    // Example:
    // const response = await axios.get('http://localhost:3000/api/sms-reminder-preview');
    // setSmsReminderPreview(response.data);
  };

  const fetchDeadlinesPreview = async () => {
    // Fetch deadlines preview data from your API
    // Example:
    // const response = await axios.get('http://localhost:3000/api/deadlines-preview');
    // setDeadlinesPreview(response.data);
  };

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'New Customers',
        backgroundColor: '#00ADB5',
        borderColor: '#00ADB5',
        borderWidth: 1,
        hoverBackgroundColor: '#00ADB5',
        hoverBorderColor: '#00ADB5',
        data: [65, 59, 80, 81, 56, 55],
      },
      {
        label: 'Leaving Customers',
        backgroundColor: '#393E46',
        borderColor: '#393E46',
        borderWidth: 1,
        hoverBackgroundColor: '#393E46',
        hoverBorderColor: '#393E46',
        data: [28, 48, 40, 19, 86, 27],
      },
    ],
  };

  return (
    <div className="container-fluid mt-5 pb-5">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-md-4" style={{ height: '100vh' }}>
          <div className="card text-white bg-dark mb-3 h-100">
            <div className="card-header">Customers</div>
            <div className="card-body overflow-auto">
              <h5 className="card-title">Manage Customers</h5>
              <p className="card-text">View and manage customer information.</p>
              <table className="table table-sm table-dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={customer._id}>
                      <td>{index + 1}</td>
                      <td>{customer.firstName} {customer.lastName}</td>
                      <td>{customer.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a href="/admin/customers" className="btn btn-light">Go to Customers</a>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card text-white bg-dark h-100">
                <div className="card-header">Billing</div>
                <div className="card-body">
                  <h5 className="card-title">Manage Billing</h5>
                  <p className="card-text">View and manage customer billing details.</p>
                  <table className="table table-sm table-dark">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {billingPreview.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <a href="/admin/billing" className="btn btn-light">Go to Billing</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card text-white bg-dark h-100">
                <div className="card-header">SMS Reminder</div>
                <div className="card-body">
                  <h5 className="card-title">Send SMS Reminders</h5>
                  <p className="card-text">Send reminders to customers via SMS.</p>
                  <table className="table table-sm table-dark">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {smsReminderPreview.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <a href="/admin/sms-reminder" className="btn btn-light">Go to SMS Reminder</a>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="card text-white bg-dark h-100">
                <div className="card-header">Deadlines</div>
                <div className="card-body">
                  <h5 className="card-title">View Deadlines</h5>
                  <p className="card-text">Check upcoming deadlines for tasks and payments.</p>
                  <table className="table table-sm table-dark">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Due Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deadlinesPreview.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.task}</td>
                          <td>{item.dueDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <a href="/admin/list-deadlines" className="btn btn-light">Go to Deadlines</a>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="card text-white bg-dark h-100">
                <div className="card-header">Customer Trends</div>
                <div className="card-body">
                  <h5 className="card-title">New and Leaving Customers</h5>
                  {/* <Bar data={chartData} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;