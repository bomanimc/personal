import React from 'react';
import Text from './Text';

export { Text };

// Sort and display the different slice options
export const PostSlices = ({ slices }) => slices.map((slice, index) => {
  const res = (() => {
    switch (slice.type) {
      case 'text':
      case 'paragraph':
        return (
          <div key={index} className="homepage-slice-wrapper">
            <Text slice={slice} />
          </div>
        );
      default:
        return null;
    }
  })();

  return res;
});
