"use client";

import { MeApi } from "@/utils/api";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from "react";

// Define user interface
interface User {
  id?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  has_subscription?: boolean;
  sub_end_date?: string;
  [key: string]: any; // Allow additional properties
}

// Define context interface
interface AuthContextType {
  user: User;
  hasUser: boolean;
}

// Create context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider props interface
interface AuthProviderProps {
  children: ReactNode;
  user: User,
}

export default function AuthProvider({ children, user }: AuthProviderProps) {
  const [_user, setUser] = useState<User>(user);

  const hasUser = useMemo(() => Object.keys(_user).length > 0, [_user])
  useEffect(
    () => {
      setUser(user)
    },
    [user]
  )

  const contextData: AuthContextType = {
    user: _user,
    hasUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};

// Export the context for direct usage if needed
export { AuthContext, useAuthContext };
