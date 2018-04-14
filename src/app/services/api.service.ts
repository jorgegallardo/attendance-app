import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SimpleStudent } from '../models/simplestudent.model';

const API_URL: string = 'http://localhost:3000';
const HEADER_OPTIONS = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  getStudents() {
    return this.httpClient.get(API_URL + '/load', HEADER_OPTIONS);
  }

  createStudent(studentDetailsFromForm) {
    let studentToCreate = {
      first: studentDetailsFromForm.firstName,
      last: studentDetailsFromForm.lastName,
      status: studentDetailsFromForm.defaultAttendance
    }

    return this.httpClient.post(API_URL + '/insert', studentToCreate, HEADER_OPTIONS)
      .subscribe(
        data => {
          console.log(data)
        },
        err => console.error(err),
        () => console.log('Added student to database.')
      );
  }

  changeStat(student: SimpleStudent) {
    let studentStatusSwitch = {
      _id: student._id,
      first: student.first,
      last: student.last,
      status: !student.status
    };
    // alert(JSON.stringify(studentStatusSwitch));
    return this.httpClient.put(API_URL + '/update', studentStatusSwitch, HEADER_OPTIONS);
  }
}