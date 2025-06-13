import React from 'react';
import { Calendar, Heart, Smartphone } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface HomeProps {
  onPageChange: (page: string) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  const features = [
    {
      icon: Calendar,
      title: 'Pregnancy Tracker',
      description: 'Track your pregnancy weekly with personalized health updates.',
      link: 'Learn More →',
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: Heart,
       title: 'Vital Guides',
      description: 'Step-by-step pregnancy & newborn care videos',
      link: 'Learn More →',
      color: 'from-pink-400 to-red-500',
    },
    {
      icon: Smartphone,
      title: 'Program Tracker',
      description: 'Never miss important government health schemes and subsidies.',
      link: 'Learn More →',
      color: 'from-red-500 to-pink-400',
    },
  ];

  return (
    <div className="min-h-screen">

      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/HomeBg.jpg')`,
          }}
          />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end">
             <div className="text-white max-w-2xl text-right">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Maternal Care for Every Mother,
                <br />
                <span className="text-red-300">Everywhere in Nepal</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Offline guides, SOS alerts, and vital health trackers in rural and urban Nepal—right in your pocket.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button size="lg" className="text-lg px-8 py-3" onClick={() => onPageChange('signup')}>
                  Sign Up Free
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supporting Mothers in Every Step of the Way
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From pregnancy to early childhood, our platform provides essential tools and guidance designed specifically for rural communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <a href="#" className="text-red-600 font-medium hover:text-red-700 transition-colors duration-200">
                  {feature.link}
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="px-8 py-3">
              Explore All Features
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}