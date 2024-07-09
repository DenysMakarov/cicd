import React from 'react';
import { useGetPostsByLimitQuery } from '../store/api/app.api';
import { IPost } from '../models/models';

const PostsPage = () => {
  const { data } = useGetPostsByLimitQuery(5, {
    refetchOnFocus: true,
    skip: false, // If true, the query will not be executed
  });

  return (
    <div>
      <h1 className="border-l-2">Posts</h1>
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
