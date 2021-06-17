import { Component } from '@angular/core';
import { COURSESDATA} from '../data/mock-coursedata'
import { Courses} from '../data/courseData'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hourlyLearn';
  courseData = COURSESDATA;
  
}
