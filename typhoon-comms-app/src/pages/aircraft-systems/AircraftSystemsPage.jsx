import { Link } from 'react-router-dom';

const AircraftSystemsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-deep-navy mb-4">Typhoon Communication Systems</h1>
      <p className="text-lg text-gray-600 mb-8">
        Overview of the Eurofighter Typhoon's integrated communication architecture.
      </p>

      {/* Overview */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold text-deep-navy mb-4">System Overview</h2>
        <p className="text-gray-700 mb-4">
          The Typhoon integrates multiple communication systems to provide comprehensive tactical
          capability in complex, multi-domain operations. These systems work together seamlessly
          through the Mission Computer to provide the pilot with real-time situational awareness
          and coordination capability.
        </p>
        <p className="text-gray-700">
          The architecture is designed for NATO interoperability, supporting coalition operations
          with standardized data links, voice communications, and identification systems.
        </p>
      </div>

      {/* Communication Systems */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-deep-navy mb-3">MIDS-JTRS (Link 16)</h3>
          <p className="text-gray-700 mb-4">
            Multifunctional Information Distribution System - Joint Tactical Radio System provides
            Link 16 tactical data link capability for sharing tracks, coordination, and weapons employment.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Jam-resistant TDMA networking</li>
            <li>J-Series message exchange</li>
            <li>Automatic track correlation</li>
            <li>Encrypted communications</li>
          </ul>
          <Link to="/learn/module-2" className="text-raf-blue hover:underline font-semibold">
            Learn More →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-deep-navy mb-3">Voice Communications</h3>
          <p className="text-gray-700 mb-4">
            Dual UHF/VHF radios with HAVE QUICK II anti-jam and SATURN secure voice provide reliable
            voice coordination in contested electromagnetic environments.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>HAVE QUICK II frequency hopping</li>
            <li>SATURN voice encryption</li>
            <li>Dual independent radios</li>
            <li>NATO interoperability</li>
          </ul>
          <Link to="/learn/module-5" className="text-raf-blue hover:underline font-semibold">
            Learn More →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-deep-navy mb-3">IFF Mode 5</h3>
          <p className="text-gray-700 mb-4">
            Identification Friend or Foe with Mode 5 Level 1 and 2 provides cryptographic
            authentication for positive identification of cooperative targets.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Cryptographic authentication</li>
            <li>Link 16 integration</li>
            <li>Automatic interrogation</li>
            <li>Spoof-resistant</li>
          </ul>
          <Link to="/learn/module-6" className="text-raf-blue hover:underline font-semibold">
            Learn More →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-deep-navy mb-3">SATCOM & Data Systems</h3>
          <p className="text-gray-700 mb-4">
            Beyond line-of-sight communications via SATCOM enable global C2 reach and
            intelligence updates during extended operations.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Global coverage</li>
            <li>Beyond horizon C2</li>
            <li>Mission data updates</li>
            <li>Intelligence downloads</li>
          </ul>
          <Link to="/learn/module-6" className="text-raf-blue hover:underline font-semibold">
            Learn More →
          </Link>
        </div>
      </div>

      {/* Integration */}
      <div className="bg-gradient-to-r from-deep-navy to-raf-blue text-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Integrated Architecture</h2>
        <p className="text-gray-100 mb-4">
          All communication systems connect through the Mission Computer via MIL-STD-1553 data buses,
          creating a unified tactical picture on the Multi-Function Head Down Displays.
        </p>
        <p className="text-gray-100 mb-6">
          This integration enables:
        </p>
        <ul className="list-disc list-inside text-gray-100 space-y-2 mb-6">
          <li>Automatic track correlation from multiple sources</li>
          <li>Unified cockpit displays</li>
          <li>Coordinated sensor and weapons employment</li>
          <li>Reduced pilot workload</li>
          <li>Enhanced situational awareness</li>
        </ul>
        <Link
          to="/learn"
          className="inline-block bg-white text-deep-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
};

export default AircraftSystemsPage;
