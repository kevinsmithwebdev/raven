import React, {useCallback} from 'react';
import {Post} from '../../types/jsonPlaceholder.types';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './PostCard.styles';
import {useUsersZustand} from '../../state/users/users.zustand';
import {useNavigation} from '@react-navigation/native';
import {usePostsZustand} from '../../state/posts/posts.zustand';
import Avatar from '../Avatar/Avatar';
import {getColorMappedToIndex} from '../../utils/color/getColor';

const PostCard = ({title, userId, body, id}: Post) => {
  const navigation = useNavigation();
  const {getUserById} = useUsersZustand();
  const user = getUserById(userId);
  const {posts} = usePostsZustand();

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
        <View style={styles.textWrapper}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.bodyText} numberOfLines={1}>
            {body}
          </Text>
        </View>

        <Avatar
          name={user?.name}
          backgroundColor={getColorMappedToIndex(user?.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;
