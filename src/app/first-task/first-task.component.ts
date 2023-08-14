import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';


@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})


export class FirstTaskComponent {

//   textbox: any[] = []

//   tableform = new FormGroup({

//     name: new FormControl('', [Validators.required]),
//     mob: new FormControl('', [Validators.required]),
//     email: new FormControl('', [Validators.required]),
//   })

//   addinput() {
//     var fname = this.tableform.get('name')?.value;
//     var mobile = this.tableform.get('mob')?.value;
//     var email = this.tableform.get('email')?.value;

//     this.tableform.reset()
//     this.textbox.push({
//       name: fname,
//       mob:mobile,
//       Email:email
//     })
//   }

//   del(fname: number){
//     this.textbox.splice(fname,1)
// }
}
