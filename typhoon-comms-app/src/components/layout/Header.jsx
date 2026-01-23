import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import { allModules } from '../../utils/courseDataLoader';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aircraftDropdownOpen, setAircraftDropdownOpen] = useState(false);
  const [referenceDropdownOpen, setReferenceDropdownOpen] = useState(false);
  const location = useLocation();
  const { getOverallProgress } = useProgress();

  const overallProgress = getOverallProgress(allModules);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-deep-navy text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-raf-blue rounded flex items-center justify-center font-bold text-xl">
              T
            </div>
            <div>
              <h1 className="text-xl font-bold">Typhoon Comms</h1>
              <p className="text-xs text-gray-300">Communication Systems Training</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`hover:text-raf-blue transition ${isActive('/') ? 'text-raf-blue font-semibold' : ''}`}
            >
              Home
            </Link>

            {/* Aircraft Systems Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAircraftDropdownOpen(!aircraftDropdownOpen)}
                className="hover:text-raf-blue transition flex items-center"
              >
                Aircraft Systems
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aircraftDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl py-2">
                  <Link to="/aircraft-systems" className="block px-4 py-2 hover:bg-gray-100">Typhoon Overview</Link>
                  <Link to="/aircraft-systems/tactical-data-links" className="block px-4 py-2 hover:bg-gray-100">Tactical Data Links</Link>
                  <Link to="/aircraft-systems/voice-comms" className="block px-4 py-2 hover:bg-gray-100">Voice Communications</Link>
                  <Link to="/aircraft-systems/crypto" className="block px-4 py-2 hover:bg-gray-100">Cryptographic Systems</Link>
                  <Link to="/aircraft-systems/iff" className="block px-4 py-2 hover:bg-gray-100">IFF Systems</Link>
                </div>
              )}
            </div>

            <Link
              to="/learn"
              className={`hover:text-raf-blue transition ${isActive('/learn') || location.pathname.startsWith('/learn/') ? 'text-raf-blue font-semibold' : ''}`}
            >
              Learn
            </Link>

            {/* Reference Dropdown */}
            <div className="relative">
              <button
                onClick={() => setReferenceDropdownOpen(!referenceDropdownOpen)}
                className="hover:text-raf-blue transition flex items-center"
              >
                Reference
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {referenceDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl py-2">
                  <Link to="/reference/j-series" className="block px-4 py-2 hover:bg-gray-100">J-Series Messages</Link>
                  <Link to="/reference/tdma" className="block px-4 py-2 hover:bg-gray-100">TDMA & Network Config</Link>
                  <Link to="/reference/track-management" className="block px-4 py-2 hover:bg-gray-100">Track Management</Link>
                  <Link to="/reference/troubleshooting" className="block px-4 py-2 hover:bg-gray-100">Troubleshooting</Link>
                  <Link to="/reference/glossary" className="block px-4 py-2 hover:bg-gray-100">Glossary & Acronyms</Link>
                </div>
              )}
            </div>

            <Link
              to="/resources"
              className={`hover:text-raf-blue transition ${isActive('/resources') ? 'text-raf-blue font-semibold' : ''}`}
            >
              Resources
            </Link>

            {/* Progress Indicator */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold">{overallProgress.percentComplete}%</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link to="/" className="block py-2 hover:text-raf-blue">Home</Link>
            <div className="pl-4 space-y-1">
              <Link to="/aircraft-systems" className="block py-2 text-sm hover:text-raf-blue">Typhoon Overview</Link>
              <Link to="/aircraft-systems/tactical-data-links" className="block py-2 text-sm hover:text-raf-blue">Tactical Data Links</Link>
              <Link to="/aircraft-systems/voice-comms" className="block py-2 text-sm hover:text-raf-blue">Voice Communications</Link>
            </div>
            <Link to="/learn" className="block py-2 hover:text-raf-blue">Learn</Link>
            <Link to="/reference/j-series" className="block py-2 text-sm hover:text-raf-blue">J-Series Reference</Link>
            <Link to="/reference/glossary" className="block py-2 text-sm hover:text-raf-blue">Glossary</Link>
            <Link to="/resources" className="block py-2 hover:text-raf-blue">Resources</Link>
            <div className="pt-2 border-t border-gray-600">
              <div className="text-sm">Progress: {overallProgress.percentComplete}%</div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
