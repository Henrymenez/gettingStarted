import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <!-- <h2 *ngIf="displayName; else elseBlock">Here here</h2>
    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    </ng-template>


    <div *ngIf="displayName; then thenBlock; else elseBlock2"> </div>
<ng-template #thenBlock>
  <h2>second directive</h2>
</ng-template>

<ng-template #elseBlock2>
  <h2>Hidden second</h2>
</ng-template> -->

<!-- <div [ngSwitch]="color">
<div *ngSwitchCase="'red'">you picked red color</div>
<div *ngSwitchCase="'blue'">you picked blue color</div>
<div *ngSwitchCase="'green'">you picked green color</div>
<div *ngSwitchDefault>Pick again</div>
</div> -->


<!-- first as f; last as l; index as i; odd as o; even as e -->
<!-- <div *ngFor="let color of colors; index as i">
<h2>{{i}}: {{color}}</h2>

</div> -->

<!-- componet intereaction -->
<!-- <h2>
  <button type="button" (click)="fireEvent()">Send Event</button>
</h2> -->

<!-- pipes -->
<!-- <h2>{{name}}</h2>
<h2>{{name | lowercase}}</h2>
<h2>{{name | uppercase}}</h2>
<h2>{{name | titlecase }}</h2>
<h2>{{name | slice:3:7 }}</h2>
<h2>{{person | json}}</h2>
<h3>{{5.67844 | number:'1.2-3'}}</h3>
<h3>{{5.678 | number:'3.4-5'}}</h3>
<h3>{{5.678 | number:'3.1-2'}}</h3>
<h2>{{ 0.25 | percent }}</h2>
<h2>{{ 0.25 | currency }}</h2>
<h2>{{ 0.25 | currency: 'GBP' }}</h2>
<h2>{{ 0.25 | currency: 'GBP' : 'code'}}</h2> -->

<!-- <h2>{{date}}</h2>
<h2>{{date | date: 'short'}}</h2>
<h2>{{date | date: 'shortDate'}}</h2>
<h2>{{date | date: 'shortTime'}}</h2>
<h2>{{date | date: 'longTime'}}</h2>
<h2>{{date | date: 'longDate'}}</h2>
<h2>{{date | date: 'mediumTime'}}</h2>
<h2>{{date | date: 'mediumDate'}}</h2> -->


  `,
  styles: [],
})
export class TestComponent {
  public name = "Henry is here";
  public displayName = true;
  public color = 'her';
  public person = {
    "firstname": "henry",
    "lastname": "menez"
  }
  public date = new Date();
 @Input("parentData") public nameArr: any;
 
  public colors = ["red","blue","green","yellow"];

  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('from child to parent');
  }
}
