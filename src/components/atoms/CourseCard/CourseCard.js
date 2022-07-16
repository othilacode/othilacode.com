import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const CourseCard = ({ name, duration, img }) => {
  return (
    <div className="flex flex-col items-center w-96 border-gray-600 border-[1px] border-solid rounded">
      <div className="py-8">
        <StaticImage
          src={'../../images/example.png'}
          loading="eager"
          width={124}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt={`logo_${name}`}
        />
      </div>
      <div className="flex w-full px-2 py-3 flex-row justify-between border-gray-600 border-t-[1px] border-solid">
        <div>{name}</div>
        <div>{duration}</div>
      </div>
    </div>
  );
};

CourseCard.defaultProps = {
  name: 'Course name',
  duration: 'Duration',
  img: '../../images/example.png',
};
