import React from 'react';
import Text from './Text';

export { Text };

// Sort and display the different slice options
export const PostSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch(slice.type) {
        case 'text':
        case 'paragraph':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <Text slice={slice} />
            </div>
          );
        default:
          console.log('Not Paragraph');
          return;
      }
    })();

    return res;
  })
};