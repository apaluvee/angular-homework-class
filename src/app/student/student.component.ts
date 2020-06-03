import {Component, OnInit} from '@angular/core';
import {Student} from './model/student';
import {StudentService} from './data/student.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SchoolService} from '../school/data/school.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = [];
  schools = [];

  constructor(private studentService: StudentService, private modalService: NgbModal, private schoolService: SchoolService) {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'studentModalLabel'});
  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data: any[]) => {
      this.students = data;
    });
    this.schoolService.getAllSchools().subscribe((data: any[]) => {
      this.schools = data;
    });
  }

  onSubmit(f) {

    const joinDateString = f.value.joindate.month.toString() + '-' + f.value.joindate.day.toString() + '-' +
      f.value.joindate.year.toString();

    this.studentService.createStudent(new Student(f.value.id, f.value.name, new Date(joinDateString), true,
      f.value.school));

    this.modalService.dismissAll();
    setTimeout('location.reload();', 2000);
  }

  getSpecializedFields(fieldsArr) {
    const result = [];

    for (const field of fieldsArr) {
      switch (field) {
        case 'mathematics':
          result.push('Mathematics');
          break;
        case 'english':
          result.push('English');
          break;
      }
    }
    return result;
  }

}
