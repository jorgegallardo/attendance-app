import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  selectedStudent: Student;
  roster: Student[];

  constructor(private rosterService: RosterService) { }

  ngOnInit() {
    this.roster = this.rosterService.roster;
    this.roster.push({id: 5, name: 'Jimminy Cricket', status: 'present'});
  }

  selectStudent(student) {
    this.selectedStudent = student;
  }
}