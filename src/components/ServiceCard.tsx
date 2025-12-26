import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Service } from '../types';
import '../styles/animations.css';

interface ServiceCardProps {
  service: Service;
  onAdd: (service: Service) => void;
  isAdded: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onAdd, isAdded }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showRipple, setShowRipple] = useState(false);
  const { theme } = useTheme();

  const handleAddClick = () => {
    onAdd(service);
    setShowRipple(true);
    setTimeout(() => setShowRipple(false), 600);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Premium':
        return '⭐';
      case 'Comfort':
        return '🛡️';
      case 'Time-Saving':
        return '⏱️';
      default:
        return '✨';
    }
  };

  return (
    <div
      style={{
        ...styles.card,
        background: `linear-gradient(145deg, ${theme.colors.background.card}, ${theme.colors.background.secondary})`,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadows.md
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={isHovered ? 'hover-lift' : ''}
    >
      {/* Card Header */}
      <div style={styles.header}>
        <div style={{
          ...styles.categoryBadge,
          backgroundColor: `${theme.colors.primary}15`
        }}>
          <span style={styles.categoryIcon}>{getCategoryIcon(service.category)}</span>
          <span style={{...styles.categoryText, color: theme.colors.primary}}>
            {service.category}
          </span>
        </div>
        <div style={styles.popularTag}>
          <span style={styles.popularText}>Popular</span>
        </div>
      </div>

      {/* Card Content */}
      <div style={styles.content}>
        <h3 style={{...styles.name, color: theme.colors.text.primary}}>
          {service.name}
        </h3>
        <p style={{...styles.description, color: theme.colors.text.secondary}}>
          {service.description}
        </p>
        
        {/* Features List */}
        <div style={styles.features}>
          <span style={{...styles.featureItem, color: theme.colors.text.tertiary}}>
            ✓ Instant Activation
          </span>
          <span style={{...styles.featureItem, color: theme.colors.text.tertiary}}>
            ✓ Refundable
          </span>
          <span style={{...styles.featureItem, color: theme.colors.text.tertiary}}>
            ✓ Digital Delivery
          </span>
        </div>
      </div>

      {/* Card Footer */}
      <div style={{...styles.footer, borderTop: `1px solid ${theme.colors.border}`}}>
        <div style={styles.priceSection}>
          <div style={{...styles.priceLabel, color: theme.colors.text.muted}}>
            Price
          </div>
          <div style={styles.priceContainer}>
            <span style={{...styles.priceCurrency, color: theme.colors.primary}}>
              $
            </span>
            <span style={{...styles.priceAmount, color: theme.colors.primary}}>
              {service.price}
            </span>
            <span style={{...styles.priceUnit, color: theme.colors.text.muted}}>
              /person
            </span>
          </div>
        </div>

        {/* Add Button with Ripple Effect */}
        <div style={styles.buttonContainer}>
          {showRipple && <div style={styles.ripple} className="ripple"></div>}
          <button
            onClick={handleAddClick}
            style={{
              ...styles.button,
              background: isAdded 
                ? `linear-gradient(135deg, ${theme.colors.success}, #059669)`
                : `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            {isAdded ? (
              <>
                <span style={styles.buttonIcon}>✓</span>
                <span>Added</span>
              </>
            ) : (
              <>
                <span style={styles.buttonIcon}>+</span>
                <span>Add Service</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: '24px',
    padding: '2rem',
    position: 'relative' as 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    minHeight: '320px',
    display: 'flex',
    flexDirection: 'column' as 'column'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.5rem'
  },
  categoryBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: 600
  },
  categoryIcon: {
    fontSize: '1rem'
  },
  categoryText: {
    fontSize: '0.75rem'
  },
  popularTag: {
    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.7rem',
    fontWeight: 700,
    color: 'white',
    transform: 'rotate(5deg)',
    boxShadow: '0 2px 4px rgba(245, 158, 11, 0.3)'
  },
  popularText: {
    color: 'white'
  },
  content: {
    flex: 1,
    marginBottom: '1.5rem'
  },
  name: {
    fontSize: '1.4rem',
    fontWeight: 700,
    margin: '0 0 10px 0',
    lineHeight: 1.3,
    background: 'linear-gradient(135deg, currentColor 30%, #475569 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  description: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    margin: '0 0 15px 0'
  },
  features: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '6px',
    marginTop: 'auto'
  },
  featureItem: {
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1.5rem'
  },
  priceSection: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '2px'
  },
  priceLabel: {
    fontSize: '0.75rem',
    textTransform: 'uppercase' as 'uppercase',
    letterSpacing: '0.5px'
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '2px'
  },
  priceCurrency: {
    fontSize: '1rem',
    fontWeight: 600
  },
  priceAmount: {
    fontSize: '2rem',
    fontWeight: 800,
    lineHeight: 1
  },
  priceUnit: {
    fontSize: '0.75rem',
    marginLeft: '2px'
  },
  buttonContainer: {
    position: 'relative' as 'relative',
    overflow: 'hidden'
  },
  ripple: {
    position: 'absolute' as 'absolute',
    borderRadius: '50%',
    backgroundColor: 'rgba(59, 130, 246, 0.3)',
    width: '100px',
    height: '100px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '12px',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)',
    position: 'relative' as 'relative',
    zIndex: 2
  },
  buttonIcon: {
    fontSize: '1rem',
    fontWeight: 'bold'
  }
};

export default ServiceCard;