import React from 'react';
import { Service } from '../types';
import ServiceCard from './ServiceCard';

interface ServicesListProps {
  services: Service[];
  selectedServices: Service[];
  onAddService: (service: Service) => void;
}

const ServicesList: React.FC<ServicesListProps> = ({ services, selectedServices, onAddService }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Available Services</h2>
      <div style={styles.grid}>
        {services.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
            onAdd={onAddService}
            isAdded={selectedServices.some(s => s.id === service.id)}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '30px'
  },
  title: {
    margin: '0 0 20px 0',
    color: '#333'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px'
  }
};

export default ServicesList;