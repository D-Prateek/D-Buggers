import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface SignUpProps {
  onPageChange: (page: string) => void;
}

export default function SignUp({ onPageChange }: SignUpProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    location: '',
    password: '',
    bloodGroup: '',
    userType: 'pregnant',
  });

  const [isBloodGroupOpen, setIsBloodGroupOpen] = useState(false);

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

        const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
   
        const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Aama Care</h1>
          <p className="text-gray-600">Create your account to access maternal health support</p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              required
            />

            <Input
              label="Location"
              placeholder="Enter your full location"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create your password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              required
            />

                      <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blood Group
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsBloodGroupOpen(!isBloodGroupOpen)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 bg-white text-left flex items-center justify-between"
                >
                  <span className={formData.bloodGroup ? 'text-gray-900' : 'text-gray-500'}>
                    {formData.bloodGroup || 'Select'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                {isBloodGroupOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                    {bloodGroups.map((group) => (
                      <button
                        key={group}
                        type="button"
                        onClick={() => {
                          handleInputChange('bloodGroup', group);
                          setIsBloodGroupOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                      >
                        {group}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

         
            <div className="mb-6">
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                What defines you?
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => handleInputChange('userType', 'pregnant')}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    formData.userType === 'pregnant'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Pregnant
                </button>
                <button
                  type="button"
                  onClick={() => handleInputChange('userType', 'post-maternal')}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    formData.userType === 'post-maternal'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Post-Maternal
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full mb-4" size="lg">
              Create Account
            </Button>
   
               <div className="text-center">
              <span className="text-gray-600">Already have an account? </span>
              <button
                type="button"
                      onClick={() => onPageChange('signin')}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Sign in here
              </button>
            </div>
          </form>
        </Card>
         </div>
    </div>
  );
}