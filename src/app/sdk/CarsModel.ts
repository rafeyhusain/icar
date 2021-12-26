import { Env } from './Env';

export interface ICar {
  year: number;
  make: string;
  fuel: number;
  maintenance: number;
}

export class Cars {
  async filter(query: any): Promise<ICar[]> {
    return this.post(`${Env.API_URL}/cars/filter`, query);
  }  
  
  async recommend(query: any): Promise<ICar[]> {
    return this.post(`${Env.API_URL}/cars/recommend`, query);
  }

  async save(car: ICar): Promise<ICar[]> {
    return this.post(`${Env.API_URL}/cars/create`, car);
  }

  async post(url: any, query: any): Promise<ICar[]> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
      });

      const result = await response.json();

      return result.data;
    } catch (error) {
      console.log('error', error);
    }

    return [];
  }

  static query(): any {
    return { year: 0, make: '', fuelPrice: 0, distance: 0 }
  }

  static default(): ICar {
    return { year: 0, make: '', fuel: 0, maintenance: 0 }
  }
}
