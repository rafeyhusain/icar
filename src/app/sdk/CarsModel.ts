import { Env } from './Env';

export interface ICar {
  make: string;
  year: number;
  fuel: number;
  maintenance: number;
}

export class Cars {
  async get(): Promise<ICar[]> {
    try {
      //const response = await fetch(Env.API_URL);
      const response: ICar[] = [
        { year: 2021, make: 'Citroen C3', fuel: 30, maintenance: 100 },
        { year: 2021, make: 'Honda Fit.', fuel: 10, maintenance: 500 }
      ]

      return response;
    } catch (error) {
      console.log('error', error);
    }

    return [];
  }

  filter(query: ICar): ICar[] {
    const response: ICar[] = [
      { year: 2021, make: 'Citroen C3', fuel: 30, maintenance: 100 },
      { year: 2021, make: 'Honda Fit.', fuel: 10, maintenance: 500 }
    ]

    const result: ICar[] = response.filter(car => car.year === query.year || car.make === query.make);

    return result;
  }

  static default() : ICar {
    return { year: 0, make: '', fuel: 0, maintenance:0}
  }
}
