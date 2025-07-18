import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Test Component</h1>
      
      <div className="space-y-4">
        {/* Counter section */}
        <div className="p-4 bg-gray-50 rounded">
          <h2 className="text-lg font-semibold mb-2">Counter: {count}</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              +
            </button>
            <button 
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -
            </button>
            <button 
              onClick={() => setCount(0)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Text input section */}
        <div className="p-4 bg-gray-50 rounded">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter text:
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type something..."
          />
          {text && (
            <p className="mt-2 text-sm text-gray-600">
              You typed: <span className="font-medium">{text}</span>
            </p>
          )}
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Component is working!</span>
        </div>
      </div>
    </div>
  );
}

export default App;