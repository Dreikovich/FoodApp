import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Hit} from "../../../../services/food.interface";
import {FoodService} from "../../../../services/food.service";
import {CacheFoodService} from "../../../../services/cache-food/cache-food.service";
import {firstValueFrom} from "rxjs";
import {Router} from '@angular/router';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnChanges, OnInit{
  recipeArray : Hit[] = []
  filteredFood : Hit[] = []
  @Input() searchTerm = '';
  @Input() activeCategory = '';


  constructor(private foodService: FoodService,
              private cacheFoodService: CacheFoodService,
              private router: Router) { }

  getDataSource(){
    const routeParameter = this.router.url
    return routeParameter.includes('sales') ? this.filteredFood= this.filterBySales() : this.filteredFood = this.recipeArray

  }
  setFiltersForSalesFood(category?: string, searchTerm?: string){
    if(category && searchTerm){
      this.filteredFood = this.filterByCategorySearchAndSales(category, searchTerm)
    }
    else if(category){
      this.filterByCategoryAndSales()
    }
    else if(searchTerm){
      this.filterBySearchAndSales()

    }
    else{
      this.filteredFood = [...this.filterBySales()]
    }

  }
  setFilters(category?: string, searchTerm?: string){
    if(category && searchTerm){
      this.filteredFood = this.filterByCategoryAndSearch(category, searchTerm)
    }
    else if(category){
      this.filterByCategory(category)
    }
    else if(searchTerm){
      this.filterBySearch()
    }
    else{
      this.filteredFood = [...this.recipeArray]
    }
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log(changes)
    let sales: boolean;
    sales = this.router.url.includes('sales')
    if(sales){
      this.setFiltersForSalesFood(this.activeCategory, this.searchTerm)
    }
    else{
      this.setFilters(this.activeCategory, this.searchTerm)
    }
  }

  filterByCategoryAndSales(){
    return this.filteredFood = this.recipeArray.filter((food: Hit) => {
      return food.recipe.sales && this.isFoodInCategory(food, this.activeCategory);
    });
  }

  filterBySearchAndSales(){
    return this.filteredFood = this.recipeArray.filter((food: Hit) => {
      return food.recipe.sales && this.doesFoodMatchSearchTerm(food, this.searchTerm);
    });

}

  filterByCategorySearchAndSales(category: string, searchTerm: string) {
    return this.recipeArray.filter((food: Hit) => {
      return food.recipe.sales && this.isFoodInCategory(food, category) && this.doesFoodMatchSearchTerm(food, searchTerm);
    });
  }

  isFoodInCategory(food: Hit, category: string): boolean {
    const keywordsDrink = ['cocktail', 'drink', 'tea', 'coffee', 'alcohol', 'juice'];
    return category === 'Drink'
      ? keywordsDrink.some((el) => food.recipe.label.toLowerCase().includes(el.toLowerCase()))
      : food.recipe.label.toLowerCase().includes(category.toLowerCase());
  }
  doesFoodMatchSearchTerm(food: Hit, searchTerm: string): boolean {
    return food.recipe.label.toLowerCase().includes(searchTerm.toLowerCase());
  }

  filterBySearch() {
    return this.filteredFood = this.recipeArray.filter((food: Hit) => {
      return food.recipe.label.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  filterByCategoryAndSearch(category: string, searchTerm: string){
    return this.recipeArray.filter((food: Hit) => {
      return this.isFoodInCategory(food, category) && this.doesFoodMatchSearchTerm(food, searchTerm);
    });
  }

  filterBySales(){
    return this.filteredFood = this.recipeArray.filter((food: Hit) => {
      return food.recipe.sales;
    });
  }

  filterByCategory(category: string){
    const keywordsDrink = ['cocktail ', 'drink', 'tea', 'coffee','alcohol', 'juice']
    if(category == 'Drink'){
      this.filteredFood = this.recipeArray.filter((food: Hit) => {
        return keywordsDrink.some((el)=>{
          return food.recipe.label.toLowerCase().includes(el.toLowerCase());
        })
      });
    }
    else{
      this.filteredFood = this.recipeArray.filter((food: Hit) => {
        return food.recipe.label.toLowerCase().includes(category.toLowerCase());
      });
    }
  }
  getBooks = async () => {
    // based on this url https://localhost:7033/api/Book fetch data
    const url = `https://localhost:7033/api/Book`;
    const response = await fetch(url);
    console.log(response)
    return await response.json();
  }

  postBook = async () => {
    const url = `https://localhost:7033/api/Book`;
    // based on this url https://localhost:7033/api/Book post data
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'test',
        author: 'test',
        description: 'test',
        rating: 4,
        status: 'reading'
      })
    });
  }

  async ngOnInit() {
    console.log(this.searchTerm);
    const keywords = [
      'cheeseburger', 'Hawaii 5-0 Burger', 'Lamb kebab burger',
      'The Ultimate Burger', 'Buffalo Cambozola burger', 'Grapefruit Blossom Aperitif',
      'Tipsy Tea with Homemade Sweet Tea', "Pizza capricciosa", "Pizza Margherita",
      "Pizza marinara", "Pizza quattro stagioni", "Pizza romana"];

    const fetchPromises = keywords.map(async (el) => {
      const cachedFoods = this.cacheFoodService.getRecipes(el);
      if (cachedFoods) {
        this.recipeArray.push(cachedFoods);
      } else {
        try {
          const data = await firstValueFrom(this.foodService.fetchRecipesByKeyword(el));
          if (data && data.hits && data.hits.length > 0) {
            const recipe = data.hits[0];
            console.log(recipe);
            recipe.recipe.price = Math.floor(Math.random() * 10) + 1;
            recipe.recipe.sales = Math.random() < 0.5;
            this.recipeArray.push(recipe);
            this.cacheFoodService.setRecipes(el, recipe);
          } else {
            console.error("No data received or empty data from API call");
          }
        } catch (error) {
          console.error("Error in API call:", error);
        }
      }
    });

    // Wait for all promises to resolve
    await Promise.all(fetchPromises);

    this.filteredFood = [...this.recipeArray]
    this.getDataSource()
    //call getBook function
    this.getBooks().then((data) => {
      console.log(data)
    })
    this.postBook().then((data) => {
      console.log(data)
    })

  }
}
