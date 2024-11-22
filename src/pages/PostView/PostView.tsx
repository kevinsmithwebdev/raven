import React from 'react';
import {Text, View} from 'react-native';
import {useGetPostId} from './hooks/useGetPostId';

const PostView = () => {
  const postId = useGetPostId();

  if (postId === null) {
    return null;
  }

  return (
    <View testID="post-view">
      <Text>{`Post View, post ${postId}`}</Text>
    </View>
  );
};

export default PostView;
