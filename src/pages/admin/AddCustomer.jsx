import React from 'react';

const AddCustomer = () => {
  return (
    <div className="container mt-5">
      <h2>Add New Customer</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="accountNumber" className="form-label">Account Number</label>
          <input type="text" className="form-control" id="accountNumber" />
        </div>
        <div className="mb-3">
          <label htmlFor="customerName" className="form-label">Customer Name</label>
          <input type="text" className="form-control" id="customerName" />
        </div>
        <div className="mb-3">
          <label htmlFor="registeredEmail" className="form-label">Registered Email</label>
          <input type="email" className="form-control" id="registeredEmail" />
        </div>
        <div className="mb-3">
          <label htmlFor="currentBillAmount" className="form-label">Current Bill Amount</label>
          <input type="number" className="form-control" id="currentBillAmount" />
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">Due Date</label>
          <input type="date" className="form-control" id="dueDate" />
        </div>
        <div className="mb-3">
          <label htmlFor="billingCycle" className="form-label">Billing Cycle</label>
          <input type="text" className="form-control" id="billingCycle" />
        </div>
        <div className="mb-3">
          <label htmlFor="pastDueBalance" className="form-label">Past Due Balance</label>
          <input type="number" className="form-control" id="pastDueBalance" />
        </div>
        <div className="mb-3">
          <label htmlFor="paymentMethods" className="form-label">Payment Methods</label>
          <select className="form-control" id="paymentMethods">
            <option>Credit Card</option>
            <option>Bank Transfer</option>
            <option>E-Wallet</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="lastPaymentDate" className="form-label">Last Payment Date</label>
          <input type="date" className="form-control" id="lastPaymentDate" />
        </div>
        <div className="mb-3">
          <label htmlFor="paymentConfirmationNumber" className="form-label">Payment Confirmation Number</label>
          <input type="text" className="form-control" id="paymentConfirmationNumber" />
        </div>
        <div className="mb-3">
          <label htmlFor="internetSpeed" className="form-label">Internet Speed</label>
          <input type="text" className="form-control" id="internetSpeed" />
        </div>
        <div className="mb-3">
          <label htmlFor="dataLimit" className="form-label">Data Limit</label>
          <input type="text" className="form-control" id="dataLimit" />
        </div>
        <div className="mb-3">
          <label htmlFor="packageDetails" className="form-label">Package Details</label>
          <input type="text" className="form-control" id="packageDetails" />
        </div>
        <div className="mb-3">
          <label htmlFor="addOns" className="form-label">Add-Ons</label>
          <input type="text" className="form-control" id="addOns" />
        </div>
        <div className="mb-3">
          <label htmlFor="dataConsumption" className="form-label">Data Consumption</label>
          <input type="text" className="form-control" id="dataConsumption" />
        </div>
        <div className="mb-3">
          <label htmlFor="extraCharges" className="form-label">Extra Charges</label>
          <input type="number" className="form-control" id="extraCharges" />
        </div>
        <div className="mb-3">
          <label htmlFor="overageFees" className="form-label">Overage Fees</label>
          <input type="number" className="form-control" id="overageFees" />
        </div>
        <div className="mb-3">
          <label htmlFor="connectionStatus" className="form-label">Connection Status</label>
          <input type="text" className="form-control" id="connectionStatus" />
        </div>
        <div className="mb-3">
          <label htmlFor="troubleshootingSteps" className="form-label">Troubleshooting Steps</label>
          <input type="text" className="form-control" id="troubleshootingSteps" />
        </div>
        <div className="mb-3">
          <label htmlFor="serviceDowntimeCredits" className="form-label">Service Downtime Credits</label>
          <input type="number" className="form-control" id="serviceDowntimeCredits" />
        </div>
        <div className="mb-3">
          <label htmlFor="loyaltyRewards" className="form-label">Loyalty Rewards</label>
          <input type="text" className="form-control" id="loyaltyRewards" />
        </div>
        <div className="mb-3">
          <label htmlFor="referralBonuses" className="form-label">Referral Bonuses</label>
          <input type="text" className="form-control" id="referralBonuses" />
        </div>
        <div className="mb-3">
          <label htmlFor="promotionalOffers" className="form-label">Promotional Offers</label>
          <input type="text" className="form-control" id="promotionalOffers" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddCustomer;