/* eslint-disable */

import React from 'react';
import { useGetPostsByLimitQuery } from '../store/api/app.api';
import { IPost } from '../models/models';
import UseFetch from '../hooks/useFetch';

const API = 'https://jsonplaceholder.typicode.com/posts';

const PostsPage = () => {
  const { data } = useGetPostsByLimitQuery(5, {
    refetchOnFocus: true,
    skip: false, // If true, the query will not be executed
  });

  const { posts, loading, error } = UseFetch({ uri: API });

  return (
    <div>
      {data &&
        data.map((post: IPost) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
          </div>
        ))}
    </div>
  );
};

export default PostsPage;
