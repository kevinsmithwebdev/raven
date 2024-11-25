import {ActivityIndicator, View} from 'react-native';
import PostSection from '../../../components/PostCard/PostSection/PostSection';
import PostLine from '../../../components/PostLine/PostLine';
import {Comment} from '../../../types/jsonPlaceholder.types';
import React from 'react';
import SplitLineText from '../../../components/SplitLineText/SplitLineText';
import {styles} from './PostViewComments.styles';
import Bubble from '../../../components/Bubble/Bubble';
import {getColorMappedToIndex} from '../../../utils/color/getColor';

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

      {comments.map((comment, idx) => (
        <View style={styles.commentWrapper} key={comment.id}>
          <Bubble
            speaker={comment.email}
            isLeftSpeakerPosition={!!(idx % 2)}
            backgroundColor={getColorMappedToIndex(idx, true)}>
            <SplitLineText multiLineText={comment.body} label={comment.name} />
          </Bubble>
        </View>
      ))}
    </PostSection>
  );
};

export default PostViewComments;
