import { Component } from '@angular/core';
import { OtherComponent } from './other'
import { AnotherComponent } from './other'
import { DatabindingComponent } from './databinding'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [OtherComponent, AnotherComponent, DatabindingComponent]
})
export class AppComponent {
  title = 'my first angular 2 app!';
}
 ;
