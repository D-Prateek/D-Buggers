import React, { useState } from 'react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import axios from 'axios';

interface SignInProps {
  onPageChange: (page: string) => void;
  onLoginSuccess: (userData: any) => void;
}

export default function SignIn({ onPageChange, onLoginSuccess }: SignInProps) {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:3000/auth/login', formData);
      
      console.log('Login successful:', response.data);

      onLoginSuccess(response.data.user);

    } catch (err: any) {
      console.error('Login failed:', err.response ? err.response.data : err.message);

      if (err.response && err.response.data) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <img 
            src="/src/assets/Logo.png" 
            alt="Aama Care Logo" 
            className="w-16 h-16 mx-auto mb-4 object-contain"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to access your Aama Care account</p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <Input
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              required
            />

            <div className="mb-6 text-right">
              <button
                type="button"
                className="text-red-600 hover:text-red-700 text-sm font-medium"
              >
                Forgot Password?
              </button>
            </div>

            <Button type="submit" className="w-full mb-4" size="lg">
              Sign In
            </Button>
            
            {errorMessage && <p className="text-red-600 text-center mb-4">{errorMessage}</p>}

            <div className="text-center">
                  <span className="text-gray-600">Don't have an account? </span>
                   <button
                type="button"
                onClick={() => onPageChange('signup')}
                 className="text-red-600 hover:text-red-700 font-medium"
              >
                Sign up here
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
