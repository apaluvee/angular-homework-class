import {Utils} from '../../commons/utils';

export class Teacher {
  teacherId: string;
  name: string;
  joinDate: Date;
  isActive: boolean;
  school: string;
  specialistFields: string[];

  constructor(name: string, joinDate: Date, isActive: boolean, school: string, specialistFields: string[]) {
    const utilInstance = new Utils();
    this.teacherId = 'T' + utilInstance.getRandomId();
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.specialistFields = specialistFields;
  }
}
