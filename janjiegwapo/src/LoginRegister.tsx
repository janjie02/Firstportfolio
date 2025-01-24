import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { useAuth } from './AuthContext';

const LoginRegister: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login
      const storedUser = localStorage.getItem(username);
      if (storedUser && JSON.parse(storedUser).password === password) {
        login(username);
        navigate('/inventory-management');
      } else {
        alert('Invalid username or password');
      }
    } else {
      // Handle registration
      if (localStorage.getItem(username)) {
        alert('Username already exists');
      } else {
        localStorage.setItem(username, JSON.stringify({ password }));
        alert('Account created successfully');
        setIsLogin(true);
      }
    }
  };

  return (
    <div className="login-register-page">
      <div className="login-register-container">
        <h1>{isLogin ? 'Login' : 'Register'}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <div className="toggle-container">
          <button className="toggle-link" onClick={handleToggle}>
            {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;