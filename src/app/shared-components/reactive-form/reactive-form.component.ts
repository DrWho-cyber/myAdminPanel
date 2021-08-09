import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  cvForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }
  
  createForm() {
    this.cvForm = this.formBuilder.group({
      roomType:[null, [Validators.required, Validators.minLength(2)]],
      facilities:[null, [Validators.required, Validators.email]],
      view:[null, Validators.required],
      sale:[null, Validators.required],
      reserveDates:[null, Validators.required],
      prise:[null, Validators.required],
      smoking:[null, Validators.required],
     animals:[null, Validators.required],
      pictures:[null, Validators.required],
      children:[null, Validators.required],

    })
  }

  onFormSubmit() {
    // var name:any = this.cvForm.get('fullName')!.value;
    // var email = this.cvForm.get('email')!.value;
    // console.log(name,email);
    console.log(this.cvForm.value)
  }

  update() {
    this.cvForm.get('roomType')?.setValue('giorgi');
    this.cvForm.get('email')?.setValue('okruadze@gmail.com');
  }


  
}


// loginForm!: FormGroup;
// emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

// constructor(
//   private formBuilder: FormBuilder
// ) { }

// ngOnInit() {
//   this.loginForm = this.formBuilder.group({
//     email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
//     password: [null, Validators.required]
//   });
// }

// submit() {
//   if (!this.loginForm.valid) {
//     return;
//   }
//   console.log(this.loginForm.value);
// }
