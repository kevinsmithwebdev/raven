import React, {ReactNode} from 'react';
import {View, Text} from 'react-native';
import {styles} from './PostSection.styles';

interface PostSectionProps {
  label: string;
  children: ReactNode;
  testID: string;
}

const PostSection = ({label, children, testID}: PostSectionProps) => {
  return (
    <View style={styles.wrapper} testID={testID}>
      <Text style={styles.sectionTitle}>{label}</Text>
      {children}
    </View>
  );
};

export default PostSection;
