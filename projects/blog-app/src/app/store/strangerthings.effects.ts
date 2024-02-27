import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../shared/api.service";
import { create } from "domain";
import { loadCharacters, loadCharactersFailure, loadCharactersSuccess } from "./strangerthings.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";

@Injectable()
export class StrangerThingsEffects {

    loadStrangerThings$ = createEffect(() => this.actions$.pipe(
        ofType(loadCharacters),
        switchMap(() => this.apiService.loadCharacters().pipe(
            map(characters => loadCharactersSuccess({characters})),
            catchError(() => of(loadCharactersFailure()))
    ))));

    constructor(
        private actions$: Actions, 
        private apiService: ApiService
        ) {}
}