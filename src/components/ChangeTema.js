import React from 'react';
import "./Tema.css";
import { useTheme } from '../context/TemaContext.js';

export const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme(); 
  return (
    <button onClick={toggleTheme} style={{ padding: '10px', fontSize: '16px' }}>
      {isDarkMode ? 'Mudar tema Claro' : 'Mudar tema Escuro'}
    </button>
  );
};
