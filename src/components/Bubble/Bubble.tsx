import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';
import {styles} from './Bubble.styles';

interface Bubble {
  children: ReactNode;
  speaker: string;
  isLeftSpeakerPosition?: boolean;
  backgroundColor?: string;
}

const Bubble = ({
  children,
  speaker,
  isLeftSpeakerPosition = false,
  backgroundColor = '#fff',
}: Bubble) => (
  <View style={styles.wrapper}>
    <View style={[styles.speech, {backgroundColor}]} testID="bubble-wrapper">
      {children}
    </View>

    {isLeftSpeakerPosition ? (
      <View testID="bubble-left">
        <View
          style={[styles.leftArrow, {backgroundColor}]}
          testID="bubble-speech-swirl"
        />
        <View style={styles.leftArrowOverlap} />
        <Text style={styles.leftText}>{speaker}</Text>
      </View>
    ) : (
      <View testID="bubble-right">
        <View
          style={[styles.rightArrow, {backgroundColor}]}
          testID="bubble-speech-swirl"
        />
        <View style={styles.rightArrowOverlap} />
        <Text style={styles.rightText}>{speaker}</Text>
      </View>
    )}
  </View>
);

export default Bubble;
