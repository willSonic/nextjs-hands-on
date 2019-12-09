import React from 'react';
import Icon from './Icon';

const Post = () => (
  <article>
    <img
      src="http://res.cloudinary.com/christekh/image/upload/f_auto,q_auto/v1513286894/image-next-01_xsot2v.png"
      alt="Post title"
    />
    <div className="PostItem-content">
      <h5>Happy New Year</h5>
      <p>
        Free high-resolution pictures you can use on your personal and
        commercial projects. Click on an image to download the high-resolution
        version. New awesome pictures added weekly!{' '}
      </p>
    </div>
    <div className="PostItem-footer">
      <Icon
        clock
        viewBox="0 0 16 17"
        width="16px"
        height="16px"
        fill="#7D7E80"
      />
      <span>October 23, 2016</span>
    </div>
  </article>
);

export default Post;
