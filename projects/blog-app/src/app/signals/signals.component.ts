import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  count = signal<number>(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    this.count.set(2);
  }

  increment(): void {
    this.count.update(v => v + 1);
  }

}
