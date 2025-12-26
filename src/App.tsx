import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import ServicesList from './components/ServicesList';
import SelectedServices from './components/SelectedServices';
import Footer from './components/Footer';
import { servicesData } from './data/mockServices';
import { Service, SelectedService } from './types';
import { useTheme } from './context/ThemeContext';
import './styles/App.css';
import './styles/animations.css';

// Main App Content Component
const AppContent: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: string } | null>(null);
  const { theme } = useTheme();

  // Show welcome notification
  useEffect(() => {
    setTimeout(() => {
      setNotification({
        message: '🎉 Welcome to SkyServices! Explore premium airline services.',
        type: 'info'
      });
      setTimeout(() => setNotification(null), 5000);
    }, 1000);
  }, []);

  const handleAddService = (service: Service) => {
    setSelectedServices(prev => {
      const existing = prev.find(s => s.id === service.id);
      if (existing) {
        return prev.map(s =>
          s.id === service.id
            ? { ...s, quantity: s.quantity + 1 }
            : s
        );
      } else {
        setNotification({
          message: `✅ "${service.name}" added to your selection!`,
          type: 'success'
        });
        setTimeout(() => setNotification(null), 3000);
        
        return [...prev, { ...service, quantity: 1 }];
      }
    });
  };

  const handleRemoveService = (id: string) => {
    const service = selectedServices.find(s => s.id === id);
    setSelectedServices(prev => prev.filter(service => service.id !== id));
    
    if (service) {
      setNotification({
        message: `🗑️ "${service.name}" removed from selection`,
        type: 'warning'
      });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const handleCheckout = () => {
    const total = selectedServices.reduce((sum, s) => sum + s.price * s.quantity, 0);
    
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    
    setNotification({
      message: `🎊 Order confirmed! Total: $${(total * 1.1).toFixed(2)}`,
      type: 'success'
    });
    setTimeout(() => setNotification(null), 5000);
    
    setTimeout(() => {
      setSelectedServices([]);
    }, 2000);
  };

  const premiumServices = servicesData.filter(s => s.category === 'Premium');
  const comfortServices = servicesData.filter(s => s.category === 'Comfort');
  const otherServices = servicesData.filter(s => !['Premium', 'Comfort'].includes(s.category));

  return (
    <div className="App" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: theme.colors.background.primary,
      color: theme.colors.text.primary,
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Notification Toast */}
      {notification && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 25px',
            borderRadius: '16px',
            color: 'white',
            zIndex: 1000,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            fontWeight: 600,
            maxWidth: '400px',
            backgroundColor: notification.type === 'success' 
              ? '#10b981' 
              : notification.type === 'warning'
              ? '#f59e0b'
              : theme.colors.primary
          }}
          className="slide-in-up"
        >
          {notification.message}
        </div>
      )}

      {/* Confetti Effect */}
      {showConfetti && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 999
        }}>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '10px',
                height: '20px',
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9a76', '#a29bfe'][Math.floor(Math.random() * 5)],
                transform: `rotate(${Math.random() * 360}deg)`
              }}
              className="confetti"
            />
          ))}
        </div>
      )}

      <Header />
      
      <main style={{
        flex: 1,
        padding: '3rem 0'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          {/* Hero Section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            padding: '3rem 0'
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 800,
              color: theme.colors.text.primary,
              marginBottom: '2rem',
              lineHeight: 1.2
            }}>
              Elevate Your Flight Experience
              <span style={{
                display: 'block',
                fontSize: '1.2rem',
                fontWeight: 400,
                color: theme.colors.text.secondary,
                marginTop: '1rem'
              }}>
                Premium services tailored for your comfort and convenience
              </span>
            </h1>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem',
              marginTop: '3rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  background: theme.colors.background.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  1M+
                </span>
                <span style={{
                  fontSize: '0.9rem',
                  color: theme.colors.text.secondary,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Services Booked
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  background: theme.colors.background.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  4.9★
                </span>
                <span style={{
                  fontSize: '0.9rem',
                  color: theme.colors.text.secondary,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Customer Rating
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  background: theme.colors.background.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  24/7
                </span>
                <span style={{
                  fontSize: '0.9rem',
                  color: theme.colors.text.secondary,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Support
                </span>
              </div>
            </div>
          </div>

          {/* Services Sections */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
            marginBottom: '4rem'
          }}>
            <section>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '2rem',
                color: theme.colors.text.primary
              }}>
                <span style={{
                  background: theme.colors.background.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Premium
                </span>{' '}
                Services
              </h2>
              <ServicesList
                services={premiumServices}
                selectedServices={selectedServices}
                onAddService={handleAddService}
              />
            </section>

            <section>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '2rem',
                color: theme.colors.text.primary
              }}>
                <span style={{
                  background: theme.colors.background.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Comfort
                </span>{' '}
                & Convenience
              </h2>
              <ServicesList
                services={comfortServices}
                selectedServices={selectedServices}
                onAddService={handleAddService}
              />
            </section>

            <section>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '2rem',
                color: theme.colors.text.primary
              }}>
                Additional{' '}
                <span style={{
                  background: theme.colors.background.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Services
                </span>
              </h2>
              <ServicesList
                services={otherServices}
                selectedServices={selectedServices}
                onAddService={handleAddService}
              />
            </section>
          </div>

          {/* Selected Services */}
          <SelectedServices
            selectedServices={selectedServices}
            onRemove={handleRemoveService}
            onCheckout={handleCheckout}
          />

          {/* Info Banner */}
          <div style={{
            background: `linear-gradient(135deg, ${theme.colors.primary}10, ${theme.colors.secondary}10)`,
            borderRadius: '24px',
            padding: '3rem',
            marginTop: '4rem',
            border: `1px solid ${theme.colors.primary}20`
          }}>
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: '3rem',
                color: theme.colors.text.primary
              }}>
                Why Choose SkyServices?
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem'
              }}>
                <div style={{
                  textAlign: 'center',
                  padding: '2rem',
                  backgroundColor: theme.colors.background.card,
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>⚡</div>
                  <h4 style={{ color: theme.colors.text.primary, marginBottom: '0.5rem' }}>Instant Activation</h4>
                  <p style={{ color: theme.colors.text.secondary }}>Services activated immediately upon booking</p>
                </div>
                
                <div style={{
                  textAlign: 'center',
                  padding: '2rem',
                  backgroundColor: theme.colors.background.card,
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🔄</div>
                  <h4 style={{ color: theme.colors.text.primary, marginBottom: '0.5rem' }}>Flexible Changes</h4>
                  <p style={{ color: theme.colors.text.secondary }}>Modify or cancel up to 24 hours before flight</p>
                </div>
                
                <div style={{
                  textAlign: 'center',
                  padding: '2rem',
                  backgroundColor: theme.colors.background.card,
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🔒</div>
                  <h4 style={{ color: theme.colors.text.primary, marginBottom: '0.5rem' }}>Secure Payment</h4>
                  <p style={{ color: theme.colors.text.secondary }}>Bank-level security for all transactions</p>
                </div>
                
                <div style={{
                  textAlign: 'center',
                  padding: '2rem',
                  backgroundColor: theme.colors.background.card,
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🌟</div>
                  <h4 style={{ color: theme.colors.text.primary, marginBottom: '0.5rem' }}>Best Price Guarantee</h4>
                  <p style={{ color: theme.colors.text.secondary }}>Found cheaper? We'll match the price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Main App Component with ThemeProvider
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;