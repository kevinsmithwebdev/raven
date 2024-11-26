import React, {Dispatch, SetStateAction, useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './FilterLine.styles';
import {User} from '../../../../../types/jsonPlaceholder.types';

interface FilterLineProps extends User {
  setLocalUserId: Dispatch<SetStateAction<number | null>>;
  isSelected: boolean;
}

const FilterLine = ({
  name,
  id,
  setLocalUserId,
  isSelected,
}: FilterLineProps) => {
  const handleLinePress = useCallback(() => {
    setLocalUserId(isSelected ? null : id);
  }, [id, isSelected, setLocalUserId]);

  return (
    <TouchableOpacity
      onPress={handleLinePress}
      style={[styles.filterLine, isSelected && styles.filterLineSelected]}
      aria-selected={isSelected}
      testID="filter-line">
      <Text
        style={[
          styles.filterLineText,
          isSelected && styles.filterLineTextSelected,
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterLine;
