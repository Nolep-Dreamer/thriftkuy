import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

export default function App() {
  // slicing
  // const slicing = true;
  // if (slicing) {
  //   return <LoginPage />;
  // }

  // protected route
  // const authUser = null;
  // if (authUser === null) {
  //   return <LoginPage />;
  // }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
