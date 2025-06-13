import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'signup':
        return <SignUp onPageChange={setCurrentPage} />;
      case 'signin':
        return <SignIn onPageChange={setCurrentPage} />;
      case 'services':
        return <Home onPageChange={setCurrentPage} />; 
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;