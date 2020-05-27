import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private SCHOOL_API_URL = 'http://localhost:8080/school';

  constructor(private httpClient: HttpClient) { }

  public getAllSchools() {
    return this.httpClient.get(this.SCHOOL_API_URL);
  }
}
