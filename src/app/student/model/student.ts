export class Student {
  studentId: number;
  name: string;
  joinDate: Date;
  isActive: boolean;
  school: string;
  specialistFields: string[];

  constructor(id: number, name: string, joinDate: Date, isActive: boolean, school: string) {
    this.studentId = id;
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
  }
}
