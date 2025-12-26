import React from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import '../styles/animations.css';

const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header style={{
      ...styles.header,
      background: theme.colors.background.gradient
    }}>
      <div style={styles.container}>
        <div style={styles.logoSection}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>✈️</div>
            <span style={styles.logoText}>
              <span style={styles.logoPrimary}>Sky</span>
              <span style={styles.logoSecondary}>Services</span>
            </span>
          </div>
          <div style={styles.tagline}>
            Elevate Your Journey • Premium In-Flight Experiences
          </div>
        </div>
        
        <div style={styles.rightSection}>
          <ThemeToggle />
          
          <div style={styles.userSection}>
            <div style={styles.userInfo}>
              <span style={styles.userName}>Welcome, Passenger</span>
              <span style={styles.userStatus}>
                <span style={styles.statusDot}></span>
                Flight #BA287 • LHR → JFK
              </span>
            </div>
            <div style={styles.userAvatar}>
              <div style={styles.avatarIcon}>👤</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div style={styles.wave}></div>
      <div style={styles.floatingElement1}></div>
      <div style={styles.floatingElement2}></div>
    </header>
  );
};

const styles = {
  header: {
    color: 'white',
    padding: '1.5rem 3rem',
    position: 'relative' as 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as 'wrap',
    gap: '1.5rem',
    zIndex: 2,
    position: 'relative' as 'relative'
  },
  logoSection: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '0.5rem'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  logoIcon: {
    fontSize: '2rem',
    animation: 'float 3s ease-in-out infinite'
  },
  logoText: {
    fontSize: '1.8rem',
    fontWeight: 800,
    letterSpacing: '-0.5px'
  },
  logoPrimary: {
    color: 'white'
  },
  logoSecondary: {
    color: '#fbbf24',
    marginLeft: '4px'
  },
  tagline: {
    fontSize: '0.875rem',
    opacity: 0.9,
    fontWeight: 300,
    letterSpacing: '0.5px'
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '0.5rem 1rem',
    borderRadius: '16px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '2px'
  },
  userName: {
    fontSize: '1rem',
    fontWeight: 600
  },
  userStatus: {
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    opacity: 0.9
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#10b981',
    display: 'inline-block'
  },
  userAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarIcon: {
    fontSize: '2rem'
  },
  wave: {
    position: 'absolute' as 'absolute',
    bottom: '-10px',
    left: 0,
    width: '100%',
    height: '40px',
    background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
    animation: 'shimmer 3s infinite linear'
  },
  floatingElement1: {
    position: 'absolute' as 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
    background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    top: '20%',
    left: '10%',
    animation: 'float 8s ease-in-out infinite',
    filter: 'blur(2px)'
  },
  floatingElement2: {
    position: 'absolute' as 'absolute',
    width: '80px',
    height: '80px',
    borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
    background: 'linear-gradient(45deg, rgba(251,191,36,0.1), rgba(255,255,255,0.05))',
    bottom: '20%',
    right: '15%',
    animation: 'float 6s ease-in-out infinite reverse',
    filter: 'blur(1px)'
  }
};

export default Header;