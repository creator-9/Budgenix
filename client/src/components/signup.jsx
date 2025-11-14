import { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  function handleInputChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      onSubmit?.({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md">
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-white mb-1">
              Create Account
            </h1>
            <p className="text-sm text-zinc-400">
              Join us and take control of your finances
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-zinc-500" />
                </div>
                <input
                  type="text"
                  className={`w-full pl-10 pr-4 py-2.5 bg-black border rounded-md text-white text-sm placeholder-zinc-500 focus:outline-none transition ${
                    errors.fullName
                      ? "border-red-500 focus:border-red-400"
                      : "border-zinc-800 focus:border-zinc-600"
                  }`}
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  required
                  autoComplete="name"
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon className="h-5 w-5 text-zinc-500" />
                </div>
                <input
                  type="email"
                  className={`w-full pl-10 pr-4 py-2.5 bg-black border rounded-md text-white text-sm placeholder-zinc-500 focus:outline-none transition ${
                    errors.email
                      ? "border-red-500 focus:border-red-400"
                      : "border-zinc-800 focus:border-zinc-600"
                  }`}
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon className="h-5 w-5 text-zinc-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`w-full pl-10 pr-16 py-2.5 bg-black border rounded-md text-white text-sm placeholder-zinc-500 focus:outline-none transition ${
                    errors.password
                      ? "border-red-500 focus:border-red-400"
                      : "border-zinc-800 focus:border-zinc-600"
                  }`}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-medium text-zinc-400 hover:text-white transition"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon className="h-5 w-5 text-zinc-500" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={`w-full pl-10 pr-16 py-2.5 bg-black border rounded-md text-white text-sm placeholder-zinc-500 focus:outline-none transition ${
                    errors.confirmPassword
                      ? "border-red-500 focus:border-red-400"
                      : "border-zinc-800 focus:border-zinc-600"
                  }`}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-medium text-zinc-400 hover:text-white transition"
                  onClick={() => setShowConfirmPassword((s) => !s)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-white hover:bg-zinc-100 text-black font-medium py-2.5 px-4 rounded-md transition text-sm"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
            <p className="text-sm text-zinc-400">
              Already have an account?{" "}
              <Link to="/login" className="text-white hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icon Components
function UserIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-8.5 9.5A2.75 2.75 0 0 1 6.25 11h11.5A2.75 2.75 0 0 1 20.5 13.75v.75c0 3.25-2.75 5.5-8.5 5.5s-8.5-2.25-8.5-5.5v-.75zm2.75-1.25A1.25 1.25 0 0 0 5 13.75v.75c0 2.25 2 3.5 7 3.5s7-1.25 7-3.5v-.75A1.25 1.25 0 0 0 17.75 12.25H6.25z" />
    </svg>
  );
}

function MailIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M3.75 5.5h16.5A1.75 1.75 0 0 1 22 7.25v9.5A1.75 1.75 0 0 1 20.25 18.5H3.75A1.75 1.75 0 0 1 2 16.75v-9.5A1.75 1.75 0 0 1 3.75 5.5zm.8 2.25 6.96 4.41a1.75 1.75 0 0 0 1.98 0l6.96-4.41a.25.25 0 0 0-.14-.45H4.69a.25.25 0 0 0-.14.45z" />
    </svg>
  );
}

function LockIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.5a4.5 4.5 0 0 1 4.5 4.5v2h.75A1.75 1.75 0 0 1 19 10.75v7.5A1.75 1.75 0 0 1 17.25 20H6.75A1.75 1.75 0 0 1 5 18.25v-7.5A1.75 1.75 0 0 1 6.75 9h.75V7A4.5 4.5 0 0 1 12 2.5zm0 1.5A3 3 0 0 0 9 7v2h6V7a3 3 0 0 0-3-3z" />
    </svg>
  );
}
