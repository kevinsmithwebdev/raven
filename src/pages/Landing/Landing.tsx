import React from 'react';
import PostsList from '../../components/PostsList/PostsList';
import {View} from 'react-native';
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
  } = usePostsFilter();

  return (
    <>
      <View testID="landing-page">
        <PostsList />
      </View>

      <PostsFilterModal
        isVisible={isFilterModalVisible}
        closeModal={closeFilterModal}
        setSelectedFilterUserId={setSelectedFilterUserId}
        selectedFilterUserId={selectedFilterUserId}
      />
    </>
  );
};

export default Landing;
