import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TeacherComponent} from './teacher/teacher.component';
import {StudentComponent} from './student/student.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginModule} from '../login/login.module';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

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
    TeacherComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    LoginModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
