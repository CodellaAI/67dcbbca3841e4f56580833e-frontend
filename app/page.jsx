
"use client";

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddEntry = async () => {
    setLoading(true);
    setStatus(null);
    
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/entries`);
      setStatus({ type: 'success', message: 'Entry added successfully!' });
    } catch (error) {
      console.error('Error adding entry:', error);
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to add entry. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Simple Data Recorder</h1>
        
        <p className="text-center text-gray-600">
          Click the button below to add a new entry to the database.
        </p>
        
        <div className="flex justify-center">
          <button
            onClick={handleAddEntry}
            disabled={loading}
            className={`px-6 py-3 rounded-lg text-white font-medium transition-colors
              ${loading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'}`}
          >
            {loading ? 'Adding...' : 'Add New Entry'}
          </button>
        </div>
        
        {status && (
          <div className={`p-4 rounded-md ${
            status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {status.message}
          </div>
        )}
      </div>
    </main>
  );
}
