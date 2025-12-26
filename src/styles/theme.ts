export const lightTheme = {
  name: 'light',
  colors: {
    primary: '#2563eb',
    secondary: '#7c3aed',
    accent: '#f59e0b',
    success: '#10b981',
    danger: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
    
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      card: '#ffffff',
      overlay: 'rgba(255, 255, 255, 0.8)'
    },
    
    text: {
      primary: '#1e293b',
      secondary: '#475569',
      tertiary: '#64748b',
      light: '#f8fafc',
      muted: '#94a3b8',
      inverted: '#ffffff'
    },
    
    border: '#e2e8f0',
    shadow: 'rgba(0, 0, 0, 0.1)',
    hover: 'rgba(0, 0, 0, 0.05)'
  },
  
  typography: {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    h4: '1.25rem',
    body: '1rem',
    small: '0.875rem'
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    circle: '50%'
  },
  
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12)',
    md: '0 4px 6px -1px rgba(0,0,0,0.1)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.1)',
    xl: '0 20px 25px -5px rgba(0,0,0,0.1)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)'
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out'
  }
};

export const darkTheme = {
  name: 'dark',
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#f59e0b',
    success: '#10b981',
    danger: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
    
    background: {
      primary: '#0f172a',
      secondary: '#1e293b',
      tertiary: '#334155',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      card: '#1e293b',
      overlay: 'rgba(15, 23, 42, 0.8)'
    },
    
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
      tertiary: '#94a3b8',
      light: '#f8fafc',
      muted: '#64748b',
      inverted: '#0f172a'
    },
    
    border: '#334155',
    shadow: 'rgba(0, 0, 0, 0.3)',
    hover: 'rgba(255, 255, 255, 0.1)'
  },
  
  typography: {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    h4: '1.25rem',
    body: '1rem',
    small: '0.875rem'
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    circle: '50%'
  },
  
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.3)',
    md: '0 4px 6px -1px rgba(0,0,0,0.4)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.5)',
    xl: '0 20px 25px -5px rgba(0,0,0,0.6)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.2)'
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out'
  }
};

// Default export for backward compatibility
export const theme = lightTheme;

// Theme type
export type Theme = typeof lightTheme;