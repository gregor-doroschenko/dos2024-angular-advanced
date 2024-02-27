import { Component, OnDestroy } from '@angular/core';
import { InitComponent, LoggerService } from '@mylib/logger-lib';
import { simpleObservable } from '../shared/observable-factories';
import { Observable, Subscription, fromEvent, map, of, take, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InitComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy {

  userAge: number[] = [22, 40, 18];

  subscription = new Subscription();

  userAge$: Observable<any>;

  constructor(private loggerService: LoggerService, private apiService: ApiService) {
    this.loggerService.log('HomeComponent created');

    // Kill subscription from pipe async in html template
    this.userAge$ = of(this.userAge);

    // Unsibsribe from observable after 3 clicks
    fromEvent(document, 'click').pipe(
      map((event) => this.loggerService.log(`ClickEvent: ${event.type}`)),
      take(3)
    ).subscribe(() => this.loggerService.log('ClickEvent: 3x geklickt'));

    const simple$ = simpleObservable();
    // Füge unsere subscription hinzu um diese später in NgOnDestroy zu unsubscriben
    this.subscription.add(
      simple$.pipe(
        map((value) => value.toUpperCase())
      ).subscribe({
        next: (value) => this.loggerService.log(value),
        error: (error) => this.loggerService.log(error),
        complete: () => this.loggerService.log('Fertig')
      })
    );

    this.subscription.add(
      this.apiService.subject$.subscribe((value) => this.loggerService.log(`Subject: ${value}`))
    );

    this.subscription.add(
      this.apiService.behaviourSubject$.subscribe((value) => this.loggerService.log(`BehaviourSubject: ${value}`))
    );


    setTimeout(() => {
      this.apiService.subject$.next('Hallo');
      this.apiService.behaviourSubject$.next('World!');
      this.apiService.behaviourSubject$.complete();
    }, 5000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
