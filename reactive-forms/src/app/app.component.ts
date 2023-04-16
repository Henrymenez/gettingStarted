import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive-forms';

  get userName(){
    return this.registrationForm.get('userName');
  }
  
  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }


  addAlternateEmails(){
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService ) {}


  // registrationForm = new FormGroup({
  //   userName: new FormControl('Menez'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  //});

  //patchValue = set for some
  //setValue = set for all
  
  registrationForm: any = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3),forbiddenNameValidator(/password/)]],
    email: [''],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    }),
    alternateEmails: this.fb.array([])
  }, { validator: PasswordValidator});
  
  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Henry',
      password: 'password',
      confirmPassword: 'password',
      
    });
  };

  onSubmit(){
    this._registrationService.register(this.registrationForm.value)
    .subscribe(
      response => console.log('Registered Successfully',response),
      error => console.log('Error!', error)
    )
  }

}
