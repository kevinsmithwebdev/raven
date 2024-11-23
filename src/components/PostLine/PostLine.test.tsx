import {render, screen} from '@testing-library/react-native';
import React from 'react';
import PostLine from './PostLine';

const mockLabel = 'Mock Label';
const mockValueLines = ['Line Alpha', 'Line Beta', 'Line Gamma'];
const mockValue = mockValueLines.join('\n');

describe('PostLine', () => {
  describe('rendering', () => {
    describe('when isInline', () => {
      const isInline = true;

      beforeEach(() => {
        render(
          <PostLine label={mockLabel} value={mockValue} isInline={isInline} />,
        );
      });

      it('should render label with colon separator', () => {
        expect(screen.getByText('Mock Label:', {exact: false})).toBeTruthy();
      });

      it.each(mockValueLines)('should render line: %p', line => {
        expect(screen.getByText(line)).toBeTruthy();
      });
    });

    describe('when !isInline', () => {
      const isInline = false;

      beforeEach(() => {
        render(
          <PostLine label={mockLabel} value={mockValue} isInline={isInline} />,
        );
      });

      it('should render label', () => {
        expect(screen.getByText('Mock Label')).toBeTruthy();
      });

      it('should not render label with colon separator', () => {
        expect(screen.queryByText('Mock Label:', {exact: false})).toBeNull();
      });

      it.each(mockValueLines)('should render line: %p', line => {
        expect(screen.getByText(line)).toBeTruthy();
      });
    });

    describe('when is undefined', () => {
      const isInline = undefined;

      beforeEach(() => {
        render(
          <PostLine label={mockLabel} value={mockValue} isInline={isInline} />,
        );
      });

      it('should render label', () => {
        expect(screen.getByText('Mock Label')).toBeTruthy();
      });

      it('should not render label with colon separator', () => {
        expect(screen.queryByText('Mock Label:', {exact: false})).toBeNull();
      });

      it.each(mockValueLines)('should render line: %p', line => {
        expect(screen.getByText(line)).toBeTruthy();
      });
    });
  });
});
