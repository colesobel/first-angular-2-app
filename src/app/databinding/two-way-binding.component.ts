import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'app-two-way-binding',
  templateUrl: 'two-way-binding.component.html',
  styleUrls: ['two-way-binding.component.css']
})

export class TwoWayBindingComponent {
  person = {
    name: 'cole',
    age: 24
  }
}
