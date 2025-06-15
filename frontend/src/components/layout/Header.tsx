import React, { useEffect } from 'react';
import { Menu, X, Brain, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}


declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function Header({ currentPage, onPageChange, isLoggedIn, onLogout }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useEffect(() => {

    const addScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };


    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ne',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
          multilanguagePage: true,
        },
        'google_translate_element'
      );

      const mobileElement = document.getElementById('google_translate_element_mobile');
      if (mobileElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,ne',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true,
          },
          'google_translate_element_mobile'
        );
      }
    };


    if (!document.querySelector('script[src*="translate.google.com"]')) {
      addScript();
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }

    return () => {

    };
  }, []);

  const baseNavigation = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
  ];

  const authNavigation = [
    ...baseNavigation,
    { name: 'Our Services', id: 'services' },
    { name: 'Consult Doctor', id: 'consult-doctor' },
    { name: 'Marketplace', id: 'marketplace' },
  ];



  const guestNavigation = [
    ...baseNavigation,
    { name: 'Marketplace', id: 'marketplace' },
    { name: 'Sign In', id: 'signin' },
  ];

  const navigation = isLoggedIn ? authNavigation : guestNavigation;

  return (
    <>
      <style>{`
        /* Hide Google Translate elements we don't want */
        .goog-te-banner-frame.skiptranslate,
        .goog-te-gadget-icon,
        .goog-te-gadget .goog-te-combo option:first-child {
          display: none !important;
        }

        /* Style the translate dropdown */
        .goog-te-combo {
          background-color: white !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 0.375rem !important;
          padding: 0.375rem 0.75rem !important;
          font-size: 0.875rem !important;
          color: #374151 !important;
          outline: none !important;
          transition: all 0.2s ease-in-out !important;
          min-width: 120px !important;
          font-family: inherit !important;
          cursor: pointer !important;
        }

        .goog-te-combo:hover {
          border-color: #dc2626 !important;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important;
        }

        .goog-te-combo:focus {
          border-color: #dc2626 !important;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1) !important;
        }

        /* Style the gadget container */
        .goog-te-gadget {
          font-family: inherit !important;
          font-size: 0 !important;
          color: transparent !important;
        }

        .goog-te-gadget .goog-te-combo {
          margin: 0 !important;
        }

        /* Hide the top banner completely */
        .goog-te-banner-frame {
          display: none !important;
        }

        /* Ensure menu appears above other elements */
        .goog-te-menu-frame {
          z-index: 9999 !important;
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1) !important;
          border-radius: 0.5rem !important;
          border: 1px solid #e5e7eb !important;
        }

        /* Reset body positioning */
        body {
          top: 0 !important;
          position: static !important;
        }

        /* Hide iframe */
        .skiptranslate > iframe {
          height: 0 !important;
          border-style: none !important;
          box-shadow: none !important;
          display: none !important;
        }

        /* Custom translate widget container styling */
        .translate-widget-container {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Hide "Select Language" text */
        .goog-te-gadget-simple .goog-te-menu-value span:first-child {
          display: none !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value:before {
          content: 'Language' !important;
          color: #6b7280 !important;
        }
      `}</style>

      <header className="bg-white shadow-sm sticky top-0 pt-3 z-20 h-[10vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onPageChange('home')}>
              <img
                src="/src/assets/Logo.png"
                alt="Aama Care Logo"
                className="h-[10vh]"
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

              {isLoggedIn && (
                <button
                  onClick={() => onPageChange('quiz')}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === 'quiz'
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                >
                  <Brain className="w-4 h-4" />
                  <span>Quiz</span>
                </button>
              )}

              <div className="translate-widget-container">
                <Globe className="w-4 h-4 text-gray-500" />
                <div id="google_translate_element"></div>
              </div>

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
            <div className="md:hidden bg-[#ffffff] m-0 border-t border-gray-200 p-5">
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

                {isLoggedIn && (
                  <button
                    onClick={() => {
                      onPageChange('quiz');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      currentPage === 'quiz'
                        ? 'bg-purple-600 text-white'
                        : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                    }`}
                  >
                    <Brain className="w-4 h-4" />
                    <span>Quiz</span>
                  </button>
                )}

                <div className="translate-widget-container px-3 py-2">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <div id="google_translate_element_mobile"></div>
                </div>

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
    </>
  );
}