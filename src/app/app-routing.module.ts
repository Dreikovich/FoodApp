import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/screens/home/home.component";
import {SalesComponent} from "./components/screens/sales/sales.component";
import {FavoritesComponent} from "./components/screens/favorites/favorites.component";
import {ProfileComponent} from "./components/screens/profile/profile.component";

const routes: Routes = [
  {
  path: "",
  component:HomeComponent
  },
  {
    path: "sales",
    component:SalesComponent
  },
  {
    path: "favorites",
    component:FavoritesComponent
  },
  {
    path: "profile",
    component:ProfileComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
