import React, { useState } from 'react';
import axios from 'axios';

function NameForm({ onNameSubmit }) {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Please enter your NAME!!');
      return;
    }
    try {
      await axios.post('http://localhost:8080/api/user', { name });
      onNameSubmit(name); 
      setErrorMessage('');
    } catch (error) {
      console.error('Error submitting name:', error);
      setErrorMessage('Failed to submit name.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <div className="nameformTitle">
        <h1>💣Exploding Kittens🐈</h1>
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="What's your name meow?"
        style={{
          backgroundColor: 'transparent',
          border: '1px solid #E8D7F1',
          color: '#D3BCCC',
          padding: '8px',
          borderRadius: '20px',
          border: "2px solid #E8D7F1",
          marginBottom: '10px',
          width: '250px',
          outline: 'none',
        }}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <br />
      <button
        type="submit"
        style={{
          backgroundColor: '#4A306D',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '20px',
          border: "2px solid #E8D7F1",
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bolder'
        }}
      >
        Start Game✌️
      </button>
    </form>
  );
}

export default NameForm;
