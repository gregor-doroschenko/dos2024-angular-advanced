import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string): void {
    const date = new Date().toISOString();
    console.log(`[${date}] ${message}`);
  }
}
