import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../lib/store';
import { Menu, X, User } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <User className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">YourDream</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">Home</Link>
            <Link to="/solutions" className="text-gray-700 hover:text-blue-600 px-3 py-2">Solutions</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2">Testimonials</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2">About</Link>
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="text-gray-700 hover:text-blue-600 px-3 py-2">Profile</Link>
                <button
                  onClick={handleLogout}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Home</Link>
            <Link to="/solutions" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Solutions</Link>
            <Link to="/testimonials" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Testimonials</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 px-3 py-2">About</Link>
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Profile</Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}