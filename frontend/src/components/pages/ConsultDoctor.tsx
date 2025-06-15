import React from 'react';
import { Video, Phone, MessageSquare, Calendar, Shield, Star, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const doctors = [
  {
    name: 'Dr. Sita Sharma',
    specialty: 'Gynecologist, MD',
    experience: '12+ Years Experience',
    rating: 4.9,
    reviews: 182,
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: 'Mon, Wed, Fri (9am - 1pm)',
  },
  {
    name: 'Dr. Ram Thapa',
    specialty: 'Pediatrician',
    experience: '15+ Years Experience',
    rating: 4.8,
    reviews: 215,
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: 'Tue, Thu (2pm - 6pm)',
  },
  {
    name: 'Dr. Gita Rai',
    specialty: 'Nutritionist',
    experience: '8+ Years Experience',
    rating: 4.9,
    reviews: 150,
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: 'Mon - Fri (10am - 4pm)',
  },
];

const steps = [
  {
    icon: Calendar,
    title: '1. Book an Appointment',
    description: 'Choose a doctor and a time slot that works for you.',
  },
  {
    icon: Shield,
    title: '2. Confirm Securely',
    description: 'Confirm your booking and get a secure link for your consultation.',
  },
  {
    icon: Video,
    title: '3. Start Your Consultation',
    description: 'Join the video call at your scheduled time from anywhere.',
  },
];


export default function ConsultDoctor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Consult with Our Experts
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Get professional medical advice from experienced doctors through secure video, audio, or chat consultations, right from the comfort of your home.
          </p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Steps to Get Started
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our process is designed to be simple, secure, and convenient for every mother.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Doctors List Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Doctors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of dedicated professionals is here to support you at every stage of your journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} padding="sm" className="flex flex-col">
                <div className="flex-grow">
                  <img
                    src={doctor.image}
                    alt={`Dr. ${doctor.name}`}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                  <p className="text-purple-700 font-medium mb-1">{doctor.specialty}</p>
                  <p className="text-sm text-gray-600 mb-3">{doctor.experience}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{doctor.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                  </div>
                </div>
                <div className="mt-auto">
                    <p className="text-sm text-gray-600 mb-4"><strong>Availability:</strong> {doctor.availability}</p>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80">Book Appointment</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Consultation Types Section */}
       <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Consultation Type
            </h2>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer multiple ways to connect with a doctor, ensuring your comfort and privacy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
               <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <Video className="w-8 h-8 text-white" />
                </div>
               <h3 className="text-xl font-bold mb-2 text-gray-900">Video Call</h3>
               <p className="text-gray-600">Face-to-face consultation for a more personal experience.</p>
            </Card>
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
               <h3 className="text-xl font-bold mb-2 text-gray-900">Audio Call</h3>
               <p className="text-gray-600">Quick and convenient for follow-ups and simple queries.</p>
            </Card>
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
               <h3 className="text-xl font-bold mb-2 text-gray-900">Chat</h3>
               <p className="text-gray-600">Private and secure text-based consultation.</p>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}