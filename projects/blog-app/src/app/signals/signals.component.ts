import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  count = signal<number>(0); // Writeable signal
  doubleCount = computed(() => this.count() * 2); // Computed signal und Read-only

  constructor() {
    this.count.set(2); // Set the value of the signal
  }

  increment(): void {
    this.count.update(v => v + 1); // Update the value of the signal
  }

}
