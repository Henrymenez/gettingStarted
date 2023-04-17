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

<h2>
  <button type="button" (click)="fireEvent()">Send Event</button>
</h2>

  `,
  styles: [],
})
export class TestComponent {
  public displayName = true;
  public color = 'her';
 @Input("parentData") public nameArr: any;
 
  public colors = ["red","blue","green","yellow"];

  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('from child to parent');
  }
}
