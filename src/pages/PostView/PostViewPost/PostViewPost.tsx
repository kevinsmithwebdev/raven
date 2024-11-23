import React from 'react';
import {Post} from '../../../types/jsonPlaceholder.types';
import PostSection from '../../../components/PostCard/PostSection/PostSection';
import PostLine from '../../../components/PostLine/PostLine';

interface PostViewPostProps {
  post: Post;
}

const PostViewPost = ({post}: PostViewPostProps) => (
  <PostSection label="Post" testID="post-view-post">
    <PostLine label="Title" value={post.title} />
    <PostLine label="Body" value={post.body} />
  </PostSection>
);

export default PostViewPost;
