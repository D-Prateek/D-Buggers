import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isLoggedIn: boolean;
  onLogout: () => void; 
}

export default function Header({ currentPage, onPageChange, isLoggedIn, onLogout }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const baseNavigation = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
  ];

  const authNavigation = [
    ...baseNavigation,
    { name: 'Our Services', id: 'services' },
  ];

  const guestNavigation = [
    ...baseNavigation,
    { name: 'Sign In', id: 'signin' },
  ];
  
  const navigation = isLoggedIn ? authNavigation : guestNavigation;

  return (
    <header className="bg-white shadow-sm sticky top-0 pt-3 z-20 h-[12vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onPageChange('home')}>
            <img 
              src="/src/assets/Logo.png" 
              alt="Aama Care Logo" 
              className="h-[20vh]"
            />
            <span className="text-xl font-bold text-gray-900">Aama Care</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-red-600 border-b-2 border-red-600 pb-1'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => onPageChange('signup')}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-200"
              >
                Sign Up
              </button>
            )}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
       
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-red-600 bg-red-50 rounded-md'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    onLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 mt-2"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    onPageChange('signup');
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-200 mt-2"
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
