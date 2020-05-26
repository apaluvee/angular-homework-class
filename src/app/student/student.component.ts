import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {Student} from './model/student';
import {Utils} from '../commons/utils';
import {StudentService} from './data/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = [];
  @ViewChild('closeNewStudentModal', {static: false}) closeNewStudentModal: ElementRef;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getAllStudents().subscribe((data: any[]) => {
      this.students = data;
    });
  }

  onSubmit(f) {
    const utilsInstance = new Utils();
    const joinDateString = f.value.joindate.month.toString() + '-' + f.value.joindate.day.toString() + '-' +
      f.value.joindate.year.toString();

    this.studentService.createStudent(new Student(f.value.name, new Date(joinDateString), f.value.isactive === true,
      utilsInstance.getSchoolName(f.value.school), Number(f.value.grade)));

    this.closeNewStudentModal.nativeElement.click();
    setTimeout('location.reload();', 2000);
  }

}
