import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [loggedInUser, setLoggedInUser] = useState(null);

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
        return <Home onPageChange={handlePageChange} />;
      case 'about':
        return <About />;
      case 'services':
        return loggedInUser ? <Services onPageChange={handlePageChange} /> : <SignIn onPageChange={handlePageChange} onLoginSuccess={handleLoginSuccess} />;
      case 'signup':
        return <SignUp onPageChange={handlePageChange} />;
      case 'signin':
        return <SignIn onPageChange={handlePageChange} onLoginSuccess={handleLoginSuccess} />;
      default:
        return <Home onPageChange={handlePageChange} />;
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
