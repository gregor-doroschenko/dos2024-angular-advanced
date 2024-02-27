import { Component } from '@angular/core';
import { InitComponent, LoggerService } from '@mylib/logger-lib';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InitComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private loggerService: LoggerService) {
    this.loggerService.log('HomeComponent created');
  }

}
