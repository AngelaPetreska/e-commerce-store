import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();   

    // Simplistic authentication: store username in local storage
    localStorage.setItem('username', username);
    navigate('/'); // Redirect to homepage
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button type="submit">Login</button>   

    </form>
  );
}

export default LoginPage;