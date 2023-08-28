import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';
import { interval } from 'rxjs';
import { NewService } from '../services/new.service';


export interface Emp {
  Firstname: string;
  lastname: string;
  email: string;
  mobile: number;
  education: any;
  gender: string
}

const EmployeeData: Emp[] = [];


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})


export class LeftComponent {

  constructor(private _empservice: EmployeeService, private dialog: MatDialogRef<LeftComponent>, private service: NewService) {

  }

  empform = new FormGroup({

    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobilenumber: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    education: new FormControl('', Validators.required),
  })

  education: string[] = [
    '10th',
    '12th',
    'Graduate',
    'Post Graduate',
  ]

  postdata() {
    // this.service.postdata(this.empform.value).subscribe(res => {
    //   console.log(res);
    // })
    if (this.empform.valid) {
      this._empservice.addemployee(this.empform.value).subscribe({
        next: (val: any) => {
          console.log(val)
          alert("Employee added succesfully")
        },
      })
    }
    this.empform.reset()
  }
  close() {
    this.dialog.close()
  }


} 