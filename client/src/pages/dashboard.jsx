import { useState } from "react";
import RecentActivity from "../components/recentActivity";
export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-black flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-white">
            Welcome back, Alex
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Here's your financial overview for this month
          </p>
        </header>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <StatCard
            title="Total Spend this Month"
            value={15820}
            trend="down"
            trendText="-2.5% vs last month"
          />
          <StatCard
            title="Monthly Budget Remaining"
            value={24180}
            trend="up"
            trendText="58% left to spend"
          />

          <RecentActivity />
        </section>
      </main>
    </div>
  );
}

function Sidebar() {
  const [selected, setSelected] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
    { id: "transactions", label: "Transactions", icon: TransactionsIcon },
    { id: "budgets", label: "Budgets", icon: BudgetsIcon },
    { id: "analytics", label: "Analytics", icon: AnalyticsIcon },
    { id: "settings", label: "Settings", icon: SettingsIcon },
  ];

  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
      <div className="py-6 px-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <span className="text-black font-bold text-sm">F</span>
          </div>
          <span className="text-white font-semibold text-lg">Finance</span>
        </div>
      </div>

      <nav className="flex-1 py-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition ${
              selected === item.id
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">A</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              Alex Johnson
            </p>
            <p className="text-xs text-zinc-400 truncate">alex@company.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function StatCard({ title, value, trend, trendText }) {
  const isPositive = trend === "up";

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-zinc-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-white">
            ${value.toLocaleString()}
          </p>
          <div className="mt-3 flex items-center gap-1.5">
            {isPositive ? (
              <ArrowUpIcon
                className={
                  "w-4 h-4 " + (isPositive ? "text-green-400" : "text-red-400")
                }
              />
            ) : (
              <ArrowDownIcon
                className={
                  "w-4 h-4 " + (isPositive ? "text-green-400" : "text-red-400")
                }
              />
            )}
            <span
              className={
                "text-sm " + (isPositive ? "text-green-400" : "text-red-400")
              }
            >
              {trendText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardIcon({ className }) {
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
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}

function TransactionsIcon({ className }) {
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
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  );
}

function BudgetsIcon({ className }) {
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

function AnalyticsIcon({ className }) {
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

function SettingsIcon({ className }) {
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
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function ArrowUpIcon({ className }) {
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
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  );
}

function ArrowDownIcon({ className }) {
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
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
}
