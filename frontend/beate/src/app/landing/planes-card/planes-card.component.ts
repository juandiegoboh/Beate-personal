import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planes-card',
  templateUrl: './planes-card.component.html',
  styleUrls: ['./planes-card.component.scss']
})
export class PlanesCardComponent {

  @Input('name') name: string = "";
  @Input('price') price: number = 0;
  @Input('features') features: string[] = [];

}
