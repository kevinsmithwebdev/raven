import React from 'react';
import PostsList from '../../components/PostsList/PostsList';
import {View} from 'react-native';
import {useLoadAllPosts} from '../../services/posts/useLoadAllPosts';
import {useLoadUsers} from '../../services/users/useLoadUsers';

const Landing = () => {
  useLoadAllPosts();
  useLoadUsers();

  return (
    <View testID="landing-page">
      <PostsList />
    </View>
  );
};

export default Landing;
