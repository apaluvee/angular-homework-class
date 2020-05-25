import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'student',
    component: StudentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
