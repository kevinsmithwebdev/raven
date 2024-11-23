import {ActivityIndicator, Text, View} from 'react-native';
import PostSection from '../../../components/PostCard/PostSection/PostSection';
import PostLine from '../../../components/PostLine/PostLine';
import {Comment} from '../../../types/jsonPlaceholder.types';
import React from 'react';
import SplitLineText from '../../../components/SplitLineText/SplitLineText';
import {styles} from './PostViewComments.styles';

interface PostViewCommentsProps {
  comments: Comment[] | null;
}

const PostViewComments = ({comments}: PostViewCommentsProps) => {
  if (!comments) {
    return (
      <ActivityIndicator
        testID="post-view-comments-loader"
        size="large"
        style={styles.spinner}
      />
    );
  }

  if (comments.length === 0) {
    return null;
  }

  return (
    <PostSection label="Comments" testID="post-view-comments">
      <PostLine
        label="Number of Comments"
        value={String(comments.length)}
        isInline
      />

      {comments.map(comment => (
        <View style={styles.commentWrapper} key={comment.id}>
          <Text style={styles.commentText}>{`${comment.email} says...`}</Text>
          <SplitLineText multiLineText={comment.body} label={comment.name} />
        </View>
      ))}
    </PostSection>
  );
};

export default PostViewComments;
