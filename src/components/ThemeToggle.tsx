import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={styles.button}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div style={styles.container}>
        <div style={styles.iconContainer}>
          <div style={styles.sunIcon}>☀️</div>
          <div style={styles.moonIcon}>🌙</div>
        </div>
        <div style={{
          ...styles.toggle,
          transform: isDarkMode ? 'translateX(28px)' : 'translateX(2px)',
          backgroundColor: isDarkMode ? '#475569' : '#f59e0b'
        }}>
          <div style={{
            ...styles.toggleKnob,
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff'
          }} />
        </div>
      </div>
      <span style={styles.label}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </span>
    </button>
  );
};

const styles = {
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'inherit',
    transition: 'all 0.3s ease'
  },
  container: {
    position: 'relative' as 'relative',
    width: '60px',
    height: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '2px',
    display: 'flex',
    alignItems: 'center'
  },
  iconContainer: {
    position: 'absolute' as 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 6px',
    pointerEvents: 'none' as 'none'
  },
  sunIcon: {
    fontSize: '16px',
    opacity: 0.8
  },
  moonIcon: {
    fontSize: '16px',
    opacity: 0.8
  },
  toggle: {
    position: 'absolute' as 'absolute',
    width: '26px',
    height: '26px',
    borderRadius: '13px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggleKnob: {
    width: '18px',
    height: '18px',
    borderRadius: '9px',
    transition: 'all 0.3s ease'
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 500
  }
};

export default ThemeToggle;