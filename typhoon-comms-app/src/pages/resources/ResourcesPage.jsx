const ResourcesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-deep-navy mb-4">Resources</h1>
      <p className="text-lg text-gray-600 mb-8">
        Additional training materials, documentation, and external resources.
      </p>

      {/* Documentation Library */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-deep-navy mb-6">Documentation Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-deep-navy mb-2">NATO STANAG 5516</h3>
            <p className="text-gray-600 mb-4">Link 16 standard documentation</p>
            <span className="text-sm text-gray-500">External Resource</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-deep-navy mb-2">MIDS Terminal Documentation</h3>
            <p className="text-gray-600 mb-4">Technical specifications and operational guides</p>
            <span className="text-sm text-gray-500">External Resource</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-deep-navy mb-2">Coalition Operations Guides</h3>
            <p className="text-gray-600 mb-4">Multi-national exercise and operational procedures</p>
            <span className="text-sm text-gray-500">External Resource</span>
          </div>
        </div>
      </div>

      {/* Training Videos */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-deep-navy mb-6">Training Videos</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            Training video links and multimedia resources would be added here for
            enhanced learning experiences.
          </p>
        </div>
      </div>

      {/* External Resources */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-deep-navy mb-6">External Resources</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-deep-navy mb-2">NATO Communications & Information Agency</h3>
            <p className="text-gray-600">Official NATO communications standards and publications</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-deep-navy mb-2">Eurofighter Consortium</h3>
            <p className="text-gray-600">Official Typhoon program information and updates</p>
          </div>
        </div>
      </div>

      {/* Updates */}
      <div>
        <h2 className="text-3xl font-bold text-deep-navy mb-6">Recent Updates</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-sm text-raf-blue font-semibold mb-2">Latest</div>
            <h3 className="font-bold text-lg mb-2">Course Complete - All 6 Modules Available</h3>
            <p className="text-gray-600">Comprehensive training from fundamentals to advanced topics now available.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
