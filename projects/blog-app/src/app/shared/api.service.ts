import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    subject$ = new Subject<string>();
    behaviourSubject$ = new BehaviorSubject<string>('initial value');

    constructor(private httpClient: HttpClient) {}

    loadCharacters(): Observable<any[]> {
        const url = 'stranger-things-api.fly.dev/api/v1/characters';
        return this.httpClient.get<any[]>(url);
    }
}