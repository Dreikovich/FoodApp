import {Component, Input} from '@angular/core';
import {Hit} from "../../../../services/food.interface";

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent {
  @Input() hit: Hit | undefined;

}
