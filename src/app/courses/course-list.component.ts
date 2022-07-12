import { CourseService } from './course.service';
import { Course } from './course';
import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-course-list', não é mais necessário utilizar o select porque esta sendo usado Rota  diretamente no AppModule
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];

  _courses: Course[] = [];
  
  _filterBy!: string;

  constructor(private courseService: CourseService) {}  //instanciando o serviço CourseService através do Constructor e passando como um parametro

  ngOnInit(): void {
    return this.retrieveAll()
  }

  retrieveAll(): void{
    this.courseService.retrieveAll().subscribe({
      next: courses => {                              //NEXT: método do subscribe em que a requisição deu certo e retorna algo para fazer
        this._courses = courses
        this.filteredCourses = this._courses;   
      },
      error: err => console.log(`Error ${err}`)                                         
    }); 
  }

  set filter(value: string){
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    //console.log('filterBy: ' + this._filterBy);
    return this._filterBy
  }

}
