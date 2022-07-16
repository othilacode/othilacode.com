import React from 'react';
import { CourseCard } from '../../atoms/CourseCard/CourseCard';

export const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="py-4">
        <CourseCard />
      </div>
    </div>
  );
};
