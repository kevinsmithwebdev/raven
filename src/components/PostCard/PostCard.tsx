import React, {useCallback} from 'react';
import {Post} from '../../types/jsonPlaceholder.types';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './PostCard.styles';
import {useUsersZustand} from '../../state/users/users.zustand';
import {useNavigation} from '@react-navigation/native';

const PostCard = ({title, userId, id}: Post) => {
  const navigation = useNavigation();
  const {getUserById} = useUsersZustand();
  const user = getUserById(userId);

  const userName = user?.name || 'N/A';

  const handlePress = useCallback(() => {
    navigation.navigate('PostView', {postId: id});
  }, [id, navigation]);

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel="post card"
      style={styles.container}
      testID="post-card"
      onPress={handlePress}>
      <View style={styles.wrapper}>
        <Text style={styles.titleText}>{title}</Text>

        <View style={styles.userTextWrapper}>
          <Text style={styles.userText}>{'— '}</Text>
          <Text style={styles.userText}>{userName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;
