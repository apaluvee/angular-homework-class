export class Teacher {
  teacherId: number;
  name: string;
  joinDate: Date;
  isActive: boolean;
  school: string;
  specialistFields: string[];

  constructor(id: number, name: string, joinDate: Date, isActive: boolean, school: string, specialistFields: string[]) {
    this.teacherId = id;
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.specialistFields = specialistFields;
  }
}
