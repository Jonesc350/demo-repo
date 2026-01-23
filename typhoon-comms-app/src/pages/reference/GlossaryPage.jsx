import { useState } from 'react';
import { glossary, abbreviations } from '../../data/referenceData';

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Systems', 'Operations', 'Security', 'Link 16', 'EW', 'Tactics', 'Procedures', 'Standards'];

  const filteredGlossary = glossary.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-deep-navy mb-4">Glossary & Acronyms</h1>
      <p className="text-lg text-gray-600 mb-8">
        Comprehensive reference for terminology and acronyms used in Typhoon communication systems.
      </p>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search terms..."
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

      {/* Glossary Terms */}
      <div className="space-y-4">
        {filteredGlossary.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-deep-navy mb-2">{item.term}</h3>
                <p className="text-gray-700">{item.definition}</p>
              </div>
              <span className="ml-4 px-3 py-1 bg-raf-blue text-white text-sm rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredGlossary.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No terms found matching your search.
        </div>
      )}

      {/* Quick Reference Abbreviations */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-deep-navy mb-6">Quick Reference: A-Z</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(abbreviations).map(([letter, items]) => (
            <div key={letter} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-2xl font-bold text-raf-blue mb-3">{letter}</h3>
              <ul className="space-y-2 text-sm">
                {items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;
