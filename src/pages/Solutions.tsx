import React from 'react';
import { Briefcase, Users, Target, TrendingUp, Search, BookOpen, Award, Star } from 'lucide-react';

export function Solutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Our Solutions
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            Comprehensive tools and services to accelerate your career growth
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {solutions.map((solution) => (
              <div
                key={solution.name}
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-1 p-6">
                  <div className="w-12 h-12 rounded-md bg-blue-500 flex items-center justify-center">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{solution.name}</h3>
                  <p className="mt-3 text-base text-gray-500">{solution.description}</p>
                  <ul className="mt-4 space-y-2">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Star className="h-5 w-5 text-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Key Features</h2>
            <p className="mt-4 text-lg text-gray-500">Everything you need to succeed in your career journey</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-16 space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to advance your career?</span>
            <span className="block text-blue-200">Start your journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const solutions = [
  {
    name: 'Career Development',
    description: 'Comprehensive tools and resources to help you grow in your career path.',
    icon: TrendingUp,
    features: [
      'Personalized career roadmap',
      'Skill assessment tools',
      'Learning resources',
      'Career coaching sessions',
    ],
  },
  {
    name: 'Job Search Platform',
    description: 'Advanced job search tools to find your perfect role.',
    icon: Briefcase,
    features: [
      'AI-powered job matching',
      'Application tracking',
      'Company research tools',
      'Salary insights',
    ],
  },
  {
    name: 'Networking Hub',
    description: 'Connect with professionals and expand your network.',
    icon: Users,
    features: [
      'Industry networking events',
      'Professional communities',
      'Mentorship programs',
      'Discussion forums',
    ],
  },
  {
    name: 'Career Goals',
    description: 'Set and achieve your professional objectives.',
    icon: Target,
    features: [
      'Goal setting framework',
      'Progress tracking',
      'Achievement milestones',
      'Performance analytics',
    ],
  },
];

const features = [
  {
    name: 'Resume Builder',
    description: 'Create professional resumes with our easy-to-use builder and expert templates.',
    icon: Search,
  },
  {
    name: 'Interview Prep',
    description: 'Practice with AI-powered mock interviews and get instant feedback.',
    icon: BookOpen,
  },
  {
    name: 'Skill Assessments',
    description: 'Validate your skills with industry-standard assessments.',
    icon: Award,
  },
  {
    name: 'Career Coaching',
    description: 'Get personalized guidance from experienced career coaches.',
    icon: Users,
  },
  {
    name: 'Job Alerts',
    description: 'Receive notifications for jobs matching your preferences.',
    icon: Briefcase,
  },
  {
    name: 'Salary Tools',
    description: 'Research and compare salaries across industries and locations.',
    icon: Target,
  },
];