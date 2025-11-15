import React, { useState } from "react";
import {
  LogOut,
  Bug,
  MessageCircle,
  Trash2,
  User,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { Sidebar } from "../components/sidebar";
import { useAuth } from "../context/AuthContext";

const Settings = () => {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { user } = useAuth();

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    console.log("Logging out...");
    setShowLogoutConfirm(false);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      console.log("Deleting account...");
    }
  };

  const handleReportBug = () => {
    window.open("https://github.com/kaihere14/Budgenix/issues", "_blank");
  };

  const handleContact = () => {
    console.log("Opening contact...");
  };

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "U";
  };

  return (
    <div className="min-h-screen w-full bg-black flex">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Settings</h1>
          <p className="text-sm text-zinc-400">
            Manage your account preferences and application settings
          </p>
        </header>

        {/* Profile Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-4">
            {/* Profile Picture */}
            <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-medium">
                {user?.username
                  ? getInitial(user.username)
                  : user?.email?.charAt(0).toUpperCase() || "U"}
              </span>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-white mb-1">
                {user?.username || "No Username"}
              </h2>
              <p className="text-zinc-400 text-sm flex items-center gap-2">
                {user?.email || "No email provided"}
              </p>
              <div className="flex items-center gap-2 text-xs text-zinc-500 mt-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>
                  Member since{" "}
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })
                    : "Recently"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Actions */}
        <div className="space-y-3">
          {/* Sign Out */}
          <button
            onClick={handleLogout}
            className="w-full group bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg p-4 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-800 group-hover:bg-zinc-700 rounded-lg flex items-center justify-center transition-colors">
                  <LogOut className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-medium text-sm">Sign Out</h3>
                  <p className="text-zinc-500 text-xs">
                    Sign out of your account
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
          </button>

          {/* Report Issue */}
          <button
            onClick={handleReportBug}
            className="w-full group bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg p-4 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-800 group-hover:bg-zinc-700 rounded-lg flex items-center justify-center transition-colors">
                  <Bug className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-medium text-sm">
                    Report Issue
                  </h3>
                  <p className="text-zinc-500 text-xs">
                    Report bugs or request features
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
          </button>

          {/* Contact Support */}
          <button
            onClick={handleContact}
            className="w-full group bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg p-4 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-800 group-hover:bg-zinc-700 rounded-lg flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-medium text-sm">
                    Contact Support
                  </h3>
                  <p className="text-zinc-500 text-xs">
                    Get help from our support team
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
          </button>

          {/* Delete Account - Danger Zone */}
          <div className="mt-6 pt-6 border-t border-zinc-800">
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-red-400 mb-1">
                Danger Zone
              </h3>
              <p className="text-xs text-zinc-500">Irreversible actions</p>
            </div>
            <button
              onClick={handleDeleteAccount}
              className="w-full group bg-zinc-900 hover:bg-red-950/30 border border-zinc-800 hover:border-red-900/50 rounded-lg p-4 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-800 group-hover:bg-red-950/50 rounded-lg flex items-center justify-center transition-colors">
                    <Trash2 className="w-5 h-5 text-zinc-400 group-hover:text-red-400 transition-colors" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white group-hover:text-red-400 font-medium text-sm transition-colors">
                      Delete Account
                    </h3>
                    <p className="text-zinc-500 text-xs">
                      Permanently delete your account and data
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-red-400 transition-colors" />
              </div>
            </button>
          </div>
        </div>

        {/* Logout Confirmation Modal */}
        {showLogoutConfirm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 max-w-md w-full">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <LogOut className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">
                Sign Out?
              </h3>
              <p className="text-zinc-400 text-sm text-center mb-6">
                Are you sure you want to sign out of your account?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={cancelLogout}
                  className="flex-1 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmLogout}
                  className="flex-1 px-4 py-2 bg-white hover:bg-zinc-100 text-black rounded-lg text-sm font-medium transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Settings;
