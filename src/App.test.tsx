import React from 'react';
import {render, screen} from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  beforeEach(async () => {
    render(<App />);
  });

  describe('the component', () => {
    it('should load safely', () => {
      const app = screen.getByTestId('app');
      expect(app).toBeTruthy();
    });
  });

  describe('subcomponents', () => {
    describe('messages list', () => {
      it('should load safely', () => {
        const app = screen.getByTestId('posts-list');
        expect(app).toBeTruthy();
      });
    });
  });
});
