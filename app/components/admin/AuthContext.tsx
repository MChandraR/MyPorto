"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CookieService } from "../../utils/CookieService";

interface AuthContextProps {
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
  checkSessionWithAPI: (token: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Placeholder function to check token validity against API
  const checkSessionWithAPI = async (currentToken: string): Promise<boolean> => {
    // TODO: Implement actual API check call here
    // e.g. const res = await fetch("http://127.0.0.1:5000/api/check-session", { headers: { Authorization: currentToken } });
    // return res.ok;
    console.log("[Auth] Placeholder function checking session token validity with API...");
    return true; // Return true as dummy/placeholder response
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const localToken = localStorage.getItem("auth-token");
        const cookieToken = CookieService.getCookie("auth-token");

        // Auth provider confirms session is valid if token is found in localStorage
        if (localToken && cookieToken && localToken === cookieToken) {
          // Verify with placeholder function
          const isValid = await checkSessionWithAPI(localToken);
          if (isValid) {
            setTokenState(localToken);
            setIsAuthenticated(true);
          } else {
            // Token mismatch or invalid session
            logout();
          }
        } else {
          // Sync tokens if only one is present or clear if none
          if (localToken) {
            // Local token exists, sync cookie
            CookieService.setCookie("auth-token", localToken, 7);
            setTokenState(localToken);
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        }
      } catch (err) {
        console.error("Auth initialization error:", err);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = (newToken: string) => {
    localStorage.setItem("auth-token", newToken);
    CookieService.setCookie("auth-token", newToken, 7); // Save cookie for 7 days
    setTokenState(newToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    CookieService.eraseCookie("auth-token");
    setTokenState(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, loading, login, logout, checkSessionWithAPI }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
