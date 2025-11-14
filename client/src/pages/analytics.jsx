import React, { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Chart } from "../components/categoryCard";

export function Analytics() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("30days");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const timeRanges = [
    { value: "7days", label: "Last 7 days" },
    { value: "30days", label: "Last 30 days" },
    { value: "3months", label: "Last 3 months" },
    { value: "6months", label: "Last 6 months" },
    { value: "year", label: "This year" },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "food", label: "Food & Dining" },
    { value: "shopping", label: "Shopping" },
    { value: "transport", label: "Transportation" },
    { value: "housing", label: "Housing" },
    { value: "entertainment", label: "Entertainment" },
    { value: "utilities", label: "Utilities" },
    { value: "healthcare", label: "Healthcare" },
  ];

  // Dummy data for the spending chart
  const dummyExpenses = [
    { category: "food", amount: 3290, type: "expense" },
    { category: "shopping", amount: 2850, type: "expense" },
    { category: "transport", amount: 1120, type: "expense" },
    { category: "housing", amount: 8000, type: "expense" },
    { category: "entertainment", amount: 599, type: "expense" },
    { category: "utilities", amount: 1250, type: "expense" },
  ];

  return (
    <div className="min-h-screen w-full bg-black flex">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">
            Financial Analytics
          </h1>
          <p className="text-zinc-400">
            Comprehensive insights into your spending patterns and financial
            trends
          </p>
        </div>

        {/* Filters */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Time Range Filter */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Time Range
              </label>
              <select
                className="w-full px-3 py-2 bg-black border border-zinc-600 rounded-lg text-white text-sm focus:outline-none focus:border-zinc-500"
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
              >
                {timeRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Focus Category
              </label>
              <select
                className="w-full px-3 py-2 bg-black border border-zinc-600 rounded-lg text-white text-sm focus:outline-none focus:border-zinc-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="space-y-8">
          {/* Row 1: Spending Overview & Monthly Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Spending by Category Donut Chart */}
            <Chart expenses={dummyExpenses} />

            {/* Monthly Comparison Chart */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-6">
                Monthly Comparison
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800 flex items-center justify-center">
                    <TrendingUpIcon className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-zinc-400 mb-2">Monthly Comparison Chart</p>
                  <p className="text-xs text-zinc-500">
                    Compare spending with previous months
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Spending Trends & Top Expenses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Spending Trends Line Chart */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-6">
                Spending Trends
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800 flex items-center justify-center">
                    <LineChartIcon className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-zinc-400 mb-2">Spending Trends</p>
                  <p className="text-xs text-zinc-500">
                    Track your spending patterns over time
                  </p>
                </div>
              </div>
            </div>

            {/* Top Spending Categories */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-6">
                Top Spending Categories
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800 flex items-center justify-center">
                    <BarChartIcon className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-zinc-400 mb-2">Top Categories</p>
                  <p className="text-xs text-zinc-500">
                    See where you spend the most money
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Income vs Expenses & Budget Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Income vs Expenses Chart */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-6">
                Income vs Expenses
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800 flex items-center justify-center">
                    <CompareIcon className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-zinc-400 mb-2">Income vs Expenses</p>
                  <p className="text-xs text-zinc-500">
                    Compare your income and spending patterns
                  </p>
                </div>
              </div>
            </div>

            {/* Budget Performance */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-6">
                Budget Performance
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800 flex items-center justify-center">
                    <TargetIcon className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-zinc-400 mb-2">Budget Performance</p>
                  <p className="text-xs text-zinc-500">
                    Track how well you stick to your budgets
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Weekly Pattern & Expense Growth */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Weekly Spending Pattern */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-6">
                Weekly Spending Pattern
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800 flex items-center justify-center">
                    <CalendarIcon className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-zinc-400 mb-2">Weekly Patterns</p>
                  <p className="text-xs text-zinc-500">
                    Discover your spending habits by day of week
                  </p>
                </div>
              </div>
            </div>

            {/* Expense Growth Rate */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-6">
                Expense Growth Rate
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800 flex items-center justify-center">
                    <GrowthIcon className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-zinc-400 mb-2">Growth Analysis</p>
                  <p className="text-xs text-zinc-500">
                    Monitor how your expenses change over time
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 5: Financial Goals & Savings Rate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Financial Goals Progress */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-6">
                Financial Goals Progress
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800 flex items-center justify-center">
                    <GoalIcon className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-zinc-400 mb-2">Goals Progress</p>
                  <p className="text-xs text-zinc-500">
                    Track progress towards your financial goals
                  </p>
                </div>
              </div>
            </div>

            {/* Savings Rate Analysis */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white mb-6">
                Savings Rate Analysis
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800 flex items-center justify-center">
                    <PiggyBankIcon className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-zinc-400 mb-2">Savings Analysis</p>
                  <p className="text-xs text-zinc-500">
                    Monitor your savings rate and trends
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Icon Components
function TrendingUpIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  );
}

function LineChartIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );
}

function BarChartIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );
}

function CompareIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
      />
    </svg>
  );
}

function TargetIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function CalendarIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function GrowthIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  );
}

function GoalIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  );
}

function PiggyBankIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}
