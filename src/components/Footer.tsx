
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, User } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <User className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">JobSeeker</span>
            </div>
            <p className="text-gray-500">
              Empowering careers and connecting talent with opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/solutions" className="text-base text-gray-500 hover:text-blue-600">
                  Job Search
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-base text-gray-500 hover:text-blue-600">
                  Career Development
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-base text-gray-500 hover:text-blue-600">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-base text-gray-500 hover:text-blue-600">
                  Skill Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-base text-gray-500 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-base text-gray-500 hover:text-blue-600">
                  Testimonials
                </Link>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-blue-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-blue-600">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-blue-600">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-blue-600">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-blue-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} JobSeeker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}