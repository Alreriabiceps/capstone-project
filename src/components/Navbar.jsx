import React from 'react';
import './Navbar.css'; // Import the custom CSS file
import profilePicture from '../assets/sample.jpg'; // Import the profile picture

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="/admin">Robcom</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/admin">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/admin/billing">Billing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Customers
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="/admin/add-customer">Add new customer</a></li>
                                <li><a className="dropdown-item" href="/admin/customers">View Customers</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/admin/sms-reminder">SMS Reminder</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/admin/list-deadlines">List of Deadlines</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={profilePicture} alt="Profile" className="rounded-circle me-2" style={{ width: '30px', height: '30px' }} />
                                Jhustine
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="/admin/profile">Profile</a></li>
                                <li><a className="dropdown-item" href="/admin/settings">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Log Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;