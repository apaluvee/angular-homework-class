import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Teacher} from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private TEACHER_API_URL = 'http://localhost:8080/teacher';

  constructor(private httpClient: HttpClient) { }

  public getAllTeachers() {
    return this.httpClient.get(this.TEACHER_API_URL);
  }

  public createTeacher(teacher: Teacher) {
    this.httpClient.post(this.TEACHER_API_URL, teacher).subscribe();
  }
}
