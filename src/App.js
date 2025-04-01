import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="app">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;