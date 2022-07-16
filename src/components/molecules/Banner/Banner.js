import React from 'react';
import { CourseCard } from '../../atoms/CourseCard';
import { Button } from '../../atoms/Button';

export const Banner = () => {
  return (
    <div className="px-4 py-4 w-full flex flex-row items-start justify-between mt-12 border-solid border-zinc-600 border-[1px]">
      <div>
        <h1 className="text-xl">New course</h1>
        <div className="mt-5">
          <Button text={'See the course'} />
        </div>
      </div>
      <CourseCard />
    </div>
  );
};
