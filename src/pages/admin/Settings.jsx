import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    username: 'jhustine_doe',
    email: 'jhustine.doe@example.com',
    password: '',
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Settings updated:', settings);
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="container" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <h3>Settings</h3>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={settings.username}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={settings.password}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="notifications" className="form-label">Enable Notifications</label>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="notifications"
                  name="notifications"
                  checked={settings.notifications}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="notifications">Yes</label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;