import { Component, EventEmitter, Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.css'
})
export class CitySearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', [Validators.minLength(3)])

  constructor(){
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(
      searchValue => {
        if (!this.search.invalid)
          this.searchEvent.emit(searchValue??undefined)
      }
     )
  }
}
