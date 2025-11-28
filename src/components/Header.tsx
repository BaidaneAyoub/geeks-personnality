import { LogIn } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
  isLoggedIn: boolean;
}

export function Header({ isLoggedIn }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white">GP</span>
            </div>
            <span className="text-xl text-gray-800">Geeks Personality</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/test"
              className={({ isActive }) =>
                `text-gray-700 hover:text-purple-600 transition-colors ${isActive ? 'text-purple-600' : ''}`
              }
            >
              Personality Test
            </NavLink>
            <NavLink
              to="/types"
              className={({ isActive }) =>
                `text-gray-700 hover:text-purple-600 transition-colors ${isActive ? 'text-purple-600' : ''}`
              }
            >
              Personality Types
            </NavLink>
            <NavLink
              to="/info"
              className={({ isActive }) =>
                `text-gray-700 hover:text-purple-600 transition-colors ${isActive ? 'text-purple-600' : ''}`
              }
            >
              Our Info
            </NavLink>
          </nav>

          {/* Login Button */}
          {!isLoggedIn && (
            <Link
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-full hover:border-purple-400 hover:bg-purple-50 transition-all"
            >
              <LogIn className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">Log In with Google</span>
            </Link>
          )}
          {isLoggedIn && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"></div>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-around py-3 border-t border-gray-100">
          <NavLink
            to="/test"
            className={({ isActive }) =>
              `text-sm text-gray-700 hover:text-purple-600 ${isActive ? 'text-purple-600' : ''}`
            }
          >
            Test
          </NavLink>
          <NavLink
            to="/types"
            className={({ isActive }) =>
              `text-sm text-gray-700 hover:text-purple-600 ${isActive ? 'text-purple-600' : ''}`
            }
          >
            Types
          </NavLink>
          <NavLink
            to="/info"
            className={({ isActive }) =>
              `text-sm text-gray-700 hover:text-purple-600 ${isActive ? 'text-purple-600' : ''}`
            }
          >
            Info
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

