import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testApp';
  topics = ['Angular', 'Vue', 'React'];

  topicHasError = true;
  submitted = false;
  errorMessage = '';

  userModel = new User(
    '',
    'Rob@domain.com',
    98899899388,
    'default',
    'morning',
    true
  );
  
  constructor(private enrollmentService: EnrollmentService) {}

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  };

  onSubmit(userForm: any) {
    console.log(userForm);
    // this.submitted = true;
    // this.enrollmentService.enroll(this.userModel)
    // .subscribe(
    //   data => console.log("Success!",data),
    //   error => this.errorMessage = error.statusText
    // )
  };
}
