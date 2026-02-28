import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

import { useData } from './context/DataContext';

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useData();
  if (!isAdmin) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <Router>
      <div className="relative min-h-screen selection:bg-primary/30 selection:text-white bg-[#000319]">
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
