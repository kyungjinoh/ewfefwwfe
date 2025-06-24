import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Section components
import Header from './Header';
import HeroSection from './HeroSection';
import UploadDemo from './UploadDemo';
import HowItWorks from './HowItWorks';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Profile from './Profile';
import ScrollToTop from './ScrollToTop';
import { AuthProvider } from './AuthContext';

function MainPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <UploadDemo />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
