import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Avatar.styles';
import {getInitialsFromName} from '../../utils/string/getInitialsFromName';

interface AvatarProps {
  name: string | undefined;
  backgroundColor: string;
}

const Avatar = ({name, backgroundColor}: AvatarProps) => (
  <View style={[styles.wrapper, {backgroundColor}]} testID="avatar">
    <Text style={styles.initials}>{getInitialsFromName(name)}</Text>
  </View>
);

export default Avatar;
