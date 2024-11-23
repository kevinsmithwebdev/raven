import {render, screen} from '@testing-library/react-native';
import React from 'react';
import SplitLineText from './SplitLineText';

const mockLabel = 'Mock Label';
const mockMultiLines = ['Mock Line Alpha', 'Mock Line Beta', 'Mock Line Gamma'];
const mockMultiLineText = mockMultiLines.join('\n');

describe('SplitLineText', () => {
  describe('rendering', () => {
    describe('with label', () => {
      beforeEach(() => {
        render(
          <SplitLineText label={mockLabel} multiLineText={mockMultiLineText} />,
        );
      });

      it('should have label', () => {
        expect(screen.getByText(mockLabel)).toBeTruthy();
        expect(screen.getByTestId('split-line-text-label')).toBeTruthy();
      });

      it.each(mockMultiLines)('should show line: "%s"', line => {
        expect(screen.getByText(line)).toBeTruthy();
      });
    });

    describe('without label', () => {
      beforeEach(() => {
        render(<SplitLineText multiLineText={mockMultiLineText} />);
      });

      it('should not have label', () => {
        expect(screen.queryByTestId('split-line-text-label')).toBeNull();
      });

      it.each(mockMultiLines)('should show line: "%s"', line => {
        expect(screen.getByText(line)).toBeTruthy();
      });
    });
  });
});
