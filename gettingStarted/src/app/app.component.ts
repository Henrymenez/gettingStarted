import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gettingStarted';
  public name = "henry from app";
  public playersName = ["chelsea","united","arsenal"];
public testObj = {
  clubName: ["chelsea","united","arsenal"],
  playersName: ["hazard","rubben","terry"],
  boss: true,
  title1: "here from obj"
}

public message = "";

}
