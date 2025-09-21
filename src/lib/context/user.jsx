// src/lib/context/user.js
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "./appwrite"; // make sure appwrite.js is correctly configured

const UserContext = createContext();

export function useUser() {  // custom hook for easier context access
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  // Login
  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession(email, password);   // pehle se registered user ke liye
      const currentUser = await account.get();
      setUser(currentUser);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // Logout
  const logout = async () => {
    try {
      await account.deleteSession("current"); // active user session ko delete karo
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  // Register
  const register = async (email, password) => { 
    try {
      await account.create("unique()", email, password); // register new user
      await login(email, password); // automatically login after registration
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // Initialize current user
  useEffect(() => {
    const initUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);  // Done loading
      }
    };
    initUser();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
}
