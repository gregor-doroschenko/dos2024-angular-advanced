import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    // Erzeugt ein Subject
    subject$ = new Subject<string>();
    // Erzeugt ein BehaviorSubject, der einen initialen Wert hat
    behaviourSubject$ = new BehaviorSubject<string>('initial value');

    constructor(private httpClient: HttpClient) {}

    loadCharacters(): Observable<any[]> {
        const url = 'https://stranger-things-api.fly.dev/api/v1/characters';
        return this.httpClient.get<any[]>(url);
    }
}