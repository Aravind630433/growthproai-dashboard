import React from 'react';
import BusinessForm from './components/BusinessForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Local Business Dashboard</h1>
      <BusinessForm />
    </div>
  );
}

export default App;