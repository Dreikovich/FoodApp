import { Component } from '@angular/core';
import {Hit} from "../../../services/food.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  searchValue:string = '';
  activeCategory:string = '';
  salesFood: Hit[] = [];
  onSearchFoodEmitter(value:string) {
    this.searchValue = value;
    console.log(this.searchValue)
  }
  onChangeCategory(value:string) {
    this.activeCategory = value;
  }

  onGetRecipesOnSales(food: Hit[]){
    console.log(food)
    this.salesFood = food;
    console.log(this.salesFood)
  }
}
