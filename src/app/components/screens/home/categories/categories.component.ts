import {Component, EventEmitter, Output} from '@angular/core';
import { ICategory } from './categories.interface';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})



export class CategoriesComponent {

  categoryItems: ICategory[] = [
    {
      icon: "local_pizza",
      title: "Pizza",
    },
    {
      icon: "lunch_dining",
      title: "Burger",
    },
    {
      icon: "local_bar",
      title: "Drink",
    }
  ]
  @Output() activeCategoryChange = new EventEmitter<string>(); // Note the naming convention for two-way binding

  activeCategory: any = null;

  isActive(categoryTitle: string) {
     return this.activeCategory === categoryTitle;
  }


  toggleActive(categoryTitle: string) {
    this.activeCategory = this.activeCategory === categoryTitle ? null : categoryTitle;
    this.activeCategoryChange.emit(this.activeCategory);
  }
}
