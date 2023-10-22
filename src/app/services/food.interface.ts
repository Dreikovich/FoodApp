
export interface ApiRecipeResponse {
  hits: Hit[];
}

export interface Hit{
  recipe:Recipe
}

export interface Recipe {
  uri:               string;
  label:             string;
  image:             string;
  images:            Images;
  source:            string;
  url:               string;
  ingredientLines:   string[];
  ingredients:       Ingredient[];
  calories:          number;
  totalWeight:       number;
  totalTime:         number;
  cuisineType:       string[];
  mealType:          string[];
  dishType:          string[];
  price :            number;
  sales:             boolean;
}

export interface Ingredient {
  text:         string;
  quantity:     number;
  measure:      string;
  food:         string;
  weight:       number;
  foodCategory: string;
  foodId:       string;
  image:        string;
}

export interface Images {
  THUMBNAIL: Regular;
  SMALL:     Regular;
  REGULAR:   Regular;
}

export interface Regular {
  url:    string;
  width:  number;
  height: number;
}
