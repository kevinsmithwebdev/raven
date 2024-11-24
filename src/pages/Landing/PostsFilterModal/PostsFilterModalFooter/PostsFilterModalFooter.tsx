import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './PostsFilterModalFooter.styles';

interface PostsFilterModalFooterProps {
  clearLocalUserId: () => void;
  applyUserId: () => void;
}

const PostsFilterModalFooter = ({
  clearLocalUserId,
  applyUserId,
}: PostsFilterModalFooterProps) => {
  return (
    <View style={styles.wrapper} testID="posts-filter-modal-footer">
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="clear"
        onPress={clearLocalUserId}
        style={[styles.footerButton, styles.footerButtonClear]}>
        <Text style={styles.footerButtonText}>Clear</Text>
      </TouchableOpacity>

      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="apply"
        onPress={applyUserId}
        style={[styles.footerButton, styles.footerButtonApply]}>
        <Text style={styles.footerButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostsFilterModalFooter;
