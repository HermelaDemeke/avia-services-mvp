import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SelectedService } from '../types';
import { theme } from '../styles/theme';
import '../styles/animations.css';

interface SelectedServicesProps {
  selectedServices: SelectedService[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

const SelectedServices: React.FC<SelectedServicesProps> = ({
  selectedServices,
  onRemove,
  onCheckout
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const total = selectedServices.reduce((sum, service) => sum + service.price * service.quantity, 0);
  const itemCount = selectedServices.reduce((sum, service) => sum + service.quantity, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      onCheckout();
      setIsCheckingOut(false);
    }, 1500);
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Summary Bar */}
      <div 
        style={styles.summaryBar}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div style={styles.summaryLeft}>
          <div style={styles.cartIcon}>
            🛒
          </div>
          <div style={styles.summaryText}>
            <h3 style={styles.summaryTitle}>Your Selection</h3>
            <p style={styles.summarySubtitle}>
              {itemCount} item{itemCount !== 1 ? 's' : ''} • ${total.toFixed(2)}
            </p>
          </div>
        </div>
        
        <div style={styles.summaryRight}>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? '▲' : '▼'}
          </motion.div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <motion.div
          style={styles.expandedContent}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Services List */}
          <div style={styles.servicesList}>
            {selectedServices.length === 0 ? (
              <div style={styles.emptyState}>
                <div style={styles.emptyIcon}>🛒</div>
                <h4 style={styles.emptyTitle}>Your cart is empty</h4>
                <p style={styles.emptyText}>Add services from above to get started</p>
              </div>
            ) : (
              selectedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  style={styles.serviceItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div style={styles.serviceInfo}>
                    <div style={styles.serviceHeader}>
                      <span style={styles.serviceName}>{service.name}</span>
                      <span style={styles.serviceQuantity}>×{service.quantity}</span>
                    </div>
                    <p style={styles.serviceDescription}>{service.description}</p>
                  </div>
                  
                  <div style={styles.serviceActions}>
                    <span style={styles.servicePrice}>${service.price * service.quantity}</span>
                    <motion.button
                      onClick={() => onRemove(service.id)}
                      style={styles.removeButton}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      🗑️
                    </motion.button>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Total Section */}
          {selectedServices.length > 0 && (
            <motion.div
              style={styles.totalSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div style={styles.totalDetails}>
                <div style={styles.totalRow}>
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div style={styles.totalRow}>
                  <span>Service Fee</span>
                  <span>$0.00</span>
                </div>
                <div style={styles.totalRow}>
                  <span>Tax</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
                <div style={styles.divider}></div>
                <div style={styles.grandTotal}>
                  <span>Total Amount</span>
                  <span style={styles.grandTotalAmount}>
                    ${(total * 1.1).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <motion.button
                onClick={handleCheckout}
                style={styles.checkoutButton}
                disabled={selectedServices.length === 0 || isCheckingOut}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={isCheckingOut ? { scale: [1, 1.05, 1] } : {}}
                transition={isCheckingOut ? { repeat: Infinity, duration: 1 } : {}}
              >
                {isCheckingOut ? (
                  <>
                    <div style={styles.spinner}></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <span style={styles.checkoutIcon}>🧾</span>
                    <span>Proceed to Checkout</span>
                    <span style={styles.checkoutPrice}>${(total * 1.1).toFixed(2)}</span>
                  </>
                )}
              </motion.button>

              {/* Security Message */}
              <div style={styles.securityMessage}>
                🔒 Secure checkout • 256-bit encryption • Your payment is safe
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.shadows.lg,
    overflow: 'hidden',
    border: `1px solid ${theme.colors.border}`,
    marginTop: theme.spacing.xl
  },
  summaryBar: {
    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    color: 'white',
    padding: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none' as 'none'
  },
  summaryLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md
  },
  cartIcon: {
    fontSize: '1.5rem',
    animation: 'bounce 2s infinite'
  },
  summaryText: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '4px'
  },
  summaryTitle: {
    margin: 0,
    fontSize: '1.3rem',
    fontWeight: 700
  },
  summarySubtitle: {
    margin: 0,
    fontSize: '0.9rem',
    opacity: 0.9
  },
  summaryRight: {
    fontSize: '1.2rem',
    opacity: 0.8
  },
  expandedContent: {
    overflow: 'hidden'
  },
  servicesList: {
    padding: theme.spacing.lg,
    maxHeight: '400px',
    overflowY: 'auto' as 'auto'
  },
  emptyState: {
    textAlign: 'center' as 'center',
    padding: theme.spacing.xl,
    color: theme.colors.text.muted
  },
  emptyIcon: {
    fontSize: '3rem',
    marginBottom: theme.spacing.md
  },
  emptyTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text.primary
  },
  emptyText: {
    fontSize: '0.9rem'
  },
  serviceItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    backgroundColor: 'white',
    borderRadius: theme.borderRadius.lg,
    border: `1px solid ${theme.colors.border}`,
    transition: 'all 0.3s ease'
  },
  serviceInfo: {
    flex: 1,
    marginRight: theme.spacing.md
  },
  serviceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs
  },
  serviceName: {
    fontWeight: 600,
    color: theme.colors.text.primary,
    fontSize: '1rem'
  },
  serviceQuantity: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 600
  },
  serviceDescription: {
    fontSize: '0.85rem',
    color: theme.colors.text.secondary,
    margin: 0
  },
  serviceActions: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md
  },
  servicePrice: {
    fontWeight: 700,
    color: theme.colors.primary,
    fontSize: '1.1rem',
    minWidth: '60px',
    textAlign: 'right' as 'right'
  },
  removeButton: {
    background: 'none',
    border: 'none',
    color: theme.colors.danger,
    cursor: 'pointer',
    padding: '6px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    fontSize: '1.2rem'
  },
  totalSection: {
    padding: theme.spacing.lg,
    borderTop: `1px solid ${theme.colors.border}`,
    backgroundColor: 'rgba(248, 250, 252, 0.8)'
  },
  totalDetails: {
    marginBottom: theme.spacing.lg
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
    fontSize: '0.9rem',
    color: theme.colors.text.secondary
  },
  divider: {
    height: '1px',
    background: theme.colors.border,
    margin: `${theme.spacing.md} 0`
  },
  grandTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.1rem',
    fontWeight: 700,
    color: theme.colors.text.primary,
    marginTop: theme.spacing.md
  },
  grandTotalAmount: {
    fontSize: '1.5rem',
    color: theme.colors.success
  },
  checkoutButton: {
    width: '100%',
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    border: 'none',
    borderRadius: theme.borderRadius.lg,
    fontSize: '1.1rem',
    fontWeight: 700,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
    boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.4)',
    transition: 'all 0.3s ease',
    position: 'relative' as 'relative'
  },
  checkoutIcon: {
    fontSize: '1.2rem'
  },
  checkoutPrice: {
    marginLeft: 'auto',
    fontSize: '1.2rem',
    fontWeight: 800
  },
  spinner: {
    width: '20px',
    height: '20px',
    border: '3px solid rgba(255,255,255,0.3)',
    borderTop: '3px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginRight: '10px'
  },
  securityMessage: {
    textAlign: 'center' as 'center',
    fontSize: '0.8rem',
    color: theme.colors.text.muted,
    marginTop: theme.spacing.md,
    padding: theme.spacing.sm,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderRadius: theme.borderRadius.md
  }
};

export default SelectedServices;