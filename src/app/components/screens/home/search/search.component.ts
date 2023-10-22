import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  /*@Input() foods: Hit[] = [];*/
  @Output() searchValue = new EventEmitter<string>();
  enteredSearchValue:string = '';

  handleSearch (){
    this.searchValue.emit(this.enteredSearchValue);
  }
}
