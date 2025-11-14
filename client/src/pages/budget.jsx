import React, { useState } from "react";
import { Sidebar } from "../components/sidebar";

export function Budget() {
  const [editingBudget, setEditingBudget] = useState(false);
  const [budgetData, setBudgetData] = useState({
    totalBudget: 40000,
    categories: {
      food: { allocated: 8000, spent: 3290 },
      shopping: { allocated: 5000, spent: 2850 },
      transport: { allocated: 3000, spent: 1120 },
      housing: { allocated: 15000, spent: 8000 },
      entertainment: { allocated: 4000, spent: 599 },
      utilities: { allocated: 3000, spent: 1250 },
      healthcare: { allocated: 2000, spent: 0 },
    },
  });

  const [tempBudget, setTempBudget] = useState(budgetData);

  // Calculate totals
  const totalAllocated = Object.values(budgetData.categories).reduce(
    (sum, cat) => sum + cat.allocated,
    0
  );

  const totalSpent = Object.values(budgetData.categories).reduce(
    (sum, cat) => sum + cat.spent,
    0
  );

  const remainingBudget = budgetData.totalBudget - totalSpent;
  const unallocatedBudget = budgetData.totalBudget - totalAllocated;

  const categoryIcons = {
    food: { icon: "🍽️", name: "Food & Dining", color: "text-teal-400" },
    shopping: { icon: "🛍️", name: "Shopping", color: "text-purple-400" },
    transport: { icon: "🚌", name: "Transportation", color: "text-blue-400" },
    housing: { icon: "🏠", name: "Housing", color: "text-orange-400" },
    entertainment: { icon: "🎬", name: "Entertainment", color: "text-red-400" },
    utilities: { icon: "⚡", name: "Utilities", color: "text-yellow-400" },
    healthcare: { icon: "🏥", name: "Healthcare", color: "text-green-400" },
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getProgressPercentage = (spent, allocated) => {
    return allocated > 0 ? Math.min((spent / allocated) * 100, 100) : 0;
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 90) return "bg-red-500";
    if (percentage >= 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  const handleSaveBudget = () => {
    setBudgetData(tempBudget);
    setEditingBudget(false);
  };

  const handleCancelEdit = () => {
    setTempBudget(budgetData);
    setEditingBudget(false);
  };

  const updateCategoryBudget = (category, amount) => {
    setTempBudget((prev) => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: {
          ...prev.categories[category],
          allocated: Math.max(0, parseInt(amount) || 0),
        },
      },
    }));
  };

  const updateTotalBudget = (amount) => {
    setTempBudget((prev) => ({
      ...prev,
      totalBudget: Math.max(0, parseInt(amount) || 0),
    }));
  };

  return (
    <div className="min-h-screen w-full bg-black flex">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white mb-2">
              Budget Management
            </h1>
            <p className="text-zinc-400">
              Track your monthly budget and spending across categories
            </p>
          </div>

          {!editingBudget ? (
            <button
              onClick={() => setEditingBudget(true)}
              className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Edit Budget
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleCancelEdit}
                className="px-6 py-3 bg-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveBudget}
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Budget Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <h3 className="text-sm font-medium text-zinc-400 mb-2">
              Monthly Budget
            </h3>
            {editingBudget ? (
              <input
                type="number"
                value={tempBudget.totalBudget}
                onChange={(e) => updateTotalBudget(e.target.value)}
                className="w-full text-2xl font-semibold bg-transparent text-white border-b border-zinc-600 focus:outline-none focus:border-white"
              />
            ) : (
              <p className="text-2xl font-semibold text-white">
                {formatAmount(budgetData.totalBudget)}
              </p>
            )}
          </div>

          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <h3 className="text-sm font-medium text-zinc-400 mb-2">
              Total Spent
            </h3>
            <p className="text-2xl font-semibold text-red-400">
              {formatAmount(totalSpent)}
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              {((totalSpent / budgetData.totalBudget) * 100).toFixed(1)}% of
              budget
            </p>
          </div>

          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <h3 className="text-sm font-medium text-zinc-400 mb-2">
              Remaining
            </h3>
            <p
              className={`text-2xl font-semibold ${
                remainingBudget >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {formatAmount(remainingBudget)}
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              {remainingBudget >= 0 ? "Under budget" : "Over budget"}
            </p>
          </div>

          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <h3 className="text-sm font-medium text-zinc-400 mb-2">
              Unallocated
            </h3>
            <p
              className={`text-2xl font-semibold ${
                unallocatedBudget >= 0 ? "text-yellow-400" : "text-red-400"
              }`}
            >
              {formatAmount(unallocatedBudget)}
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              {unallocatedBudget >= 0
                ? "Available to allocate"
                : "Over-allocated"}
            </p>
          </div>
        </div>

        {/* Budget Progress Overview */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">
            Overall Budget Progress
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Total Budget Usage</span>
              <span className="text-white font-medium">
                {formatAmount(totalSpent)} /{" "}
                {formatAmount(budgetData.totalBudget)}
              </span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(
                  (totalSpent / budgetData.totalBudget) * 100
                )}`}
                style={{
                  width: `${Math.min(
                    (totalSpent / budgetData.totalBudget) * 100,
                    100
                  )}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-zinc-500">
              <span>0%</span>
              <span className="font-medium">
                {((totalSpent / budgetData.totalBudget) * 100).toFixed(1)}%
              </span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Category Budgets */}
        <div className="bg-zinc-900 rounded-lg border border-zinc-800">
          <div className="p-6 border-b border-zinc-800">
            <h2 className="text-xl font-semibold text-white">
              Category Budgets
            </h2>
          </div>

          <div className="divide-y divide-zinc-800">
            {Object.entries(
              editingBudget ? tempBudget.categories : budgetData.categories
            ).map(([categoryKey, category]) => {
              const categoryInfo = categoryIcons[categoryKey];
              const progressPercentage = getProgressPercentage(
                category.spent,
                category.allocated
              );
              const remaining = category.allocated - category.spent;

              return (
                <div key={categoryKey} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                        <span className="text-lg">{categoryInfo.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">
                          {categoryInfo.name}
                        </h3>
                        <p className="text-sm text-zinc-400">
                          {formatAmount(category.spent)} spent of{" "}
                          {formatAmount(category.allocated)}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      {editingBudget ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-zinc-400">₹</span>
                          <input
                            type="number"
                            value={category.allocated}
                            onChange={(e) =>
                              updateCategoryBudget(categoryKey, e.target.value)
                            }
                            className="w-24 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:border-zinc-600"
                          />
                        </div>
                      ) : (
                        <>
                          <p
                            className={`text-lg font-semibold ${
                              remaining >= 0 ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            {formatAmount(remaining)}
                          </p>
                          <p className="text-sm text-zinc-400">
                            {remaining >= 0 ? "remaining" : "over budget"}
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {!editingBudget && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-400">Progress</span>
                        <span className="text-white font-medium">
                          {progressPercentage.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(
                            progressPercentage
                          )}`}
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Budget Tips */}
        {unallocatedBudget !== 0 && (
          <div className="mt-8 bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <h3 className="text-lg font-semibold text-white mb-3">
              Budget Tips
            </h3>
            {unallocatedBudget > 0 ? (
              <div className="flex items-start gap-3 p-4 bg-yellow-900/20 border border-yellow-800 rounded-lg">
                <span className="text-yellow-400 text-xl">💡</span>
                <div>
                  <p className="text-yellow-200 font-medium">
                    Unallocated Budget
                  </p>
                  <p className="text-yellow-300 text-sm">
                    You have {formatAmount(unallocatedBudget)} unallocated in
                    your budget. Consider allocating this amount to specific
                    categories for better financial planning.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-3 p-4 bg-red-900/20 border border-red-800 rounded-lg">
                <span className="text-red-400 text-xl">⚠️</span>
                <div>
                  <p className="text-red-200 font-medium">
                    Over-allocated Budget
                  </p>
                  <p className="text-red-300 text-sm">
                    Your category allocations exceed your total budget by{" "}
                    {formatAmount(Math.abs(unallocatedBudget))}. Consider
                    reducing some category budgets or increasing your total
                    budget.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
