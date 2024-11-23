import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from './PostView.styles';
import PostViewPost from './PostViewPost/PostViewPost';
import PostViewUser from './PostViewUser/PostViewUser';
import PostViewComments from './PostViewComments/PostViewComments';
import {useGetPostViewData} from './hooks/useGetPostViewData';

const PostView = () => {
  const {post, user, comments} = useGetPostViewData();

  if (!post) {
    return null;
  }

  return (
    <ScrollView testID="post-view" style={styles.wrapper}>
      <PostViewPost post={post} />

      <PostViewUser user={user} />

      <PostViewComments comments={comments} />
    </ScrollView>
  );
};

export default PostView;
