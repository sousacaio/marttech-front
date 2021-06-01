import React, { createContext, useState, useEffect, useContext } from 'react';
import { LoginCredentials } from '../interfaces/Auth/LoginCredentials';
import { SignUpUser } from '../interfaces/Auth/SignupInterface';
import { IUser } from '../interfaces/User/User';

import * as api from '../services/api';
import authService from '../services/authService';
import userService from '../services/user-service';

interface AuthContextData {
  signed: boolean;
  user: IUser | null;
  Login(user: LoginCredentials): Promise<IUser>;
  Logout(): void;
  SignUp(user: SignUpUser): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(userData: LoginCredentials): Promise<IUser> {
    const response = await authService.login(userData)
    setUser(response.user);
    api.defaults.headers.Authorization = `Bearer ${response.access_token}`;

    sessionStorage.setItem('@App:user', JSON.stringify(response.user));
    sessionStorage.setItem('@App:token', response.access_token);
    return response.user
  }

  function Logout() {
    setUser(null);
    sessionStorage.clear()
  }

  async function SignUp(user: SignUpUser) {
    const response = await userService.create(user);
    console.log(response)
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout, SignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}