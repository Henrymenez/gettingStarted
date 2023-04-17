import { Component } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `
  <h2 *ngIf="displayName">Here here</h2>
  
  
  `,
  styles: []
})
export class TestComponent {

  public displayName = false;
}
