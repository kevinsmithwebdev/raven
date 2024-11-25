import {render, screen} from '@testing-library/react-native';
import React, {CSSProperties} from 'react';
import Bubble from './Bubble';
import {View, Text} from 'react-native';

const MockBubbleChildren = () => (
  <View testID="mock-bubble-child">
    <Text>Mock Bubble Text</Text>
  </View>
);

describe('Bubble', () => {
  describe('rendering', () => {
    const speaker = 'Nelson Mandela';

    describe('full data, left', () => {
      const backgroundColor = '#123456';
      const isLeftSpeakerPosition = true;

      beforeEach(() => {
        render(
          <Bubble
            speaker={speaker}
            isLeftSpeakerPosition={isLeftSpeakerPosition}
            backgroundColor={backgroundColor}>
            <MockBubbleChildren />
          </Bubble>,
        );
      });

      it('should show speaker', () => {
        expect(screen.getByText(speaker)).toBeTruthy();
      });

      it('should render children', () => {
        expect(screen.getByTestId('mock-bubble-child')).toBeTruthy();
        expect(screen.getByText('Mock Bubble Text')).toBeTruthy();
      });

      it('should render left speech swirl', () => {
        expect(screen.getByTestId('bubble-left')).toBeTruthy();
      });

      it('should not render right speech swirl', () => {
        expect(screen.queryByTestId('bubble-right')).toBeNull();
      });

      it('should have bubble with passed background color', () => {
        const lastStyleWithProp = screen
          .getByTestId('bubble-wrapper')
          .props.style.findLast((s: CSSProperties) =>
            s.hasOwnProperty('backgroundColor'),
          );

        expect(lastStyleWithProp.backgroundColor).toBe(backgroundColor);
      });

      it('should have speech swirl with passed background color', () => {
        const lastStyleWithProp = screen
          .getByTestId('bubble-speech-swirl')
          .props.style.findLast((s: CSSProperties) =>
            s.hasOwnProperty('backgroundColor'),
          );

        expect(lastStyleWithProp.backgroundColor).toBe(backgroundColor);
      });
    });

    describe('full data, right', () => {
      const backgroundColor = '#654321';
      const isLeftSpeakerPosition = false;

      beforeEach(() => {
        render(
          <Bubble
            speaker={speaker}
            isLeftSpeakerPosition={isLeftSpeakerPosition}
            backgroundColor={backgroundColor}>
            <MockBubbleChildren />
          </Bubble>,
        );
      });

      it('should show speaker', () => {
        expect(screen.getByText(speaker)).toBeTruthy();
      });

      it('should render children', () => {
        expect(screen.getByTestId('mock-bubble-child')).toBeTruthy();
        expect(screen.getByText('Mock Bubble Text')).toBeTruthy();
      });

      it('should render right speech swirl', () => {
        expect(screen.getByTestId('bubble-right')).toBeTruthy();
      });

      it('should not render left speech swirl', () => {
        expect(screen.queryByTestId('bubble-left')).toBeNull();
      });

      it('should have bubble with passed background color', () => {
        const lastStyleWithProp = screen
          .getByTestId('bubble-wrapper')
          .props.style.findLast((s: CSSProperties) =>
            s.hasOwnProperty('backgroundColor'),
          );

        expect(lastStyleWithProp.backgroundColor).toBe(backgroundColor);
      });

      it('should have speech swirl with passed background color', () => {
        const lastStyleWithProp = screen
          .getByTestId('bubble-speech-swirl')
          .props.style.findLast((s: CSSProperties) =>
            s.hasOwnProperty('backgroundColor'),
          );

        expect(lastStyleWithProp.backgroundColor).toBe(backgroundColor);
      });
    });

    describe('defaulting data', () => {
      const backgroundColor = undefined;
      const isLeftSpeakerPosition = undefined;

      beforeEach(() => {
        render(
          <Bubble
            speaker={speaker}
            isLeftSpeakerPosition={isLeftSpeakerPosition}
            backgroundColor={backgroundColor}>
            <MockBubbleChildren />
          </Bubble>,
        );
      });

      it('should show speaker', () => {
        expect(screen.getByText(speaker)).toBeTruthy();
      });

      it('should render children', () => {
        expect(screen.getByTestId('mock-bubble-child')).toBeTruthy();
        expect(screen.getByText('Mock Bubble Text')).toBeTruthy();
      });

      it('should render right speech swirl', () => {
        expect(screen.getByTestId('bubble-right')).toBeTruthy();
      });

      it('should not render left speech swirl', () => {
        expect(screen.queryByTestId('bubble-left')).toBeNull();
      });

      it('should have bubble with passed background color', () => {
        const lastStyleWithProp = screen
          .getByTestId('bubble-wrapper')
          .props.style.findLast((s: CSSProperties) =>
            s.hasOwnProperty('backgroundColor'),
          );

        expect(lastStyleWithProp.backgroundColor).toBe('#fff');
      });

      it('should have speech swirl with passed background color', () => {
        const lastStyleWithProp = screen
          .getByTestId('bubble-speech-swirl')
          .props.style.findLast((s: CSSProperties) =>
            s.hasOwnProperty('backgroundColor'),
          );

        expect(lastStyleWithProp.backgroundColor).toBe('#fff');
      });
    });
  });
});
