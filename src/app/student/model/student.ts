import {Utils} from '../../commons/utils';

export class Student {
  studentId: string;
  name: string;
  joinDate: Date;
  isActive: boolean;
  school: string;
  specialistFields: string[];

  constructor(name: string, joinDate: Date, isActive: boolean, school: string, specialistFields: string[]) {
    const utilInstance = new Utils();
    this.studentId = 'T' + utilInstance.getRandomId();
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.specialistFields = specialistFields;
  }
}
