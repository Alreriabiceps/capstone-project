import React from 'react';
import './Login.css'; // Import the custom CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-content">
          <div className="login-card">
            <h2 className="card-title text-center">Sign In</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign In
              </button>
            </form>
            <div className="login-footer">
              <p className="text-center">
                Robcom inc. &copy; 2025. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;