import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiRecipeResponse,} from "./food.interface";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseUrl = 'https://api.edamam.com/api/recipes/v2';
  private apiKey = '%20c1752caabfac682ce9630ae784a93090'
  private apiId = '62aff6fa'
  constructor(private http:HttpClient ) { }
    /*ApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=62aff6fa&app_key=%20c1752caabfac682ce9630ae784a93090'*/

    fetchRecipesByKeyword(keyword:string):Observable<ApiRecipeResponse>{
      const url = `${this.baseUrl}?type=public&q=${keyword}&app_id=${this.apiId}&app_key=${this.apiKey}`
      return this.http.get<ApiRecipeResponse>(url);
    }
}
