import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SimpleStudent } from '../../models/simplestudent.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private listOfStudents;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.readStudents();
  }

  readStudents() {
    this.apiService.getStudents()
      .subscribe(
        data => this.listOfStudents = data,
        // data => { console.log(data.allStudents) },
        err => { console.error(err) }
      );
  }
}