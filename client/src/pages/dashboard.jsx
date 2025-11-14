import { useState } from "react";
import RecentActivity from "../components/recentActivity";
import { Sidebar } from "../components/sidebar";
import { StatCard } from "../components/card";

export function Dashboard() {
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
        <section className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivity />
            {/* Future: Add spending category chart or other components here */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">
                Spending Overview
              </h3>
              <p className="text-gray-400">Chart placeholder</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
