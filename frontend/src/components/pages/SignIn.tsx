import React, { useState } from 'react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface SignInProps {
  onPageChange: (page: string) => void;
}

export default function SignIn({ onPageChange }: SignInProps) {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Sign in:', formData);
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

            <div className="mb-6">
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