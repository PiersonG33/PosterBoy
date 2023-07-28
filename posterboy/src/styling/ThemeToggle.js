// ThemeSwitcher.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <label>
      <input
        type="checkbox"
        checked={isDarkTheme}
        onChange={toggleTheme}
      />
      Dark Mode
    </label>
  );
};

export default ThemeToggle;
