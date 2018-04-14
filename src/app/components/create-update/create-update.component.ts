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
    console.log(form.value);
    this.createForm.resetForm({
      defaultAttendance: ""
    });
    // event.preventDefault();
    // console.log(`Holy crap, it's ${this.firstNameInput}`);
    // this.apiService.createStudent();
  }
}
