import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { loadCharacters } from './strangerthings.actions';
import { StrangerThingsState, selectAllCustomers, selectCharacters } from './strangerthings.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit {

  characters: StrangerThingsState[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(loadCharacters()); // Dispatching the loadCharacters action

    this.store.select(selectAllCustomers).subscribe((state) => {
      this.characters = state;
    });
  }

}
