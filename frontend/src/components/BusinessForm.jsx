import React, { useState } from 'react';

const BusinessForm = () => {
  const [business, setBusiness] = useState({ name: '', location: '' });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setBusiness({ ...business, [e.target.name]: e.target.value });
    setError(''); // Clear error when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setData(null);

    // ✅ Custom Validation
    if (!business.name.trim() || !business.location.trim()) {
      setError('Please fill out both Business Name and Location.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/business-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(business),
      });

      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const regenerate = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/regenerate-headline?name=${business.name}&location=${business.location}`
      );
      const result = await res.json();
      setData((prev) => ({ ...prev, headline: result.headline }));
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to regenerate headline.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Business Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md border border-gray-200"
      >
        <input
          type="text"
          name="name"
          placeholder="Business Name"
          className="w-full border border-gray-300 px-4 py-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={business.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full border border-gray-300 px-4 py-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={business.location}
          onChange={handleChange}
        />
        {/* 🔴 Error Message */}
        {error && (
          <p className="text-red-500 text-sm mb-3 font-medium">{error}</p>
        )}

        <button
          type="submit"
          className={`bg-blue-600 text-white font-semibold px-4 py-2 rounded-md w-full transition duration-200 hover:bg-blue-700 ${
            loading ? 'opacity-60 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {/* 🔄 Loading Spinner */}
      {loading && (
        <div className="flex justify-center mt-4">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* ✅ Output Card */}
      {!loading && data && (
        <div className="mt-6 bg-white p-6 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
          <div className="flex items-center text-yellow-500 text-xl font-semibold mb-2">
            ⭐ {data.rating} Rating
          </div>
          <div className="flex items-center text-gray-700 font-medium mb-2">
            📝 {data.reviews} Reviews
          </div>
          <div className="text-gray-800 mt-4 mb-2">
            <span className="text-orange-500 mr-2">🔥 SEO Headline:</span>
            <em className="text-lg italic text-gray-700">{data.headline}</em>
          </div>
          <button
            onClick={regenerate}
            className="mt-4 bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            {loading ? 'Regenerating...' : 'Regenerate Headline'}
          </button>
        </div>
      )}
    </>
  );
};

export default BusinessForm;