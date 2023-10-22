import { Injectable } from '@angular/core';
import {Hit} from "../food.interface";

@Injectable({
  providedIn: 'root'
})
export class CacheFoodService {
  private cache: Map<string, Hit> = new Map();

  getRecipes(keyword:string):Hit | undefined{
    return this.cache.get(keyword)
  }

  setRecipes(keyword:string, recipe:Hit):void{
    this.cache.set(keyword, recipe)
  }
}
