import React from 'react'
import reactLogo from '../assets/react.svg'
import { Outlet } from "react-router";

const GuestLayout = () => {
    return (
        <div>
            <div className="">
            <img src={reactLogo} className="logo" alt="React Logo" />
            <Outlet />
            </div>
        </div>
    )
}

export default GuestLayout