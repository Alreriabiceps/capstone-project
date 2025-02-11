import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Dashboard.css'; // Import the custom CSS file

const Dashboard = () => {
  const billingPreview = [
    { id: 1, name: 'John Doe', amount: '$100' },
    { id: 2, name: 'Jane Smith', amount: '$150' },
  ];

  const smsReminderPreview = [
    { id: 1, name: 'John Doe', message: 'Reminder: Your bill is due soon.' },
    { id: 2, name: 'Jane Smith', message: 'Reminder: Your bill is due soon.' },
  ];

  const customersPreview = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const deadlinesPreview = [
    { id: 1, task: 'Submit monthly report', dueDate: '2025-02-15' },
    { id: 2, task: 'Pay utility bills', dueDate: '2025-02-20' },
  ];

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
                  {customersPreview.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
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