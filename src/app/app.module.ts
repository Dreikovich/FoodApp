import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/ui/layout/layout.component';
import {HeaderModule} from "./components/ui/layout/header/header.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/screens/home/home.component';
import { FoodItemComponent } from './components/screens/home/food-item/food-item.component';
import { SalesComponent } from './components/screens/sales/sales.component';
import { FavoritesComponent } from './components/screens/favorites/favorites.component';
import { ProfileComponent } from './components/screens/profile/profile.component';
import { HttpClientModule} from "@angular/common/http";
import { FoodListComponent } from './components/screens/home/food-list/food-list.component';
import { SearchComponent } from './components/screens/home/search/search.component';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import { CategoriesComponent } from './components/screens/home/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    FoodItemComponent,
    SalesComponent,
    FavoritesComponent,
    ProfileComponent,
    FoodListComponent,
    SearchComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
