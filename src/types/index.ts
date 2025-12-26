export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface SelectedService extends Service {
  quantity: number;
}