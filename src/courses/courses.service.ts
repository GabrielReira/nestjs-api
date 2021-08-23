import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet.",
      tags: ["nestjs", "nodejs", "typescript"]
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find(
      (course: Course) => course.id === Number(id)
    );

    if (!course) {
      throw new HttpException(
        `Course with id ${id} not found`,
        HttpStatus.NOT_FOUND
      );
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);

    return createCourseDto;
  }

  update(id: string, updateCourseDto: any) {
    const courseIndex = this.courses.findIndex(
      (course: Course) => course.id === Number(id)
    );

    if (courseIndex >= 0) {
      this.courses[courseIndex] = updateCourseDto;
    }
    else {
      throw new HttpException(
        `Course with id ${id} not found`,
        HttpStatus.NOT_FOUND
      );
    }
  }

  remove(id: string) {
    const courseIndex = this.courses.findIndex(
      (course: Course) => course.id === Number(id)
    );
    console.log(courseIndex)

    if (courseIndex >= 0) {
      this.courses.splice(courseIndex, 1)
    }
    else {
      throw new HttpException(
        `Course with id ${id} not found`,
        HttpStatus.NOT_FOUND
      );
    }
  }
}
