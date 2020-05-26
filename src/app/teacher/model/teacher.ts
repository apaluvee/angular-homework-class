import {Utils} from '../../commons/utils';

export class Teacher {
  teacherId: string;
  name: string;
  joinDate: Date;
  isActive: boolean;
  school: string;
  specialistFields: string[];

  constructor(name, joinDate, isActive, school, specialistFields) {
    const utilsInstance = new Utils();
    this.teacherId = 'T' + utilsInstance.getRandomId();
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.specialistFields = specialistFields;
  }

}
