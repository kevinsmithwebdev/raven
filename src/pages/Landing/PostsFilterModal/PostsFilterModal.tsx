import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {Modal, SafeAreaView} from 'react-native';
import {useUsersZustand} from '../../../state/users/users.zustand';
import {styles} from './PostsFilterModal.styles';
import PostsFilterModalBody from './PostsFilterModalBody/PostsFilterModalBody';
import PostsFilterModalHeader from './PostsFilterModalHeader/PostsFilterModalHeader';
import PostsFilterModalFooter from './PostsFilterModalFooter/PostsFilterModalFooter';

interface PostsFilterModal {
  isVisible: boolean;
  closeModal: () => void;
  setSelectedFilterUserId: Dispatch<SetStateAction<number | null>>;
  selectedFilterUserId: number | null;
}

const PostsFilterModal = ({
  isVisible,
  closeModal,
  setSelectedFilterUserId,
  selectedFilterUserId,
}: PostsFilterModal) => {
  const {users} = useUsersZustand();
  const [localUserId, setLocalUserId] = useState<number | null>(null);

  useEffect(() => {
    if (isVisible) {
      setLocalUserId(selectedFilterUserId);
    }
  }, [isVisible, selectedFilterUserId]);

  const handleClose = useCallback(() => {
    setLocalUserId(null);
    closeModal();
  }, [closeModal]);

  const clearLocalUserId = useCallback(() => setLocalUserId(null), []);

  const applyUserId = useCallback(() => {
    setSelectedFilterUserId(localUserId);
    handleClose();
  }, [handleClose, localUserId, setSelectedFilterUserId]);

  if (!users) {
    return null;
  }

  return (
    <Modal visible={isVisible} testID="posts-filter-modal">
      <SafeAreaView style={styles.wrapper}>
        <PostsFilterModalHeader handleClose={handleClose} />

        <PostsFilterModalBody
          users={users}
          setLocalUserId={setLocalUserId}
          localUserId={localUserId}
        />

        <PostsFilterModalFooter
          clearLocalUserId={clearLocalUserId}
          applyUserId={applyUserId}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default PostsFilterModal;
