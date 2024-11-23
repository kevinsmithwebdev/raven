import React from 'react';
import PostsList from '../../components/PostsList/PostsList';
import {View} from 'react-native';
import {useLoadAllPosts} from '../../services/posts/useLoadAllPosts';
import {useLoadUsers} from '../../services/users/useLoadUsers';
import {usePostsFilter} from './hooks/usePostsFilter';

const Landing = ({}) => {
  useLoadAllPosts();
  useLoadUsers();

  usePostsFilter();

  return (
    <View testID="landing-page">
      <PostsList />
    </View>
  );
};

export default Landing;
