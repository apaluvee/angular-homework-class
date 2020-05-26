import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private STUDENT_API_URL = 'http://5d7e077fd756030014184069.mockapi.io/student';

  constructor(private httpClient: HttpClient) {
  }

  public getAllStudents() {
    return this.httpClient.get(this.STUDENT_API_URL);
  }

  public createStudent(student: Student) {
    this.httpClient.post<Student>(this.STUDENT_API_URL, student).subscribe();
  }
}
