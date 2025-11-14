import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useDocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const getPageTitle = (pathname) => {
      const routes = {
        "/": "Welcome - FinBuddy",
        "/dashboard": "Dashboard - FinBuddy",
        "/transactions": "Transactions - FinBuddy",
        "/budget": "Budget - FinBuddy",
        "/analytics": "Analytics - FinBuddy",
        "/settings": "Settings - FinBuddy",
        "/login": "Login - FinBuddy",
        "/signup": "Sign Up - FinBuddy",
        "/contact": "Contact - FinBuddy",
        "/features": "Features - FinBuddy",
      };

      return routes[pathname] || "FinBuddy";
    };

    document.title = getPageTitle(location.pathname);
  }, [location.pathname]);
};
