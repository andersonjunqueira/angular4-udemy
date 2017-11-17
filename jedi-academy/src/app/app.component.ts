import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  students = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant'},
    {name: 'Leia', isJedi: false},
    {name: 'Han Solo', isJedi: false}
  ]

}
