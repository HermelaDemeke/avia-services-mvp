import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer style={{
      ...styles.footer,
      backgroundColor: theme.colors.background.tertiary,
      color: theme.colors.text.light
    }}>
      <div style={styles.mainFooter}>
        <div style={styles.container}>
          <div style={styles.features}>
            <div style={{
              ...styles.feature,
              backgroundColor: `${theme.colors.primary}15`
            }}>
              <div style={{
                ...styles.featureIcon,
                color: theme.colors.accent,
                backgroundColor: `${theme.colors.accent}20`
              }}>
                🛡️
              </div>
              <div style={styles.featureText}>
                <h4 style={{ color: theme.colors.text.primary }}>Secure Payment</h4>
                <p style={{ color: theme.colors.text.secondary }}>256-bit SSL encryption</p>
              </div>
            </div>
            
            <div style={{
              ...styles.feature,
              backgroundColor: `${theme.colors.primary}15`
            }}>
              <div style={{
                ...styles.featureIcon,
                color: theme.colors.accent,
                backgroundColor: `${theme.colors.accent}20`
              }}>
                📞
              </div>
              <div style={styles.featureText}>
                <h4 style={{ color: theme.colors.text.primary }}>24/7 Support</h4>
                <p style={{ color: theme.colors.text.secondary }}>Dedicated customer service</p>
              </div>
            </div>
            
            <div style={{
              ...styles.feature,
              backgroundColor: `${theme.colors.primary}15`
            }}>
              <div style={{
                ...styles.featureIcon,
                color: theme.colors.accent,
                backgroundColor: `${theme.colors.accent}20`
              }}>
                ✈️
              </div>
              <div style={styles.featureText}>
                <h4 style={{ color: theme.colors.text.primary }}>Instant Access</h4>
                <p style={{ color: theme.colors.text.secondary }}>Digital delivery in seconds</p>
              </div>
            </div>
          </div>
          
          <div style={{
            ...styles.divider,
            background: `linear-gradient(90deg, transparent, ${theme.colors.border}, transparent)`
          }}></div>
          
          <div style={styles.bottomFooter}>
            <div style={styles.copyright}>
              <p style={{ color: theme.colors.text.muted }}>
                © 2024 SkyServices. All rights reserved.
              </p>
              <p style={{ color: theme.colors.text.muted }}>
                This is a demonstration MVP for airline additional services.
              </p>
            </div>
            
            <div style={styles.techStack}>
              <span style={{ color: theme.colors.text.muted }}>Built with:</span>
              <div style={styles.techIcons}>
                <span style={{
                  ...styles.techBadge,
                  backgroundColor: `${theme.colors.primary}20`,
                  color: theme.colors.primary
                }}>
                  React
                </span>
                <span style={{
                  ...styles.techBadge,
                  backgroundColor: `${theme.colors.primary}20`,
                  color: theme.colors.primary
                }}>
                  TypeScript
                </span>
                <span style={{
                  ...styles.techBadge,
                  backgroundColor: `${theme.colors.primary}20`,
                  color: theme.colors.primary
                }}>
                  Framer Motion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background */}
      <div style={{
        ...styles.footerBackground,
        background: `radial-gradient(circle at 20% 80%, ${theme.colors.primary}10 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${theme.colors.secondary}10 0%, transparent 50%)`
      }}></div>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: 'auto',
    position: 'relative' as 'relative',
    overflow: 'hidden'
  },
  mainFooter: {
    position: 'relative' as 'relative',
    zIndex: 2,
    padding: '3rem 3rem 2rem'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.5rem',
    borderRadius: '16px',
    transition: 'all 0.3s ease'
  },
  featureIcon: {
    padding: '1rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem'
  },
  featureText: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '4px'
  },
  divider: {
    height: '1px',
    margin: '3rem 0'
  },
  bottomFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as 'wrap',
    gap: '1.5rem'
  },
  copyright: {
    fontSize: '0.875rem'
  },
  techStack: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  techIcons: {
    display: 'flex',
    gap: '8px'
  },
  techBadge: {
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: 600
  },
  footerBackground: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1
  }
};

export default Footer;