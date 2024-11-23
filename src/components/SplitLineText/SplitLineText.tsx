import React, {useMemo} from 'react';
import {splitMultiLineText} from '../../utils/string/splitMultiLineText';
import {Text} from 'react-native';
import {styles} from './SplitLineText.styles';

interface SplitLineTextProps {
  multiLineText: string;
  label?: string;
}

const SplitLineText = ({multiLineText, label}: SplitLineTextProps) => {
  const linesRendered = useMemo(() => {
    const lines = splitMultiLineText(multiLineText);
    return lines.map((line, idx) => (
      <Text key={`${idx}-${line}`} style={styles.lineText}>
        {line}
      </Text>
    ));
  }, [multiLineText]);

  return (
    <>
      {!!label && (
        <Text testID="split-line-text-label" style={styles.labelText}>
          {label}
        </Text>
      )}
      {linesRendered}
    </>
  );
};

export default SplitLineText;
