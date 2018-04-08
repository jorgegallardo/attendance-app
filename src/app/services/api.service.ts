import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SimpleStudent } from '../models/simplestudent.model';

@Injectable()
export class ApiService {
  private apiUrl: string = 'http://localhost:3000';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private httpOptions = {
    headers: this.headers
  };

  constructor(private httpClient: HttpClient) {
  }

  getStudents() {
    return this.httpClient.get(this.apiUrl + '/load', this.httpOptions);
  }

  changeStat(student: SimpleStudent) {
    var studentStatusSwitch = {
      _id: student._id,
      first: student.first,
      last: student.last,
      status: !student.status
    };
    // alert(JSON.stringify(studentStatusSwitch));
    return this.httpClient.put(this.apiUrl + '/update', studentStatusSwitch, this.httpOptions);
  }
}