import { Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white">GP</span>
              </div>
              <span className="text-lg text-gray-800">Geeks Personality</span>
            </div>
            <p className="text-sm text-gray-600">
              Discover your true self through our comprehensive personality assessment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/test"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  Personality Test
                </Link>
              </li>
              <li>
                <Link
                  to="/types"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  Personality Types
                </Link>
              </li>
              <li>
                <Link
                  to="/info"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  Our Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600">
            © {currentYear} Geeks Personality. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="mailto:contact@geekspersonality.com"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-50 transition-colors"
            >
              <Mail className="w-5 h-5 text-gray-600 hover:text-purple-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
