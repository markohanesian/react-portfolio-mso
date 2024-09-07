import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

export default function DarkModeToggleSwitch({ darkMode, setDarkMode }) {
  return (
    <DarkModeToggle
      size={60}
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
    />
  );
}
