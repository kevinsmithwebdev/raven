import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CloseIcon from '../../../../assets/icons/CloseIcon';
import {styles} from './PostsFilterModalHeader.styles';

interface PostsFilterModalHeaderProps {
  handleClose: () => void;
}

const PostsFilterModalHeader = ({handleClose}: PostsFilterModalHeaderProps) => {
  return (
    <View style={styles.wrapper} testID="posts-filter-modal-header">
      <Text style={styles.headerText}>Filter by User</Text>
      <TouchableOpacity
        hitSlop={12}
        onPress={handleClose}
        accessibilityRole="button"
        accessibilityLabel="close"
        style={styles.headerCloseButton}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

export default PostsFilterModalHeader;
