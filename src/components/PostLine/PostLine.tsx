import React, {useMemo} from 'react';
import {Text} from 'react-native';
import {styles} from './PostLine.styles';
import SplitLineText from '../SplitLineText/SplitLineText';

interface PostLineProps {
  label: string;
  value: string;
  isInline?: boolean;
}

const PostLine = ({label, value, isInline = false}: PostLineProps) => {
  const linesRendered = useMemo(
    () => <SplitLineText multiLineText={value} />,
    [value],
  );

  return (
    <>
      {isInline ? (
        <Text style={styles.labelText} testID="post-line">
          {`${label}: `} {linesRendered}
        </Text>
      ) : (
        <>
          <Text style={styles.labelText} testID="post-line">
            {label}
          </Text>
          {linesRendered}
        </>
      )}
    </>
  );
};

export default PostLine;
