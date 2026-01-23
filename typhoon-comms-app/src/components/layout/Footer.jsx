import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-navy text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p className="text-sm text-gray-300">
              Comprehensive training resource for Typhoon/Eurofighter communication systems,
              focusing on Link 16, MIDS-JTRS, and tactical data link operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-raf-blue">Home</Link></li>
              <li><Link to="/learn" className="text-gray-300 hover:text-raf-blue">Start Learning</Link></li>
              <li><Link to="/reference/glossary" className="text-gray-300 hover:text-raf-blue">Glossary</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-raf-blue">Resources</Link></li>
            </ul>
          </div>

          {/* Course Modules */}
          <div>
            <h3 className="text-lg font-bold mb-4">Course Modules</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/learn/module-1" className="text-gray-300 hover:text-raf-blue">Module 1: Fundamentals</Link></li>
              <li><Link to="/learn/module-2" className="text-gray-300 hover:text-raf-blue">Module 2: Link 16 Basics</Link></li>
              <li><Link to="/learn/module-3" className="text-gray-300 hover:text-raf-blue">Module 3: MIDS-JTRS</Link></li>
              <li><Link to="/learn/module-4" className="text-gray-300 hover:text-raf-blue">Module 4: Operations</Link></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-lg font-bold mb-4">Notice</h3>
            <p className="text-xs text-gray-400">
              This is an educational resource based on open-source information.
              No classified or sensitive operational details are included.
              For official training, refer to authorized military channels.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {currentYear} Typhoon Communication Systems Training. Educational purposes only.</p>
          <p className="mt-2">
            <Link to="/reference/glossary" className="hover:text-raf-blue">Glossary</Link>
            {' • '}
            <Link to="/reference/troubleshooting" className="hover:text-raf-blue">Troubleshooting</Link>
            {' • '}
            <Link to="/resources" className="hover:text-raf-blue">Resources</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
