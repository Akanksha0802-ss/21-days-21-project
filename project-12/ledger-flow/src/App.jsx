import React from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import Balances from "./Balances";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-700 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-blue-300">Personal Ledger</h1>
          <p className="text-amber-50">
            Manage your income and expenses in one place
          </p>
        </header>
        <Balances />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Form */}
          <div className="lg:col-span-4 sticky top-8">
            <TransactionForm />
          </div>

          {/* Right Side: List */}
          <div className="lg:col-span-8">
            <TransactionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;