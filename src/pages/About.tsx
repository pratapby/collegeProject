import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            Empowering careers and connecting talent with opportunities worldwide
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We're on a mission to revolutionize the way people find and grow in their careers. By combining cutting-edge technology with personalized support, we help professionals achieve their career goals and companies find exceptional talent.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="text-center">
                  <stat.icon className="mx-auto h-12 w-12 text-blue-600" />
                  <p className="mt-4 text-4xl font-extrabold text-blue-600">{stat.value}</p>
                  <p className="mt-2 text-lg font-medium text-gray-900">{stat.name}</p>
                  <p className="mt-2 text-base text-gray-500">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Team</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Meet the passionate individuals dedicated to your career success
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="space-y-4">
                    <img
                      className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                      src={member.image}
                      alt={member.name}
                    />
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3 className="text-gray-900">{member.name}</h3>
                        <p className="text-blue-600">{member.role}</p>
                      </div>
                      <p className="text-gray-500">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const stats = [
  {
    name: 'Success Rate',
    value: '95%',
    description: 'Of users find their ideal job within 3 months',
    icon: Award,
  },
  {
    name: 'Global Network',
    value: '150+',
    description: 'Countries with active job seekers and employers',
    icon: Globe,
  },
  {
    name: 'Active Users',
    value: '1M+',
    description: 'Professionals using our platform worldwide',
    icon: Users,
  },
  {
    name: 'Satisfaction',
    value: '98%',
    description: 'User satisfaction rate with our services',
    icon: Heart,
  },
];

const team = [
  {
    name: 'David Miller',
    role: 'CEO & Founder',
    description: 'Visionary leader with 15+ years in HR tech',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lisa Wang',
    role: 'Head of Product',
    description: 'Product strategist focused on user experience',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'James Thompson',
    role: 'Head of Technology',
    description: 'Tech innovator driving platform development',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];