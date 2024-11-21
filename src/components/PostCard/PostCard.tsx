import React from 'react';
import {Post} from '../../types/jsonPlaceholder.types';
import {Text, View} from 'react-native';
import {styles} from './PostCard.styles';
import {useUsersZustand} from '../../state/users/users.zustand';

const PostCard = ({title, userId}: Post) => {
  const {getUserById} = useUsersZustand();
  const user = getUserById(userId);

  const userName = user?.name || 'N/A';

  return (
    <View style={styles.wrapper} testID="post-card">
      <Text style={styles.titleText}>{title}</Text>

      <View style={styles.userTextWrapper}>
        <Text style={styles.userText}>{'— '}</Text>
        <Text style={styles.userText}>{userName}</Text>
      </View>
    </View>
  );
};

export default PostCard;
