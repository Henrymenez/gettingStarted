import { Component } from '@angular/core';

@Component({
  selector: '.app-test',
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

<div [ngSwitch]="color">
<div *ngSwitchCase="'red'">you picked red color</div>
<div *ngSwitchCase="'blue'">you picked blue color</div>
<div *ngSwitchCase="'green'">you picked green color</div>
<div *ngSwitchDefault>Pick again</div>
</div>

  `,
  styles: [],
})
export class TestComponent {
  public displayName = true;
  public color = 'her';
}
