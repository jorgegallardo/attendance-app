import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { last } from '@angular/router/src/utils/collection';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  @ViewChild('f') createForm: NgForm;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  createNewStudent(form: NgForm) {
    let newStudent: any = form.value;

    this.apiService.createStudent(newStudent)
      // .subscribe(data => { console.log(data) },
      //   err => console.error(err)
      // );

    this.createForm.resetForm({
      defaultAttendance: ''
    });
  }
}
