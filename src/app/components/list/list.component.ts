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
        data => {
          this.listOfStudents = data,
          this.listOfStudents.sort(this.sortByLastName)
        },
        err => console.error(err),
        () => console.log("The GET observable has been completed.")
      );
  }

  changeStatus(student: SimpleStudent) {
    this.apiService.changeStat(student)
      .subscribe(
        data => this.readStudents(), //hack method of reloading db
        err => console.log(err),
        () => console.log("The PUT observable has been completed.")
      );
  }

  determineRowColor(status) {
    return status == 1 ? 'table-success' : 'table-danger'
  }

  sortByLastName(a, b) {
    const lastA = a.last.toLowerCase();
    const lastB = b.last.toLowerCase();
  
    let comparison = 0;
    if (lastA > lastB) {
      comparison = 1;
    } else if (lastA < lastB) {
      comparison = -1;
    }
    return comparison;
  }
}