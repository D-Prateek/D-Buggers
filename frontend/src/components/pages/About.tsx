import React from 'react';
import { Heart, Users, Shield } from 'lucide-react';
import Card from '../ui/Card';

export default function About() {
  const stats = [
    { number: '5000+', label: 'Mothers Supported' },
    { number: '75%', label: 'Rural Coverage' },
    { number: '95%', label: 'User Satisfaction' },
    { number: '24/7', label: 'Emergency Support' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach maternal health with deep empathy and understanding.',
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Healthcare information should be available to everyone, everywhere.',
      color: 'from-pink-400 to-red-500',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Trusted information and tools you can depend on.',
      color: 'from-red-500 to-pink-400',
    },
  ];

  return (
    <div className="min-h-screen bg-white">

                  <section className="bg-gradient-to-br from-red-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Aama Care
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Bridging the gap in maternal healthcare for rural communities across Nepal through innovative technology and compassionate care.
          </p>
        </div>
      </section>

                 <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every mother deserves access to quality healthcare information and support, regardless of her location or circumstances. We are committed to empowering mothers with the tools and knowledge they need for healthy pregnancies and confident parenting.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our offline-capable platform, we ensure that vital health information is always accessible, even in areas with limited internet connectivity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                   Our Core Values
            </h2>
                      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our approach to maternal healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
                      <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}