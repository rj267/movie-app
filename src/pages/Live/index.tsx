import React, { useEffect, useState } from 'react';
import { ChannelGrid } from './ChannelGrid'; // Assume this component is created for displaying channels
import { SearchBar } from './SearchBar'; // Assume this is a component for search functionality
import { CategoryFilter } from './CategoryFilter'; // Assuming this handles category filtering

const Live: React.FC = () => {
    const [streams, setStreams] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        // Fetch streams from a hypothetical API
        const fetchStreams = async () => {
            const response = await fetch('YOUR_API_ENDPOINT'); // Replace with actual API endpoint
            const data = await response.json();
            setStreams(data);
        };
        fetchStreams();
    }, []);

    const filteredStreams = streams.filter(stream => {
        const matchesSearch = stream.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || stream.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Live Streams</h1>
            <SearchBar setSearchTerm={setSearchTerm} />
            <CategoryFilter setSelectedCategory={setSelectedCategory} />
            <section className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Featured Streams</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredStreams.slice(0, 6).map(stream => (
                        <div key={stream.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={stream.thumbnail} alt={stream.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{stream.name}</h3>
                                <p className="text-sm text-gray-600">{stream.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <ChannelGrid streams={filteredStreams} />
        </div>
    );
};

export default Live;