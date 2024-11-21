import {ActivityIndicator, FlatList, View} from 'react-native';
import React from 'react';
import PostCard from '../PostCard/PostCard';
import {styles} from './PostsList.styles';
import {usePostsZustand} from '../../state/posts/posts.zustand';

const ListEmptyComponent = () => (
  <View style={styles.loaderWrapper} testID="loading-indicator">
    <ActivityIndicator size="large" />
  </View>
);

const PostsList = () => {
  const {posts} = usePostsZustand();

  return (
    <View testID="posts-list">
      <FlatList
        ListEmptyComponent={ListEmptyComponent}
        data={posts}
        renderItem={({item}) => <PostCard {...item} />}
      />
    </View>
  );
};

export default PostsList;
