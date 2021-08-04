import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  cvForm:FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.cvForm = new FormGroup({
      'fullName':new FormControl(null,[Validators.required,Validators.minLength(2)]),
        'email':new FormControl(null,[Validators.required,Validators.email]),
          'companyName':new FormControl(null,Validators.required),
            'position':new FormControl(null,Validators.required),
              'experience':new FormControl(null,Validators.required),
                'education':new FormGroup({
                    "uni":new FormControl(null,Validators.required),
                      "school":new FormControl(null,Validators.required)
                })
    })
  }

  onFormSubmit(){
    // var name:any = this.cvForm.get('fullName')!.value;
    // var email = this.cvForm.get('email')!.value;
    // console.log(name,email);
    console.log(this.cvForm.value)
  }

  setDefaultValues(){
    this.cvForm.get('fullName')?.setValue('giorgi');
    this.cvForm.get('email')?.setValue('okruadze@gmail.com');
  }
}
