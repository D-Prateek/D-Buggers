import React, { useState } from 'react';
import { ArrowLeft, Calendar, Heart, User, Phone, Mail, MapPin, Droplets, AlertTriangle, Pill, Syringe, FileText, Apple, Clock } from 'lucide-react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface ServicesProps {
  onPageChange: (page: string) => void;
  initialTab?: string;
}

export default function Services({ onPageChange, initialTab = 'profile' }: ServicesProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
    const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    trimester: '',
    dueDate: '',
    bloodGroup: '',
    medicalConditions: '',
    allergies: '',
    medications: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

        const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
 
  };

  const audioVisualGuides = [
    {
      title: 'Prenatal Care Basics',
      description: 'Essential prenatal care practices for healthy pregnancy',
      videoSource: 'https://www.youtube.com/embed/h28xTJKCU6g',
    },

    {
      title: 'Nutrition During Pregnancy',
      description: 'Complete guide to healthy eating during pregnancy',
      videoSource: 'https://www.youtube.com/embed/26hRlW1aMWA',
    },
    {
      title: 'Labor Preparation',
      description: 'Preparing for labor and delivery',
      videoSource: 'https://www.youtube.com/embed/26hRlW1aMWA',
    },
    {
      title: 'Newborn Care',
      description: 'Essential newborn care techniques',
      videoSource: 'https://www.youtube.com/embed/26hRlW1aMWA',
    },
    {
      title: 'Breastfeeding Guide',
      description: 'Complete breastfeeding guide for new mothers',
      videoSource: 'https://www.youtube.com/embed/26hRlW1aMWA',
    },
    {
      title: 'Postpartum Recovery',
      description: 'Recovery tips and care after delivery',
      videoSource: 'https://youtu.be/JgDNFQ2RaLQ?si=cCEjP9pvaBfxYX8k',
    },
  ];


    const profileData = {
    name: 'Sita Sharma',
    age: 28,
    email: 'sita.sharma@example.com',
    phone: '+977 9841234567',
    location: 'Kathmandu, Nepal',
    trimester: '2nd Trimester',
    dueDate: 'March 15, 2025',
    progress: 65,
    bloodGroup: 'O+',
         medicalConditions: 'None',
    allergies: 'None',
    medications: 'Prenatal vitamins',
    lastCheckup: 'None',
    nextAppointment: 'None',
    doctor: 'None',
  };

  const vaccinationSchedule = [
    {
      vaccine: 'Tetanus Toxoid (TT1)',
      timing: 'As early as possible during pregnancy',
      status: 'completed',
      date: 'Dec 15, 2024',
    },
    {
      vaccine: 'Tetanus Toxoid (TT2)',
      timing: '4 weeks after TT1',
      status: 'completed',
      date: 'Jan 12, 2025',
    },
    {
      vaccine: 'Influenza Vaccine',
      timing: 'During flu season',
      status: 'pending',
      date: 'Feb 10, 2025',
    },
    {
      vaccine: 'Tdap (Whooping Cough)',
      timing: '27-36 weeks of pregnancy',
      status: 'upcoming',
      date: 'Feb 20, 2025',
    },
  ];

  const governmentPrograms = [
    {
      name: 'Aama Programme',
      description: 'Cash incentive for institutional delivery',
      amount: 'NPR 2,000',
      eligibility: 'All pregnant women',
      status: 'eligible',
      deadline: 'Within 42 days of delivery',
    },
    {
      name: 'Sunaulo Hazar Din',
      description: 'Nutrition support for first 1000 days',
      amount: 'NPR 1,000/month',
      eligibility: 'Pregnant and lactating mothers',
      status: 'applied',
      deadline: 'Ongoing',
    },
    {
      name: 'Free ANC Services',
      description: 'Free antenatal care services',
      amount: 'Free',
      eligibility: 'All pregnant women',
      status: 'active',
      deadline: 'Throughout pregnancy',
    },
    {
      name: 'Iron Folic Acid Tablets',
      description: 'Free iron and folic acid supplementation',
      amount: 'Free',
      eligibility: 'All pregnant women',
      status: 'active',
      deadline: 'Throughout pregnancy',
    },
  ];

  const pregnancyMilestones = [
    {
      week: 12,
      title: 'First Trimester Complete',
      description: 'Major organs formed, morning sickness may decrease',
      completed: true,
    },
    {
      week: 20,
      title: 'Anatomy Scan',
      description: 'Detailed ultrasound to check baby\'s development',
      completed: true,
    },
    {
      week: 24,
      title: 'Viability Milestone',
      description: 'Baby has a good chance of survival if born',
      completed: false,
      current: true,
    },
    {
      week: 28,
      title: 'Third Trimester Begins',
      description: 'Rapid growth phase, more frequent checkups',
      completed: false,
    },
    {
      week: 36,
      title: 'Full Term Approaching',
      description: 'Baby is considered full term at 37 weeks',
      completed: false,
    },
  ];

  const renderAudioVisualGuides = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Audio-Visual Health Guides</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Step-by-step video guides covering pregnancy care, delivery preparation, and newborn care in local languages.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {audioVisualGuides.map((guide, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <div className="relative mb-4">
              <iframe className="w-full h-48 object-cover rounded-lg" src={guide.videoSource}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share" allowFullScreen>
              </iframe>
              
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderVaccinationCalendar = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Vaccination Calendar</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Keep track of essential vaccinations during pregnancy to protect both mother and baby.
        </p>
      </div>

      <div className="grid gap-4">
        {vaccinationSchedule.map((vaccine, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  vaccine.status === 'completed' ? 'bg-green-100' :
                  vaccine.status === 'pending' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  <Syringe className={`w-6 h-6 ${
                    vaccine.status === 'completed' ? 'text-green-600' :
                    vaccine.status === 'pending' ? 'text-yellow-600' : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{vaccine.vaccine}</h3>
                  <p className="text-gray-600 text-sm">{vaccine.timing}</p>
                  {vaccine.date && (
                    <p className="text-sm text-gray-500">
                      {vaccine.status === 'completed' ? 'Completed: ' : 'Scheduled: '}{vaccine.date}
                    </p>
                  )}
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                vaccine.status === 'completed' ? 'bg-green-100 text-green-800' :
                vaccine.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {vaccine.status === 'completed' ? 'Completed' :
                 vaccine.status === 'pending' ? 'Pending' : 'Upcoming'}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderProgramTracker = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Government Programs</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          View your eligibility and application status for government health schemes and subsidies.
        </p>
      </div>

      <div className="grid gap-4">
        {governmentPrograms.map((program, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  program.status === 'active' ? 'bg-green-100' :
                  program.status === 'applied' ? 'bg-blue-100' : 'bg-yellow-100'
                }`}>
                  <FileText className={`w-6 h-6 ${
                    program.status === 'active' ? 'text-green-600' :
                    program.status === 'applied' ? 'text-blue-600' : 'text-yellow-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{program.name}</h3>
                  <p className="text-gray-600 mb-2">{program.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Amount: </span>
                      <span className="font-medium text-gray-900">{program.amount}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Deadline: </span>
                      <span className="font-medium text-gray-900">{program.deadline}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="text-gray-500">Eligibility: </span>
                    {program.eligibility}
                  </p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                program.status === 'active' ? 'bg-green-100 text-green-800' :
                program.status === 'applied' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {program.status === 'active' ? 'Active' :
                 program.status === 'applied' ? 'Applied' : 'Eligible'}
              </div>
            </div>
            {program.status === 'eligible' && (
              <Button variant="outline" className="w-full">
                Apply Now
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPregnancyTracker = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pregnancy Tracker</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Track your pregnancy journey with weekly updates and important milestones.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
       
        <Card>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Status</h3>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-red-600 mb-2">24 Weeks</div>
            <p className="text-gray-600">2nd Trimester</p>
            <p className="text-sm text-gray-500 mt-1">Due: March 15, 2025</p>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Pregnancy Progress</span>
              <span className="text-sm text-gray-600">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-red-500 to-pink-500 h-3 rounded-full transition-all duration-300"
                style={{ width: '60%' }}
              ></div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">16 weeks remaining</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Next appointment: Feb 5, 2025</span>
            </div>
          </div>
        </Card>

      
        <Card>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">This Week (Week 24)</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Baby's Development</h4>
              <p className="text-sm text-gray-600">
                Your baby is about the size of a cantaloupe! The baby's hearing is developing, 
                    and they can now hear your voice and heartbeat.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Your Body</h4>
              <p className="text-sm text-gray-600">
                You may notice your belly button starting to pop out. Back pain and 
                leg cramps are common at this stage.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Tips for This Week</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Continue taking prenatal vitamins</li>
                <li>• Practice good posture to reduce back pain</li>
                <li>• Stay hydrated and eat iron-rich foods</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>


      <Card>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Pregnancy Milestones</h3>
        <div className="space-y-4">
          {pregnancyMilestones.map((milestone, index) => (
            <div key={index} className={`flex items-start space-x-4 p-4 rounded-lg ${
              milestone.current ? 'bg-red-50 border border-red-200' :
              milestone.completed ? 'bg-green-50' : 'bg-gray-50'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                milestone.current ? 'bg-red-600 text-white' :
                milestone.completed ? 'bg-green-600 text-white' : 'bg-gray-400 text-white'
              }`}>
                {milestone.week}
              </div>
              <div className="flex-1">
                <h4 className={`font-medium ${
                  milestone.current ? 'text-red-900' :
                  milestone.completed ? 'text-green-900' : 'text-gray-700'
                }`}>
                  Week {milestone.week}: {milestone.title}
                </h4>
                <p className={`text-sm ${
                  milestone.current ? 'text-red-700' :
                  milestone.completed ? 'text-green-700' : 'text-gray-600'
                }`}>
                  {milestone.description}
                </p>
              </div>
              {milestone.current && (
                <div className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">
                  Current
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderNutrition = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pregnancy Nutrition Guide</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Complete nutrition guidance for a healthy pregnancy journey.
        </p>
               </div>
     <div className="grid lg:grid-cols-2 gap-8">
               <Card>
                     <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Apple className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Essential Nutrients</h3>
          </div>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium text-gray-900">Folic Acid (400-800 mcg daily)</h4>
              <p className="text-sm text-gray-600 mb-2">Prevents neural tube defects</p>
              <p className="text-sm text-gray-700"><strong>Sources:</strong> Leafy greens, fortified cereals, beans, citrus fruits</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-medium text-gray-900">Iron (27 mg daily)</h4>
              <p className="text-sm text-gray-600 mb-2">Prevents anemia and supports baby's growth</p>
              <p className="text-sm text-gray-700"><strong>Sources:</strong> Lean meat, poultry, fish, dried beans, fortified cereals</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-gray-900">Calcium (1000 mg daily)</h4>
              <p className="text-sm text-gray-600 mb-2">Builds strong bones and teeth</p>
              <p className="text-sm text-gray-700"><strong>Sources:</strong> Dairy products, fortified plant milks, leafy greens</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-medium text-gray-900">Protein (71 grams daily)</h4>
              <p className="text-sm text-gray-600 mb-2">Supports baby's growth and development</p>
              <p className="text-sm text-gray-700"><strong>Sources:</strong> Lean meat, eggs, dairy, beans, nuts, tofu</p>
            </div>
          </div>
        </Card>

     
        <Card>
                <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Foods to Avoid</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-900 mb-2">High Mercury Fish</h4>
              <p className="text-sm text-red-700">Shark, swordfish, king mackerel, tilefish</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-900 mb-2">Raw or Undercooked Foods</h4>
              <p className="text-sm text-red-700">Raw eggs, undercooked meat, unpasteurized dairy</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-900 mb-2">Alcohol & Excessive Caffeine</h4>
              <p className="text-sm text-red-700">No alcohol, limit caffeine to 200mg/day</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-900 mb-2">Unwashed Produce</h4>
              <p className="text-sm text-red-700">Always wash fruits and vegetables thoroughly</p>
            </div>
          </div>
        </Card>
      </div>
    <Card>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Sample Daily Meal Plan</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Breakfast</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Fortified cereal with milk</li>
              <li>• Fresh fruit (banana, berries)</li>
              <li>• Whole grain toast</li>
              <li>• Orange juice (vitamin C)</li>
               </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Lunch</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Grilled chicken salad</li>
              <li>• Leafy greens and vegetables</li>
              <li>• Whole grain bread</li>
              <li>• Low-fat yogurt</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Dinner</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Lean beef or fish</li>
              <li>• Steamed vegetables</li>
              <li>• Brown rice or quinoa</li>
              <li>• Glass of milk</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Healthy Snack Ideas</h4>
          <p className="text-sm text-blue-700">
            Nuts and dried fruits, cheese and crackers, vegetable sticks with hummus, 
            Greek yogurt with berries, whole grain muffins
          </p>
        </div>
      </Card>

  
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Hydration</h3>
          <div className="space-y-3">
            <p className="text-gray-600">Drink at least 8-10 glasses of water daily</p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Benefits of Proper Hydration</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Prevents constipation</li>
                <li>• Reduces swelling</li>
                <li>• Maintains amniotic fluid levels</li>
                <li>• Helps with nutrient transport</li>
              </ul>
            </div>
          </div>
        </Card>
        
        <Card>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Prenatal Supplements</h3>
          <div className="space-y-3">
            <p className="text-gray-600">Consult your doctor before taking any supplements</p>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Common Supplements</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Prenatal multivitamin</li>
                <li>• Folic acid (if not in multivitamin)</li>
                <li>• Iron (if deficient)</li>
                <li>• Calcium (if dietary intake is low)</li>
                <li>• Vitamin D</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pregnancy Profile</h2>
        <p className="text-lg text-gray-600">
          Complete health profile and pregnancy tracking dashboard
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
   
        <Card className="lg:col-span-1">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{profileData.name}</h3>
            <p className="text-gray-600">Age {profileData.age} • {profileData.trimester}</p>
            <p className="text-sm text-gray-500 mt-1">Due: {profileData.dueDate}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">{profileData.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">{profileData.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">{profileData.location}</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Pregnancy Progress</span>
              <span className="text-sm text-gray-600">{profileData.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${profileData.progress}%` }}
              ></div>
            </div>
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Medical Information</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Blood Group</p>
                  <p className="font-medium text-gray-900">{profileData.bloodGroup}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Allergies</p>
                  <p className="font-medium text-gray-900">{profileData.allergies}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Medical Conditions</p>
                  <p className="font-medium text-gray-900">{profileData.medicalConditions}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Pill className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Medications</p>
                  <p className="font-medium text-gray-900">{profileData.medications}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Appointments</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Last Checkup</p>
                <p className="font-medium text-gray-900">{profileData.lastCheckup}</p>
                <p className="text-sm text-gray-600">with {profileData.doctor}</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Next Appointment</p>
                <p className="font-medium text-gray-900">{profileData.nextAppointment}</p>
                <p className="text-sm text-gray-600">with {profileData.doctor}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderForm = () => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pregnancy Profile Form</h2>
        <p className="text-lg text-gray-600">
          Complete your profile to get personalized care recommendations
        </p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
              <Input
                label="Date of Birth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                required
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pregnancy Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Trimester <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.trimester}
                  onChange={(e) => handleInputChange('trimester', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Select Trimester</option>
                  <option value="1st">1st Trimester (1-12 weeks)</option>
                  <option value="2nd">2nd Trimester (13-26 weeks)</option>
                  <option value="3rd">3rd Trimester (27-40 weeks)</option>
                </select>
              </div>
              <Input
                label="Expected Due Date"
                type="date"
                value={formData.dueDate}
                onChange={(e) => handleInputChange('dueDate', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Blood Group <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.bloodGroup}
                  onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <Input
                label="Medical Conditions"
                placeholder="Any existing medical conditions"
                value={formData.medicalConditions}
                onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
              />
              <Input
                label="Allergies"
                placeholder="Any known allergies"
                value={formData.allergies}
                onChange={(e) => handleInputChange('allergies', e.target.value)}
              />
              <Input
                label="Current Medications"
                placeholder="Any medications you're taking"
                value={formData.medications}
                onChange={(e) => handleInputChange('medications', e.target.value)}
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Save Profile
          </Button>
        </form>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
   
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => onPageChange('home')}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Our Services</h1>
            <button
              onClick={() => setActiveTab('form')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === 'form'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Profile Form
            </button>
          </div>
        </div>
      </div>

     
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                activeTab === 'profile'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Pregnancy Profile
            </button>
            <button
              onClick={() => setActiveTab('tracker')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                activeTab === 'tracker'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Pregnancy Tracker
            </button>
            <button
              onClick={() => setActiveTab('nutrition')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                activeTab === 'nutrition'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Nutrition Guide
            </button>
            <button
              onClick={() => setActiveTab('vaccination')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                activeTab === 'vaccination'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Vaccination Calendar
            </button>
            <button
              onClick={() => setActiveTab('guides')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                activeTab === 'guides'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Audio-Visual Guides
            </button>
            
            <button
              onClick={() => setActiveTab('programs')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                activeTab === 'programs'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Government Programs
            </button>
            
            
            
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'guides' && renderAudioVisualGuides()}
        {activeTab === 'vaccination' && renderVaccinationCalendar()}
        {activeTab === 'programs' && renderProgramTracker()}
        {activeTab === 'tracker' && renderPregnancyTracker()}
        {activeTab === 'nutrition' && renderNutrition()}
        {activeTab === 'profile' && renderProfile()}
        {activeTab === 'form' && renderForm()}
      </div>
    </div>
  );
}