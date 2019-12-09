
import React from 'react';

import Post from './Post';

const PostList = () => (
  <div>{[1, 2, 3, 4, 5, 6, 7].map(id => <Post key={id} />)}</div>
);

export default PostList;
