import React, {Dispatch, SetStateAction} from 'react';
import {FlatList} from 'react-native';
import FilterLine from './FilterLine/FilterLine';
import {User} from '../../../../types/jsonPlaceholder.types';

interface PostsFilterModalBodyProps {
  users: User[];
  setLocalUserId: Dispatch<SetStateAction<number | null>>;
  localUserId: number | null;
}

const PostsFilterModalBody = ({
  users,
  setLocalUserId,
  localUserId,
}: PostsFilterModalBodyProps) => {
  return (
    <FlatList
      data={users}
      testID="posts-filter-modal-body"
      renderItem={({item}) => (
        <FilterLine
          key={item.id}
          setLocalUserId={setLocalUserId}
          isSelected={item.id === localUserId}
          {...item}
        />
      )}
    />
  );
};

export default PostsFilterModalBody;
