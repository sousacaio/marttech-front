import React, { createContext, useState, useEffect, useContext } from 'react';
import { LoginCredentials } from '../interfaces/Auth/LoginCredentials';

import * as api from '../services/api';
import authService from '../services/authService';

interface AuthContextData {
  signed: boolean;
  user: LoginCredentials | null;
  Login(user: LoginCredentials): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<LoginCredentials | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(userData: LoginCredentials) {
    const response = await authService.login(userData)
    console.log(response)
    setUser(response.user);
    api.defaults.headers.Authorization = `Bearer ${response.access_token}`;

    sessionStorage.setItem('@App:user', JSON.stringify(response.user));
    sessionStorage.setItem('@App:token', response.access_token);
  }

  function Logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}