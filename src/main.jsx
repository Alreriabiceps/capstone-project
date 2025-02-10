import './index.css';
import * as bootstrap from 'bootstrap';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GuestLayout from './layouts/GuestLayout.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import AdminDashboard from './pages/admin/Dashboard.jsx';
import Login from './pages/Login.jsx';
import AdminBilling from './pages/admin/Billing.jsx';
import AdminCustomers from './pages/admin/Customers.jsx';
import AddCustomer from './pages/admin/AddCustomer.jsx';
import SMSReminder from './pages/admin/SMSReminder.jsx';
import ListOfDeadlines from './pages/admin/ListOfDeadlines.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="billing" element={<AdminBilling />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="add-customer" element={<AddCustomer />} />
          <Route path="sms-reminder" element={<SMSReminder />} />
          <Route path="list-deadlines" element={<ListOfDeadlines />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);