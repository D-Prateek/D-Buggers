import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Quiz from './components/pages/Quiz';
import Marketplace from './components/pages/Marketplace';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const saved = localStorage.getItem('loggedInUser');
    return saved ? JSON.parse(saved) : null;
  });
  const [currentPage, setCurrentPage] = useState(() => localStorage.getItem('currentPage') || 'home');

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    } else {
      localStorage.removeItem('loggedInUser');
    }
  }, [loggedInUser]);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  const handleLoginSuccess = (userData: any) => {
    setLoggedInUser(userData);
    setCurrentPage('services');
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setCurrentPage('home');
  };

  const handlePageChange = (page: string) => {
    if (page === 'services' && !loggedInUser) {
      setCurrentPage('signin');
    } else {
      setCurrentPage(page);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={handlePageChange} isLoggedIn={!!loggedInUser} />;
      case 'about':
        return <About />;
      case 'services':
        return loggedInUser ? <Services onPageChange={handlePageChange} /> : <SignIn onPageChange={handlePageChange} onLoginSuccess={handleLoginSuccess} />;
      case 'pregnancy-tracker':
        return loggedInUser ? <Services onPageChange={handlePageChange} initialTab="tracker" /> : <SignIn onPageChange={handlePageChange} onLoginSuccess={handleLoginSuccess} />;
      case 'nutrition-guide':
        return loggedInUser ? <Services onPageChange={handlePageChange} initialTab="nutrition" /> : <SignIn onPageChange={handlePageChange} onLoginSuccess={handleLoginSuccess} />;
      case 'government-program':
        return loggedInUser ? <Services onPageChange={handlePageChange} initialTab="programs" /> : <SignIn onPageChange={handlePageChange} onLoginSuccess={handleLoginSuccess} />;
      case 'signup':
        return <SignUp onPageChange={handlePageChange} />;
      case 'signin':
        return <SignIn onPageChange={handlePageChange} onLoginSuccess={handleLoginSuccess} />;
      case 'quiz':
        return <Quiz onPageChange={setCurrentPage} />;
      case 'marketplace':
        return <Marketplace />;
      default:
        return <Home onPageChange={handlePageChange} isLoggedIn={!!loggedInUser} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isLoggedIn={!!loggedInUser}
        onLogout={handleLogout}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;