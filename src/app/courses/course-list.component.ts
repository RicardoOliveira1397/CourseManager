import { CourseService } from './course.service';
import { Course } from './course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];

  _courses: Course[] = [];
  
  _filterBy!: string;

  constructor(private courseService: CourseService) {}  //instanciando o serviço CourseService através do Constructor e passando como um parametro

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string){
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }

}
