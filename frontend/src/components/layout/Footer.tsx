
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/Logo.png" 
                alt="Aama Care Logo" 
                className="h-[10vh] object-contain"
              />
              <span className="text-lg font-bold text-gray-900">Aama Care</span>
            </div>
            <span className="text-sm text-gray-600">© 2025 Aama Care. All rights reserved.</span>
          </div>

          
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200">
              Terms of Service
            </a>
          </div>

         
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}