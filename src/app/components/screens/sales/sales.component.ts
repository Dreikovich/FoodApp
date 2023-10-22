import { Component } from '@angular/core';
import { DataShareService } from 'src/app/services/dataShare/data-share.service';
import {Hit} from "../../../services/food.interface";
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  salesFood: Hit[] = [];
  constructor(private DataService: DataShareService) {
    this.salesFood = this.DataService.getSalesData();
    console.log(this.salesFood)
  }

}
