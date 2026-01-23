import { useState } from 'react';
import { jSeriesMessages } from '../../data/referenceData';

const JSeriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(jSeriesMessages.map(m => m.category))];

  const filteredMessages = jSeriesMessages.filter(msg => {
    const matchesSearch = msg.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         msg.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || msg.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-deep-navy mb-4">J-Series Messages Reference</h1>
      <p className="text-lg text-gray-600 mb-8">
        Quick reference for Link 16 J-Series messages commonly used by Typhoon.
      </p>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-raf-blue"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-raf-blue text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMessages.map((msg, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="w-16 h-16 bg-deep-navy text-white rounded-lg flex items-center justify-center font-bold text-lg">
                {msg.id}
              </div>
              <span className="px-3 py-1 bg-raf-blue text-white text-xs rounded-full">
                {msg.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-deep-navy mb-2">{msg.name}</h3>
            <p className="text-gray-700 mb-3">{msg.description}</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-gray-600">
                <span className="font-semibold">Frequency:</span>
                <span>{msg.frequency}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span className="font-semibold">Common Use:</span>
                <span className="text-right">{msg.commonUse}</span>
              </div>
              {msg.fields && (
                <div className="mt-3 pt-3 border-t">
                  <span className="font-semibold text-gray-700">Fields:</span>
                  <ul className="list-disc list-inside mt-1 text-gray-600">
                    {msg.fields.map((field, idx) => (
                      <li key={idx}>{field}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredMessages.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No messages found matching your search.
        </div>
      )}
    </div>
  );
};

export default JSeriesPage;
