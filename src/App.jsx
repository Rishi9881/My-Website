import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '2rem auto', 
      padding: '1.5rem', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Test Component</h1>
      
      {/* Counter section */}
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '4px',
        marginBottom: '1rem'
      }}>
        <h2 style={{ marginBottom: '0.5rem' }}>Counter: {count}</h2>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={() => setCount(count + 1)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            +
          </button>
          <button 
            onClick={() => setCount(count - 1)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            -
          </button>
          <button 
            onClick={() => setCount(0)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Text input section */}
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '4px',
        marginBottom: '1rem'
      }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Enter text:
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
          placeholder="Type something..."
        />
        {text && (
          <p style={{ marginTop: '0.5rem', color: '#666' }}>
            You typed: <strong>{text}</strong>
          </p>
        )}
      </div>

      {/* Status indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ 
          width: '12px', 
          height: '12px', 
          backgroundColor: '#28a745', 
          borderRadius: '50%' 
        }}></div>
        <span style={{ fontSize: '0.9rem', color: '#666' }}>Component is working!</span>
      </div>
    </div>
  );
}

export default App;