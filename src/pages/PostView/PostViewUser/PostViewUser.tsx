import PostSection from '../../../components/PostCard/PostSection/PostSection';
import PostLine from '../../../components/PostLine/PostLine';
import {User} from '../../../types/jsonPlaceholder.types';
import React from 'react';

interface PostViewUserProps {
  user: User | null;
}

const PostViewUser = ({user}: PostViewUserProps) => {
  if (!user) {
    return null;
  }

  return (
    <PostSection label="Poster" testID="post-view-user">
      <PostLine label="Name" value={user.name} isInline />
      <PostLine label="username" value={user.username} isInline />
      <PostLine label="email" value={user.email} isInline />
      <PostLine label="Company" value={user.company.name} isInline />
    </PostSection>
  );
};

export default PostViewUser;
