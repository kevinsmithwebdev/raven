import React from 'react';
import {render, screen} from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should load safely', () => {
    expect(screen.getByTestId('app')).toBeTruthy();
  });
});
