import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sample from '../components/Sample';
import sample from '../modules/sample';
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = () => {
  const post = useSelector(({ sample }) => sample.post);
  const users = useSelector(({ sample }) => sample.users);
  const loadingPost = useSelector(({ loading }) => loading['sample/GET_POST']);
  const loadingUsers = useSelector(
    ({ loading }) => loading['sample/GET_USERS']
  );

  const dispatch = useDispatch();
  const getPost1 = useCallback((id) => getPost(id, dispatch), [dispatch]);
  const getUsers1 = useCallback((id) => getUsers(id, dispatch), [dispatch]);

  useEffect(() => {
    console.log('start');
    getPost1(1);
    getUsers1(1);
    console.log('end');
  }, [getPost1, getUsers1]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default SampleContainer;
