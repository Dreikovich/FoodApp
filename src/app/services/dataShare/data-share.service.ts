import { Injectable } from '@angular/core';
import {Hit} from "../food.interface";

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private dataSalesArray: any[] = [];

  getSalesData(): Hit[] {
    return this.dataSalesArray;
  }

  setSalesData(data: Hit[]) {
    this.dataSalesArray = data;
  }
}
