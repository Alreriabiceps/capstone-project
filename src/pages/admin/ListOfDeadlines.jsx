import React from 'react';

const ListOfDeadlines = () => {
  const deadlines = [
    { id: 1, customerName: 'John Doe', description: 'Submit monthly usage report', dueDate: '2025-02-15' },
    { id: 2, customerName: 'Jane Smith', description: 'Pay network maintenance fees', dueDate: '2025-02-20' },
    { id: 3, customerName: 'Alice Johnson', description: 'Renew service contracts', dueDate: '2025-02-25' },
    { id: 4, customerName: 'Bob Brown', description: 'Client meeting for service review', dueDate: '2025-02-28' },
  ];

  return (
    <div className="container mt-5">
      <h2>Customer Deadlines</h2>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Description</th>
            <th scope="col">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {deadlines.map((deadline) => (
            <tr key={deadline.id}>
              <th scope="row">{deadline.id}</th>
              <td>{deadline.customerName}</td>
              <td>{deadline.description}</td>
              <td>{deadline.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfDeadlines;