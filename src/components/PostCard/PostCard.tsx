import React, {useCallback} from 'react';
import {Post} from '../../types/jsonPlaceholder.types';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './PostCard.styles';
import {useUsersZustand} from '../../state/users/users.zustand';
import {useNavigation} from '@react-navigation/native';
import {usePostsZustand} from '../../state/posts/posts.zustand';

const PostCard = ({title, userId, id}: Post) => {
  const navigation = useNavigation();
  const {getUserById} = useUsersZustand();
  const user = getUserById(userId);
  const {posts} = usePostsZustand();

  const userName = user?.name || 'N/A';

  const handlePress = useCallback(() => {
    const postTitle = posts?.find(post => post.id === id)?.title ?? '';

    navigation.navigate('PostView', {postId: id, postTitle});
  }, [id, navigation, posts]);

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
