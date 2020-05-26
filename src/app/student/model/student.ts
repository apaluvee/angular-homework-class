import {Utils} from '../../commons/utils';

export class Student {
  studentId: string;
  name: string;
  joinDate: Date;
  isActive: boolean;
  school: string;
  grade: number;

  constructor(name, joinDate, isActive, school, grade) {
    const utilsInstance = new Utils();
    this.studentId = 'S' + utilsInstance.getRandomId();
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.grade = grade;
  }

}
