import React from 'react';
import PostsList from '../../components/PostsList/PostsList';
import {SafeAreaView, View} from 'react-native';
import {useLoadAllPosts} from '../../services/posts/useLoadAllPosts';
import {useLoadUsers} from '../../services/users/useLoadUsers';
import {usePostsFilter} from './hooks/usePostsFilter';
import PostsFilterModal from './PostsFilterModal/PostsFilterModal';

const Landing = ({}) => {
  useLoadAllPosts();
  useLoadUsers();

  const {
    isFilterModalVisible,
    closeFilterModal,
    selectedFilterUserId,
    setSelectedFilterUserId,
    filteredPosts,
  } = usePostsFilter();

  return (
    <SafeAreaView>
      <View testID="landing-page">
        <PostsList filteredPosts={filteredPosts} />
      </View>

      <PostsFilterModal
        isVisible={isFilterModalVisible}
        closeModal={closeFilterModal}
        setSelectedFilterUserId={setSelectedFilterUserId}
        selectedFilterUserId={selectedFilterUserId}
      />
    </SafeAreaView>
  );
};

export default Landing;
