import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { PrimesPage } from './components/PrimesPage';
import { BuildFactorDisplays } from './services/BuildFactorDisplays';
import { getPrimeResult } from './services/GetPrimeResult';

describe('PrimesPage', () => {
  it('renders header properly', () => {
    render(<PrimesPage />);
    const headerElement = screen.getByText('Primes Calculator');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders number input panel correctly', () => {
    render(<PrimesPage />);
    const numberPanel = screen.getByText('Number Input');
    expect(numberPanel).toBeInTheDocument();
  })
})

// BuildFactorDisplays =  ({primeStatus, factors, primeFactors, factorsDisplay, primeFactorsDisplay}
describe('BuildFactorDisplays()', () => {
  it('returns "None" for factors if number is prime', () => {
    let [primeStatus, factors, primeFactors] = ['true', [], []];
    let [factorsDisplay, primeFactorsDisplay] = BuildFactorDisplays({primeStatus, factors, primeFactors});
    expect(factorsDisplay).toBe('none');
    expect(primeFactorsDisplay).toBe('none');
  })

  it('returns the proper factors and primeFactors when passing non-prime numbers', () => {
    let [primeStatus, factors, primeFactors] = ['false', [2, 3, 6, 9], [2, 3]];
    let [factorsDisplay, primeFactorsDisplay] = BuildFactorDisplays({primeStatus, factors, primeFactors});
    expect(factorsDisplay).toBe('2 3 6 9 ');
    expect(primeFactorsDisplay).toBe('2 3 ');
  })
})

describe('GetPrimeResult()', () => {
  it('properly returns the factors if passed a composite number', () => {
    getPrimeResult('18').then((response: any) => {
      expect(response.status).toBe(200);
      expect(response.isPrime).toBe(false);
      expect(response.allFactors).toBe([2,3,6,9]);
      expect(response.primeFactors).toBe([2,3]);
    })
  })
  it('properly returns isPrime:true if passed a prime number', () => {
    getPrimeResult('19').then((response: any) => {
      expect(response.status).toBe(200);
      expect(response.isPrime).toBe(true);
      expect(response.allFactors).toBe(null);
      expect(response.primeFactors).toBe(null);
    })
  })
  it('returns an error if passing an empty string', () => {
    getPrimeResult('').then((response: any) => {
      expect(response.status).toBe(406);
      expect(response.error).toBe('No number is passed into parameter');
    })
  })
  it('returns an error if passing a 1', () => {
    getPrimeResult('1').then((response: any) => {
      expect(response.status).toBe(406);
      expect(response.error).toBe('1 is neither prime nor composite');
    })
  })
  it('returns an error if passing a 0', () => {
    getPrimeResult('0').then((response: any) => {
      expect(response.status).toBe(406);
      expect(response.error).toBe('0 is neither prime nor composite');
    })
  })
})