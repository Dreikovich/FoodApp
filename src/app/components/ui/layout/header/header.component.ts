import { Component, OnInit } from '@angular/core';
import {IMenuItem} from "./header.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuItems: IMenuItem[] = [
    {
      path:'/',
      icon:'home'
    },
    {
      path:'/sales',
      icon:'percent'
    },
    {
      path:'/favorites',
      icon:'favorite'
    },
    {
      path:'/profile',
      icon:'person'
    }
  ]

  constructor(){}

  ngOnInit(): void{

  }

}
