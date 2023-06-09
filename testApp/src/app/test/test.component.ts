import { Component } from '@angular/core';

//inline components
@Component({
  selector: '.app-test',
  template: `<div>Welcome {{ name }}</div>
    <hr />
    <!-- <h2>{{ 2 + 2 }}</h2> -->
    <!-- class binding -->
    <!-- <h2 [class]="successClass">{{ 'Welcome ' + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2> -->
    <!-- binding more than one class -->
    <!-- <h2 [ngClass]="messageClasses">{{ greetUser() }}</h2> -->
    <!-- class binding with condition -->
    <!-- <h2 [class.text-danger]="hasError">{{ siteUrl }}</h2>
    <input [disabled]="isDisabled" [id]="myId" type="text" value="henry" /> -->
    <!-- inline style bimding -->
    <!-- <h2 [style.color]="'blue'">Style binding</h2>

    inline style binding with condition
    <h2 [style.color]="hasError ? 'red' : 'green'">
      Style binding with condition
    </h2>

    <h3 [style.color]="highlightColor">style binding 2</h3>
    <h3 [ngStyle]="titleStyle">style binding 3</h3>

    <p>{{greetings}}</p>
    <button (click)="sayHello($event)">Greet</button> 
     -->
    
     <!-- <input type="text" #myInput>
     <button (click)="logMessage(myInput)" >Log</button> -->

     <input [(ngModel)]="callName" type="text" >{{callName}}
    `,

  styles: [
    `
      .text-success {
        color: green;
      }

      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent {
  public name = 'henry';
  public callName = '';
  public siteUrl = window.location.href;
  public myId = 'testId';
  public isDisabled = false;
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = false;
  public highlightColor = 'orange';
  public greetings = '';
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  public titleStyle = {
    color: 'brown',
    fontStyle: 'italic ',
  };

  greetUser() {
    return 'Hello ' + this.name;
  }

  sayHello(event: any){
    console.log(event);
    this.greetings = "hello menez"
  }

  logMessage(value: any){
    console.log(value);
  }

}
