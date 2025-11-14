import React from "react";

const RecentActivity = () => {
  // Dummy data matching the design from the attachment
  const transactions = [
    {
      id: 1,
      name: "The Corner Cafe",
      date: "Oct 20, 2023",
      amount: 540.0,
      type: "income",
      category: "food",
      icon: "🍽️",
      bgColor: "bg-teal-900/20",
      iconColor: "text-teal-400",
    },
    {
      id: 2,
      name: "Urban Outfitters",
      date: "Oct 20, 2023",
      amount: -2850.0,
      type: "expense",
      category: "shopping",
      icon: "🛍️",
      bgColor: "bg-purple-900/20",
      iconColor: "text-purple-400",
    },
    {
      id: 3,
      name: "Metro Transit",
      date: "Oct 20, 2023",
      amount: -120.0,
      type: "expense",
      category: "transport",
      icon: "🚌",
      bgColor: "bg-blue-900/20",
      iconColor: "text-blue-400",
    },
    {
      id: 4,
      name: "Freelance Payment",
      date: "Oct 24, 2023",
      amount: 10000.0,
      type: "income",
      category: "work",
      icon: "💼",
      bgColor: "bg-green-900/20",
      iconColor: "text-green-400",
    },
    {
      id: 5,
      name: "Rent Payment",
      date: "Oct 23, 2023",
      amount: -8000.0,
      type: "expense",
      category: "housing",
      icon: "🏠",
      bgColor: "bg-orange-900/20",
      iconColor: "text-orange-400",
    },
  ];

  const formatAmount = (amount) => {
    const formatted = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(Math.abs(amount));

    return amount >= 0 ? `+${formatted}` : `-${formatted}`;
  };

  const getAmountColor = (amount) => {
    return amount >= 0 ? "text-green-400" : "text-red-400";
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
      {/* Header */}
      <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>

      {/* Transaction List */}
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between"
          >
            {/* Left side - Icon and Details */}
            <div className="flex items-center space-x-3">
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-lg ${transaction.bgColor} flex items-center justify-center`}
              >
                <span className={`text-lg ${transaction.iconColor}`}>
                  {transaction.icon}
                </span>
              </div>

              {/* Transaction Details */}
              <div>
                <p className="font-medium text-gray-200 text-sm">
                  {transaction.name}
                </p>
                <p className="text-xs text-gray-400">{transaction.date}</p>
              </div>
            </div>

            {/* Right side - Amount */}
            <div
              className={`font-semibold text-sm ${getAmountColor(
                transaction.amount
              )}`}
            >
              {formatAmount(transaction.amount)}
            </div>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <button className="text-teal-400 text-sm font-medium hover:text-teal-300 transition-colors">
          View all transactions
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;
