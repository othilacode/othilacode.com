import React from 'react';
import { Button } from '../../atoms/Button';
import { CourseCard } from '../../atoms/CourseCard';

export const LastCourses = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-xl">Last courses</h2>
      <div className="flex flex-row items-center justify-around w-full my-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <Button text="See all courses" />
    </div>
  );
};
