import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-another',
  templateUrl: 'another.component.html',
  styleUrls: ['another.component.css']
})
export class AnotherComponent {
  message = 'This is another component being generated'
  secondMessage = 'another one omg'
}
