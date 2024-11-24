import {ActivityIndicator, FlatList, View} from 'react-native';
import React from 'react';
import PostCard from '../PostCard/PostCard';
import {styles} from './PostsList.styles';
import {Post} from '../../types/jsonPlaceholder.types';

interface PostsListProps {
  filteredPosts: Post[] | null;
}

const ListEmptyComponent = () => (
  <View style={styles.loaderWrapper} testID="loading-indicator">
    <ActivityIndicator size="large" />
  </View>
);

const PostsList = ({filteredPosts}: PostsListProps) => {
  if (!filteredPosts) {
    return null;
  }

  return (
    <View testID="posts-list">
      <FlatList
        ListEmptyComponent={ListEmptyComponent}
        data={filteredPosts}
        renderItem={({item}) => <PostCard {...item} />}
      />
    </View>
  );
};

export default PostsList;
